var closeButton = document.querySelector('.x-button');

var welcomeDisapear = document.querySelector('.blue-button');

var clipBoardIcon = document.querySelector('.dashboard-clipboard');

var walletIcon = document.querySelector('.dashboard-wallet');

var mainDisapear = document.querySelector('.hide');

var hiddenPage = document.querySelector('.hidden')

closeButton.addEventListener('click', closeWelcome);

clipBoardIcon.addEventListener('click', moveSideBar);

walletIcon.addEventListener('click', walletApear);


function moveSideBar(){
  clipBoardIcon.classList.add("color-border");
  walletIcon.classList.remove("color-border");
  mainDisapear.style.display = 'initial';
  hiddenPage.classList.add('hidden');

}

function walletApear(){
  walletIcon.classList.add("color-border");
  clipBoardIcon.classList.remove("color-border");
  mainDisapear.style.display = 'none';
  hiddenPage.classList.remove('hidden')

}


function closeWelcome (){
  welcomeDisapear.style.display = 'none';
}
