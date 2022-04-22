function openNav() {
    const openIt = document.getElementById("mySidenav");
    openIt.style.width = '250px';
}

function closeNav() {
    const closeIt = document.getElementById("mySidenav");
    closeIt.style.width = "0px";
}

function twiiterPage() {
    const url = "https://twitter.com/i/flow/login";
    window.open (url, "_blank");
}