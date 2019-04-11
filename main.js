var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'kicking-ball.png') {
      myImage.setAttribute ('src','sunrise-dh.png');
    } else {
      myImage.setAttribute ('src','kicking-ball.png');
    }
}

