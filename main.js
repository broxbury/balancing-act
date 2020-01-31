var closeButton = document.querySelector('.x-button');

var welcomeDisapear = document.querySelector('.blue-button');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome (){
  welcomeDisapear.style.display = 'none';
}
