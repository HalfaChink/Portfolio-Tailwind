// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }   else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Gallery
const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.image-pop');
const containerLight = document.querySelector('.image-lightbox');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        appearImage(image.getAttribute('src'))
    
    })
})

containerLight.addEventListener('click', (e) =>{
    if(e.target !== imagesLight){
        containerLight.classList.remove('show');
        imagesLight.classList.remove('showImage'); 
    }
})

const 
appearImage = (image) =>{
    imagesLight.src = image;
    containerLight.classList.add('show');
    imagesLight.classList.add('showImage');
}