let currentpage = "";

function switchpage(selected) {
    let pages = document.getElementsByClassName("container");
    let page = document.getElementsByClassName(selected)[0];
    let full = document.getElementsByClassName("full")[0];
    let minimal = document.getElementsByClassName("minimal")[0];
    let footer = document.getElementsByClassName("footer")[0];
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.opacity = 0;
        pages[i].style.display = "none";
    }
    page.style.display = "block";
    currentpage = page.className;
    setTimeout(() => {
        page.style.opacity = 1;
    }, this.animationDelay + 20);
    if ((currentpage == "container page-selector") || (currentpage == "container page-home")) {
        minimal.style.display = "inline";
        setTimeout(() => {
            minimal.style.opacity = 1;
        }, this.animationDelay + 20);
        full.style.display = "none";
        full.style.opacity = 0;
        if (currentpage == "container page-home") {
            footer.style.display = "inherit";
            setTimeout(() => {
                footer.style.opacity = 1;
            }, this.animationDelay + 20);
        } else {
            footer.style.display = "none";
            footer.style.opacity = 0;
        }
    } else {
        full.style.display = "inline";
        setTimeout(() => {
            full.style.opacity = 1;
        }, this.animationDelay + 20);
        minimal.style.display = "none";
        minimal.style.opacity = 0;
        document.getElementById('menucurrent').innerText = document.getElementsByClassName(selected)[0].getAttribute("title");
        footer.style.display = "none";
        footer.style.opacity = 0;
    }
    return;
}
