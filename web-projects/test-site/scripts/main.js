let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../test-picture/R-C.jpg') {
      myImage.setAttribute('src', 'MyImage.png');
    } else {
      myImage.setAttribute('src', '../test-picture/R-C.jpg');
    }
}

