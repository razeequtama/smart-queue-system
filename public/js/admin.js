let currentChatUserId = null;
let currentChatUserName = "";
let chatUsersList = [];

const token =
    localStorage.getItem("token");

async function loadQueues() {

    const response = await fetch(
        "/api/queues",
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    const queues =
        await response.json();

    const container =
        document.getElementById("queues");

    container.innerHTML = "";

    queues.filter(queue => queue.status !== 'deleted').forEach((queue) => {

        container.innerHTML += `
            <div class="card">

                <h3>${queue.name}</h3>

                <p>
                    Doctor:
                    ${queue.doctor_name}
                </p>

                <p>
                    Status:
                    ${queue.status}
                </p>

                <select
                    onchange="updateStatus(
                        ${queue.id},
                        this.value
                    )"
                >

                    <option value="waiting">
                        waiting
                    </option>

                    <option value="consulting">
                        consulting
                    </option>

                    <option value="complete">
                        complete
                    </option>

                    <option value="cancelled">
                        cancelled
                    </option>

                </select>

                <button onclick="deleteQueue(
                    ${queue.id}
                )">
                    Delete
                </button>

            </div>
        `;
    });
}

async function updateStatus(id, status) {

    await fetch(`/api/queues/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type":
                "application/json",

            Authorization:
                `Bearer ${token}`
        },

        body: JSON.stringify({
            status
        })
    });

    loadQueues();
}

async function deleteQueue(id) {

    await fetch(`/api/queues/${id}`, {

        method: "DELETE",

        headers: {
            Authorization:
                `Bearer ${token}`
        }
    });

    loadQueues();
}

function logout() {

    localStorage.clear();

    window.location.href =
        "login.html";
}

loadQueues();
loadChatUsers();
loadNotifications();

async function loadChatUsers() {

    const response = await fetch(
        "/api/chat/admin/users",
        {
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    const users = await response.json();
    chatUsersList = users;

    const container =
        document.getElementById(
            "chatUsers"
        );

    container.innerHTML = "";

    users.forEach((user) => {

        let style = "";

        // 🔥 INI BAGIAN BOLD-NYA
        if (user.unread_count > 0) {

            style =
                "font-weight:bold";

        }

        container.innerHTML += `

            <div
                onclick="openAdminChat(
                    ${user.id}
                )"

                style="
                    ${style};
                    cursor:pointer;
                    margin-top:10px;
                "
            >

                ${user.name}

            </div>

        `;
    });

    const unreadTotal = users.reduce(
        (sum, user) => sum + (user.unread_count || 0),
        0
    );

    const badge = document.getElementById(
        "chatBadge"
    );

    if (badge) {
        badge.innerText =
            unreadTotal > 0
                ? unreadTotal
                : "";
    }
}

setInterval(() => {

    loadQueues();
    loadChatUsers();
    loadNotifications();

}, 3000);

async function openAdminChat(
    userId
) {

    currentChatUserId = userId;

    const user = chatUsersList.find(
        (item) => item.id === userId
    );

    currentChatUserName =
        user?.name || "User Chat";

    const chatNameElement =
        document.getElementById(
            "chatUserName"
        );

    if (chatNameElement) {
        chatNameElement.textContent =
            currentChatUserName;
    }

    document
        .getElementById(
            "adminChatBox"
        )
        .classList.remove("hidden");

    await fetch(
        `/api/chat/read/admin/${userId}`,
        {
            method: "PUT",

            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );

    loadAdminMessages(userId);

    loadChatUsers();
}

function closeAdminChat() {

    document
        .getElementById(
            "adminChatBox"
        )
        .classList.add("hidden");
}

function openChatIcon() {
    if (currentChatUserId) {
        openAdminChat(currentChatUserId);
        return;
    }

    if (chatUsersList.length > 0) {
        openAdminChat(chatUsersList[0].id);
    }
}

async function loadAdminMessages(
    userId
) {

    const response = await fetch(
        `/api/chat/admin/${userId}`,
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
            "adminChatMessages"
        );

    container.innerHTML = "";

    messages.forEach((msg) => {
        let className = "";
        let senderLabel = "";

        if (msg.sender_role === "patient") {
            className = "patient-message";
            senderLabel = msg.sender_name ? `Patient - ${msg.sender_name}` : "Patient";
        } else {
            className = "admin-message";
            senderLabel = msg.sender_name ? `Admin - ${msg.sender_name}` : "Admin";
        }

        container.innerHTML += `
            <div class="message ${className}">
                <strong>${senderLabel}</strong>
                <p>${msg.message}</p>
            </div>
        `;
    });

    container.scrollTop = container.scrollHeight;
    container.style.overflowY = "scroll"; // Ensure scrollability
    container.style.maxHeight = "400px"; // Set a max height for the chat box
}

async function loadNotifications() {

    const notifications =
        await fetchNotifications();

    const container =
        document.getElementById(
            "notifications"
        );

    container.innerHTML = "";

    if (!notifications.length) {

        container.innerHTML =
            "<p>No notifications</p>";

        return;
    }

    notifications.forEach((notif) => {

        const payload =
            getNotificationPayload(notif);

        const text =
            payload.text || notif.message;

        const title =
            payload.senderName
                ? `New message from ${payload.senderName}`
                : notif.title;

        const chatUserId =
            payload.chatUserId || 0;

        const unreadStyle =
            notif.is_read == 0
                ? "font-weight:bold;"
                : "";

        container.innerHTML += `
            <div
                class="card"
                style="cursor:pointer; ${unreadStyle}"
                onclick="openNotification(
                    ${notif.id},
                    ${chatUserId}
                )"
            >
                <strong>
                    ${title}
                </strong>

                <p>
                    ${text}
                </p>
            </div>
        `;
    });
}

async function openNotification(
    notificationId,
    chatUserId
) {

    await markNotificationRead(
        notificationId
    );

    if (chatUserId) {

        openAdminChat(
            chatUserId
        );

    } else {

        loadChatUsers();
    }

    loadNotifications();
}

async function sendAdminMessage() {

    const message =
        document.getElementById(
            "adminMessageInput"
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
                message,
                user_id:
                    currentChatUserId
            })
        }
    );

    document.getElementById(
        "adminMessageInput"
    ).value = "";

    loadAdminMessages(
        currentChatUserId
    );
}