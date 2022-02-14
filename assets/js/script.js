let nameElement = document.getElementsByTagName("h1")[0];
let photo = document.getElementById("priyanka");

showName("Priyanka Mary Christine", 0);
// shakePhoto();

// Displays the name letter by letter with a small delay.
function showName(myName, index) {
    if (index < myName.length) {
        nameElement.append(myName[index++]);
        setTimeout(function () { showName(myName, index); }, 400);
    }
}

const interval = setInterval(shakePhoto, 10000);

function shakePhoto() {
    $( "#priyanka" ).effect( "bounce", { times: 3 }, "slow" );
}