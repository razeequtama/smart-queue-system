const token =
    localStorage.getItem("token");

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

loadDoctors();
loadMyAppointments();

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

        if (
            msg.sender_role ===
            "patient"
        ) {

            className =
                "patient-message";

        } else {

            className =
                "admin-message";

        }

        container.innerHTML += `

            <div
                class="
                    message
                    ${className}
                "
            >

                <strong>
                    ${msg.sender_role}
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

    loadNotifications();

}, 3000);

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