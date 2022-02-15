let nameElement = document.getElementsByTagName("h1")[0];

let smallScreen = window.matchMedia("(max-width: 576px)");

let toggleLeft = true;

showName("Priyanka Mary Christine", 0);
const interval = setInterval(animatePhotoAndDescription, 7000);

// Displays the name letter by letter with a small delay.
function showName(myName, index) {
    if (index < myName.length) {
        nameElement.append(myName[index++]);
        setTimeout(function () { showName(myName, index); }, 400);
    }
}

// Adds a little animation
function animatePhotoAndDescription() {
    // Shakes the photo vertically
    $("#priyanka").effect("bounce", { times: 3 }, "slow");

    // Animates the description of each project
    if (smallScreen.matches) {
        toggleDescription(10, 19);
    }
    else {
        toggleDescription(40, 20);
    }
}

function toggleDescription(leftOffset, fontSize) {
    if (toggleLeft) {
        $(".description").animate({ "left": `+=${leftOffset}px` }, "slow").animate({ "font-size": `${fontSize}px` }, "slow");
        toggleLeft = false;
    }
    else {
        $(".description").animate({ "font-size": "18px" }, "slow").animate({ "left": `-=${leftOffset}px` }, "slow");
        toggleLeft = true;
    }
}


// animate({ "left": `+=${leftOffset}px` }, "slow")

// .animate({ "left": `-=${fontSize}px` }, "slow")