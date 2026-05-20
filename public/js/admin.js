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

    queues.forEach((queue) => {

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
}

if (user.unread_count > 0) {

    style = "font-weight:bold";

} else {

    style = "";
}

setInterval(() => {

    loadChatUsers();

}, 3000);
