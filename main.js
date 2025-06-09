window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //calc to verify where the scroll is on viewport
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //is inside the section
    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigationHeader.classList.add('scroll')
        logoImage.setAttribute('src', './assets/logo.png')
    } else {
        navigationHeader.classList.remove('scroll')
        logoImage.setAttribute('src', './assets/logo-dark.png')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
    function isMobile() {
        const minWidth = 768; // Minimum width for desktop devices
        return window.innerWidth < minWidth || screen.width < minWidth;
    }

    if (isMobile()) {
        if (scrollY > 4000) {
            backToTopButton.classList.add('footerColor')
        } else {
            backToTopButton.classList.remove('footerColor')
        }
    } else {
        if (scrollY > 2000) {
            backToTopButton.classList.add('footerColor')
        } else {
            backToTopButton.classList.remove('footerColor')
        }
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
    logoImage.setAttribute('src', './assets/logo.png')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
    logoImage.setAttribute('src', './assets/logo-dark.png')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about content`)
