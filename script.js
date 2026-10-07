const quoteForm = document.querySelector("#quote-form");

quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const model = document.querySelector("#model").value.trim();
const location =
    document.querySelector("#location").value.trim();
    const problem = document.querySelector("#problem").value.trim();

    const businessPhone = "+18647067184";

    const message = `
Hi, my name is ${name}.

I would like a phone repair quote.

My phone number: ${phone}
Phone model: ${model}
Location: ${location}
Problem: ${problem}
`;

    const encodedMessage = encodeURIComponent(message);

    const smsLink =
        `sms:${businessPhone}?body=${encodedMessage}`;

    window.location.href = smsLink;

});

const menuToggle =
    document.querySelector("#menu-toggle");

const navLinks =
    document.querySelector("#nav-links");


menuToggle.addEventListener("click", function() {

    const menuIsOpen =
        navLinks.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});

const navItems =
    navLinks.querySelectorAll("a");


navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});