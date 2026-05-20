async function loadNotifications() {

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

    const notifications =
        await response.json();

    notifications.forEach((notif) => {

        if (!notif.is_read) {

            console.log(
                notif.message
            );
        }
    });
}