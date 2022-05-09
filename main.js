//String (texto)
//Number (número)
//Boolean (true ou false)

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() { // onScrol responsabilidade gerenciar diversos scroll da pag
    showNavOnScroll()// mostrar o navigation ao fazer o scroll
    showBackToTopButtonOnScroll()//mostrar o botão backToTop ao fazer scroll
    
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção  passou da linha
    // quais dados vou precisar

    // o top da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReach0rPassedTargetLine = targetLine >= sectionTop
   
    // informação dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReach0rPassedTargetLine)


    // verificar se a base está abaixo da linha alvo
    //quais dados vou precisar
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha', sectionEndPassedTargetLine)


    // Limites da seção
    const sectionBoundaries = sectionTopReach0rPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)



    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) { // if = se algo for verdadeiro, faça alguma coisa
        navigation.classList.add('scroll')
    } else { //else = se não faça outra coisa
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 300) { // if = se algo for verdadeiro, faça alguma coisa
        backToTopButton.classList.add('show')
    } else { //else = se não faça outra coisa
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}



//Animação da página
ScrollReveal({
    origin: 'top', 
    distance: '30px', 
    duration: 700
}).reveal(`#home,
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);

activateMenuAtCurrentSection 