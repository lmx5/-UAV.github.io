let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');
var count=0;

myButton.onclick = function() {
   setUserName();
}
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../test-picture/R-C.jpg') {
      myImage.setAttribute('src', 'MyImage.png');
    } else {
      myImage.setAttribute('src', '../test-picture/R-C.jpg');
    }
}

function setUserName() {
	count++; 
  let myName = prompt('请输入你的名字。');
  if(!myName) {
	 
    setUserName();
// if(parseInt(count)>eval(2)) 
// {count=0;  alert('行吧') ；return ;}
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

document.querySelector('html').addEventListener('click', () => {
  alert('别戳我，我怕疼。');
});