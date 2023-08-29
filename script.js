const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {

    action.addEventListener("click", (e) => {
        console.log("action : ", action.parentElement);
        const url = action.parentElement.getAttribute("href");
        console.log("url : ", url);
        navigator.clipboard.writeText(url);
    })
});

