const nameElement = document.getElementsByTagName("h1")[0];
const header = document.getElementsByTagName("header")[0];
const hamburgerIcon = document.getElementsByClassName("icon");
const hamburgerLinks = document.getElementById("myLinks");
const navigationLinks = $("header nav ul li a");

let toggleFontSize = true;

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
    if (toggleFontSize) {
        $(".description").animate({ "font-size": "20px" }, "slow");
        toggleFontSize = false;
    }
    else {
        $(".description").animate({ "font-size": "18px" }, "slow");
        toggleFontSize = true;
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function showOrHideNavigationLinks() {
    if (hamburgerLinks.style.display === "block") {
        hamburgerLinks.style.display = "none";
    }
    else {
        hamburgerLinks.style.display = "block";
    }
}

// Hide the hamburger navigation links if displayed on larger screens
function hideNavigationLinks() {
    if (window.innerWidth > 425) {
        if (hamburgerLinks.style.display === "block") {
            hamburgerLinks.style.display = "none";
        }
    }
}

// This helps to display the sections below the sticky header without hiding when we click on navigation links in hamburger menu.
function addPaddingToSectionMobile(event) {
    const element = event.target;
    if (element.matches("a")) {
        const link = element.getAttribute("href");
        $(".section").css("padding", "2%");
        if (link === "#about" || link === "#work")
            $(`${link}`).css("padding-top", "60%");
    }
}

// This helps to display the sections below the sticky header without hiding when we click on navigation links.
function addPaddingToSection(event) {
    const element = event.target;
    const link = element.getAttribute("href");
    
    $(".section").css("padding", "2%");
    if (link === "#about" || link === "#work")
            $(`${link}`).css("padding-top", "6%");
}

// When the user scrolls down 80px from the top of the document, resize the header
function scrollFunction() {
    if (window.innerWidth > 425) {
        if (document.documentElement.scrollTop > 80) { 
            header.style.padding = "2%";
        } else {
            document.documentElement.scrollTop = 0;
            header.style.padding = "5%";
            $(".section").css("padding", "2%");
        }
    }
}

// Event listeners
window.addEventListener("resize", hideNavigationLinks);
hamburgerLinks.addEventListener("click", addPaddingToSectionMobile);
navigationLinks.on("click", addPaddingToSection);
window.addEventListener("scroll", scrollFunction);

