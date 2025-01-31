function updateWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sizeInfoDiv = document.getElementById("sizeInfo");
    sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}
window.addEventListener("resize", updateWindowSize);
updateWindowSize();
