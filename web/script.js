document.addEventListener("DOMContentLoaded", function() {
    for (const element of document.getElementsByClassName("picture-navigator")) {
        const right = element.getElementsByClassName("picture-navigator-button-right")[0];
        const left = element.getElementsByClassName("picture-navigator-button-left")[0];
        right.addEventListener("click", function() {
            rightClick(element);
        });
        left.addEventListener("click", function() {
            leftClick(element);
        });
        onGalleryClick(element, 0);
    }
});

function rightClick(element) {
    onGalleryClick(element, 1);
}

function leftClick(element) {
    onGalleryClick(element, -1);
}

function onGalleryClick(element, increment) {
    const imageContainer = element.children[0];
    const parsedId = parseInt(imageContainer.dataset.imageIndex);
    var nextId = parsedId + increment;
    if (nextId === imageContainer.children.length) {
        nextId = 0;
    } else if (nextId === -1) {
        nextId = imageContainer.children.length - 1;
    }
    imageContainer.dataset.imageIndex = nextId;
    imageContainer.style.right = nextId * 100 + '%';
    element.children[1].children[0].textContent = imageContainer.children[nextId].children[0].alt;
    //alert(parsedId + 'b' + nextId);
}