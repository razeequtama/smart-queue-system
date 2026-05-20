const token =
    localStorage.getItem("token");

let myAppointments = [];

if (!token) {

    window.location.href =
        "login.html";

}

async function loadDoctors() {

    const response =
        await fetch("/api/doctors");

    const doctors =
        await response.json();

    const select =
        document.getElementById("doctor");

    doctors.forEach((doctor) => {

        select.innerHTML += `
            <option value="${doctor.id}">
                ${doctor.doctor_name}
            </option>
        `;
    });
}

async function createAppointment() {

    const doctor_id =
        document.getElementById("doctor").value;

    const appointment_date =
        document.getElementById("date").value;

    const appointment_time =
        document.getElementById("time").value;

    const response = await fetch(
        "/api/queues",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",

                Authorization:
                    `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor_id,
                appointment_date,
                appointment_time
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    loadMyAppointments();
}

async function loadMyAppointments() {

    const response = await fetch(
        "/api/queues/my",
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    const appointments =
        await response.json();

    myAppointments = appointments;

    const container =
        document.getElementById(
            "appointments"
        );

    container.innerHTML = "";

    appointments.forEach((item) => {

        container.innerHTML += `
            <div class="card">

                <h3>
                    ${item.doctor_name}
                </h3>

                <p>
                    Date:
                    ${item.appointment_date}
                </p>

                <p>
                    Time:
                    ${item.appointment_time}
                </p>

                <p>
                    Status:
                    ${item.status}
                </p>

            </div>
        `;
    });
}

function logout() {

    localStorage.clear();

    window.location.href =
        "login.html";
}

async function initializePatientPage() {
    await loadDoctors();
    await loadMyAppointments();
    await loadNotifications();
}

initializePatientPage();

function openChat() {

    document
        .getElementById("chatBox")
        .classList.remove("hidden");

    fetch(
        "/api/chat/read/patient",
        {
            method: "PUT",

            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    loadMessages();

    checkUnreadMessages();
}

function closeChat() {

    document
        .getElementById("chatBox")
        .classList.add("hidden");
}

async function loadMessages() {

    const response = await fetch(
        "/api/chat/my",
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    const messages =
        await response.json();

    const container =
        document.getElementById(
            "chatMessages"
        );

    container.innerHTML = "";

    messages.forEach((msg) => {

        let className = "";
        let senderLabel = "";

        if (
            msg.sender_role ===
            "patient"
        ) {

            className =
                "patient-message";
            senderLabel =
                msg.sender_name
                    ? `Patient - ${msg.sender_name}`
                    : "Patient";

        } else {

            className =
                "admin-message";
            senderLabel =
                msg.sender_name
                    ? `Admin - ${msg.sender_name}`
                    : "Admin";

        }

        container.innerHTML += `

            <div
                class="
                    message
                    ${className}
                "
            >

                <strong>
                    ${senderLabel}
                </strong>

                <p>
                    ${msg.message}
                </p>

            </div>

        `;
    });

    container.scrollTop =
        container.scrollHeight;
}

function getAppointmentReminders() {
    const reminders = [];
    const now = new Date();

    myAppointments.forEach((item) => {
        if (
            item.status === "cancelled" ||
            item.status === "complete"
        ) {
            return;
        }

        const dateTimeString =
            `${item.appointment_date}T${item.appointment_time}:00`;
        const appointmentDate =
            new Date(dateTimeString);

        if (isNaN(appointmentDate)) {
            return;
        }

        const diffMs =
            now - appointmentDate;
        const diffMinutes =
            diffMs / 60000;

        if (
            diffMinutes >= 0 &&
            diffMinutes < 5
        ) {
            reminders.push({
                title:
                    "It's your turn on the queue",
                message:
                    "Your appointment is scheduled now. Please go to the clinic. If you cannot come, cancel the appointment.",
                is_read: 0
            });
        } else if (
            diffMinutes >= 5 &&
            diffMinutes < 15
        ) {
            reminders.push({
                title:
                    "You are 5 minutes late to your appointment",
                message:
                    "You are late. Please cancel or reschedule if you cannot arrive soon.",
                is_read: 0
            });
        }
    });

    return reminders;
}

async function loadNotifications() {

    const notifications =
        await fetchNotifications();

    const container =
        document.getElementById(
            "notifications"
        );

    const reminders =
        getAppointmentReminders();

    container.innerHTML = "";

    if (
        !notifications.length &&
        !reminders.length
    ) {

        container.innerHTML =
            "<p>No notifications</p>";

        return;
    }

    notifications.forEach((notif) => {

        const payload =
            getNotificationPayload(notif);

        const text =
            payload.text || notif.message;

        const unreadStyle =
            notif.is_read == 0
                ? "font-weight:bold;"
                : "";

        container.innerHTML += `
            <div
                class="card"
                style="cursor:pointer; ${unreadStyle}"
                onclick="openNotification(
                    ${notif.id}
                )"
            >
                <strong>
                    ${notif.title}
                </strong>

                <p>
                    ${text}
                </p>
            </div>
        `;
    });

    reminders.forEach((reminder) => {
        container.innerHTML += `
            <div class="card">
                <strong>
                    ${reminder.title}
                </strong>

                <p>
                    ${reminder.message}
                </p>
            </div>
        `;
    });
}

async function openNotification(
    notificationId
) {

    await markNotificationRead(
        notificationId
    );

    openChat();
    loadNotifications();
}

async function sendMessage() {

    const message =
        document.getElementById(
            "messageInput"
        ).value;

    if (!message) {

        return;

    }

    await fetch(
        "/api/chat/send",
        {
            method: "POST",

            headers: {

                "Content-Type":
                    "application/json",

                Authorization:
                    `Bearer ${token}`
            },

            body: JSON.stringify({
                message
            })
        }
    );

    document.getElementById(
        "messageInput"
    ).value = "";

    loadMessages();
}

setInterval(() => {

    loadMyAppointments();
    loadNotifications();

}, 30000);

setInterval(() => {

    const chatBox =
        document.getElementById(
            "chatBox"
        );

    if (
        !chatBox.classList.contains(
            "hidden"
        )
    ) {

        loadMessages();

    }

}, 3000);

async function checkUnreadMessages() {

    const response = await fetch(
        "/api/chat/my",
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    const messages =
        await response.json();

    const unread =
        messages.filter((msg) => {

            return (
                msg.sender_role ===
                "admin"

                &&

                msg.is_read == 0
            );

        });

    const badge =
        document.getElementById(
            "chatBadge"
        );

    if (unread.length > 0) {

        badge.innerText =
            unread.length;

    } else {

        badge.innerText = "";

    }
}

setInterval(() => {

    checkUnreadMessages();

}, 3000);