// on commence par recuperer le bouton de menu
const menuBtn = document.querySelector('#menu-btn')

// on ajoute on event listener et handler pour l'evennement click
menuBtn.addEventListener('click', (event) => {
    // on commence par recuperer le side bar du DOM
    const sideBar = document.querySelector('#sidebar')

    // si le bouton menu ne contient pas la class opened (ouverte)
    if (!menuBtn.classList.contains('opened')) {
        // on vas changer son icone en croix et ajout la class opened
        menuBtn.innerHTML = '<i class="fas fa-xmark"></i>'
        menuBtn.classList.add('opened')    
        // puis on ajout la class visible-side au sidebar (aside)
        sideBar.classList.add('visible-side')
    } else {
        // dans le cas contraire on remet son icone comme normale
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
        menuBtn.classList.remove('opened') 
        // et on enleve la classe visible-side au aside
        sideBar.classList.remove('visible-side')   
    }
})