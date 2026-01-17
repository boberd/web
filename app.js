let orders = [];

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // BUG: password validation is missing
    if (user === "admin") {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("orders-section").classList.remove("hidden");
    } else {
        document.getElementById("login-error").innerText = "Invalid credentials";
    }
}

function addOrder() {
    const client = document.getElementById("clientName").value;
    const type = document.getElementById("containerType").value;
    const qty = document.getElementById("quantity").value;

    // BUG: empty fields allowed
    orders.push({ client, type, qty });
    renderOrders();
}

function renderOrders() {
    const table = document.getElementById("ordersTable");
    table.innerHTML = "";

    orders.forEach((order, index) => {
        table.innerHTML += `
            <tr>
                <td>${order.client}</td>
                <td>${order.type}</td>
                <td>${order.qty}</td>
                <td>
                    <button onclick="deleteOrder(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteOrder(index) {
    orders.splice(index, 1);
    renderOrders();
}

function filterOrders() {
    const search = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#ordersTable tr");

    rows.forEach(row => {
        const client = row.children[0].innerText.toLowerCase();
        row.style.display = client.includes(search) ? "" : "none";
    });
}
