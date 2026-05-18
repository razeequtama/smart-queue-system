async function register() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone_number =
        document.getElementById("phone").value;

    const password =
        document.getElementById("password").value;

    const role =
        document.getElementById("role").value;

    if (
        !name ||
        !email ||
        !phone_number ||
        !password
    ) {

        alert("All fields are required");

        return;
    }

    const response = await fetch(
        "/api/auth/register",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                phone_number,
                password,
                role
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {

        window.location.href =
            "login.html";

    }
}