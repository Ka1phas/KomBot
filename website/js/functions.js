function E(query) {
    return document.querySelector(query);
}

function getCirclePathLength(circle_element) {
    return 2 * Math.PI * circle_element.getAttribute("r");
}

function getInfoBoxHeight(info_box_element) {
    var height = 0;
    info_box_element.style.display = "block";
    info_box_element.style.height = "auto";
    info_box_element.style.paddingTop = "10px";
    info_box_element.style.paddingBottom = "10px";
    height = info_box_element.offsetHeight;
    info_box_element.style.height = "0";
    info_box_element.style.paddingTop = "0";
    info_box_element.style.paddingBottom = "0";
    info_box_element.style.display = "none";
    return height;
}