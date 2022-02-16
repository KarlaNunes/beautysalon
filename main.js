/* abre e fecha o menu quando clicar no ícone: hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') // faz a troca da classe show
  })
}

/* quando clicar em um item do menu, esconder menu  */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll (rolar a página) */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll (ROLAGEM) é maior ou igual a altura do header
    header.classList.add('scroll') //adicionando class 'scroll' no header
  } else {
    //scroll menor que a altura do header
    header.classList.remove('scroll') //removendo class 'scroll' do header
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página (animações) */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*Botão voltar para o topo (para aparecer na tela) */
const backToTopButton = document.querySelector('.back-to-top') //pegando o botão
function backToTop() {
  // janela ouvindo/esperando o scroll
  if (window.scrollY >= 560) {
    //560 = tamanho da sessão home (seta só aparece a partir da próx. sessão)
    backToTopButton.classList.add('show') //adicionando classe 'show' à lista/coleção de classes do botão (seta pra cima)
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página (selecionado) */
const sections = document.querySelectorAll('main section[id]') //todas as minhas seções
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //definindo checkpoint na página

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When scroll (só jogar função aqui dentro) */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
