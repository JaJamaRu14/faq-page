const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    this.classList.toggle('strong');
    buttons.forEach(function (b) {
      if (b.classList.contains('collapsed')) {
        b.classList.remove('strong');
      }
    });
  });
});

const womanImg = document.querySelector('#woman-img');

if (window.innerWidth <= 400) {
  womanImg.src = './images/illustration-woman-online-mobile.svg';
  document.querySelector('#orange-box').remove();
}

window.onresize = switchImg;

function switchImg() {
  if (window.innerWidth <= 1000) {
    womanImg.src = './images/illustration-woman-online-mobile.svg';
    document.querySelector('#orange-box').remove();
  } else if (window.innerWidth >= 1000) {
    womanImg.src = './images/illustration-woman-online-desktop.svg';
    if (!document.querySelector('#orange-box')) {
      let newBox = document.createElement('img');
      newBox.src = './images/illustration-box-desktop.svg';
      newBox.alt = 'a orange box with @mark';
      newBox.id = 'orange-box';
      womanImg.before(newBox);
    }
  }
}
