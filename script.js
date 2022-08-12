// Navbar Alter
// function Menu(e){
//     const list =document.querySelector('ul');

//     e.name === 'menu' ? (e.name = "close ", e.classList.add("fa-xmark"), e.classList.remove("fa-bars"), list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", e.classList.add("fa-bars"), e.classList.remove("fa-xmark"), list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
// }


// Navbar 
function Menu(e){
    const list =document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close ", e.className = "fa-solid fa-bars ", list.classList.add("top-[-80px]", "hidden")) : (e.name = "menu", e.className = "fa-solid fa-xmark ", list.classList.remove("top-[-80px]", "opacity-100", "hidden"))
}



// Splide

    document.addEventListener('DOMContentLoaded', function () {
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            pagination: true,
            breakpoints: {
                640: {
                    perPage: 1
                },
                1040: {
                    perPage: 2
                }
            }
        });
        splide.mount();
    }); 




