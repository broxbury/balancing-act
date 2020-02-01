var closeButton = document.querySelector('.x-button');

var welcomeDisapear = document.querySelector('.blue-button');

var clipBoardIcon = document.querySelector('.dashboard-clipboard');

var walletIcon = document.querySelector('.dashboard-wallet');

var mainDisapear = document.querySelector('.hide');

closeButton.addEventListener('click', closeWelcome);

clipBoardIcon.addEventListener('click', moveSideBar);

walletIcon.addEventListener('click', walletApear);

// fucntion
function moveSideBar(){
  clipBoardIcon.classList.add("color-border");
  walletIcon.classList.remove("color-border");

}

function walletApear(){
  walletIcon.classList.add("color-border");
  clipBoardIcon.classList.remove("color-border");
  mainDisapear.style.display = 'none';

}






function closeWelcome (){
  welcomeDisapear.style.display = 'none';
}
