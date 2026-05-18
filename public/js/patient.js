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