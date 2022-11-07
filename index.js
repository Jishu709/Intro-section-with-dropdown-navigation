document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    const isHamburgerToggler = e.target.matches('[data-hamburger-menu-toggler]')
    const isMobileDropdownToggler = e.target.matches('[data-mobile-dropdown-toggler]')

    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) {return}
    
    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle("active")
    }
    

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown === currentDropdown) return
        else{dropdown.classList.remove('active')}
    })

    let hamburgerMenu


    if(isHamburgerToggler){
    let hamburgerButton = document.querySelector('[data-hamburger-menu-toggler]')
        hamburgerButton.classList.toggle('active')
        console.log(hamburgerButton.classList)
        hamburgerMenu = document.querySelector('[data-hamburger-menu]')
        hamburgerMenu.classList.toggle('active')

    } 
 

    let mobileDropdownMenu
    if(isMobileDropdownToggler){
        mobileDropdownMenu = e.target.closest('[data-mobile-dropdown-toggler]')
        mobileDropdownMenu.classList.toggle('active')
    }
    
 
        
    
})
