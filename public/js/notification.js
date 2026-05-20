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