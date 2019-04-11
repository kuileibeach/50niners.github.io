var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'kbg-icon4.png') {
      myImage.setAttribute ('src','sunrise-dh.png');
    } else {
      myImage.setAttribute ('src','kbg-icon4.png');
    }
}

