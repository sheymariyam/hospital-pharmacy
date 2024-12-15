document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const totalPrice = localStorage.getItem("totalPrice") || 0;

    const checkoutTableBody = document.querySelector("#checkout-table tbody");
    const checkoutTotalPrice = document.getElementById("checkout-total-price");

    for (const [itemName, itemDetails] of Object.entries(cart)) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${itemName}</td>
            <td>${itemDetails.quantity}</td>
            <td>$${itemDetails.price}</td>
            <td>$${itemDetails.total}</td>
        `;

        checkoutTableBody.appendChild(row);
    }

    checkoutTotalPrice.textContent = `Total: $${totalPrice}`;

    const checkoutForm = document.getElementById("checkout-form");
    const confirmationSection = document.getElementById("confirmation-section");

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const payment = document.getElementById("payment").value;

        confirmationSection.innerHTML = `
            <h3>Thank you for your purchase, ${name}!</h3>
            <p>Your order will be delivered to: ${address}</p>
            <p>Payment method: ${payment}</p>
            <p> email: ${email}</P>
        `;
    });
});
