let name = document.getElementsByTagName("h1")[0];

showName("Priyanka Mary Christine", 0);   

// Displays the name letter by letter with a small delay.
function showName(myName, index) {   
    if (index < myName.length) {
      name.append(myName[index++]);
      setTimeout(function () { showName(myName, index); }, 400);
    }
  }
