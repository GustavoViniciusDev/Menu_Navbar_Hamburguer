const btnMobile = document.getElementById('btn-mobile')

function toqueMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toqueMenu)
