async function fetchNotifications() {

    const response =
        await fetch(
            "/api/notifications",
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

    if (!response.ok) {
        return [];
    }

    return response.json();
}

async function markNotificationRead(notificationId) {

    if (!notificationId) {
        return;
    }

    await fetch(
        `/api/notifications/${notificationId}/read`,
        {
            method: "PUT",
            headers: {
                Authorization:
                    `Bearer ${token}`
            }
        }
    );
}

function getNotificationPayload(notification) {

    if (!notification || !notification.message) {
        return {
            text: ""
        };
    }

    try {
        return JSON.parse(notification.message);
    } catch {
        return {
            text: notification.message
        };
    }
}

async function fetchQueueReminders() {
    const response = await fetch("/api/queues/reminders", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    if (!response.ok) {
        console.error("Failed to fetch queue reminders");
        return [];
    }

    return await response.json();
}

async function loadNotifications() {
    const notifications = await fetchNotifications();
    const reminders = await fetchQueueReminders();

    const container = document.getElementById("notifications");
    container.innerHTML = "";

    if (!notifications.length && !reminders.length) {
        container.innerHTML = "<p>No notifications</p>";
        return;
    }

    notifications.forEach((notif) => {
        const payload = getNotificationPayload(notif);
        const text = payload.text || notif.message;
        const unreadStyle = notif.is_read == 0 ? "font-weight:bold;" : "";

        container.innerHTML += `
            <div class="card" style="cursor:pointer; ${unreadStyle}" onclick="openNotification(${notif.id})">
                <strong>${notif.title}</strong>
                <p>${text}</p>
            </div>
        `;
    });

    reminders.forEach((reminder) => {
        container.innerHTML += `
            <div class="card">
                <strong>${reminder.title}</strong>
                <p>${reminder.message}</p>
            </div>
        `;
    });
}