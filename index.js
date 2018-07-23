
var navLinks = document.querySelectorAll('.navbar a'); 
var header = document.querySelector('.header');
// don't judge me, judge judy
var didJustHide = false;


// Dropdown for Mystory
function toggle_visibility(id){
    var item = document.getElementById(id);
    if(item.style.display == 'block'){
        item.style.display = 'none';
    } else {
        item.style.display = 'block';
    }
}

//Scrolling event
window.addEventListener('scroll', function(){
    if(!didJustHide){header.style.display = 'block';}
    
    document.body.classList [
        window.scrollY > 20 ? 'add': 'remove'
    ]('scrolled');
});

navLinks.forEach(function(nav){
    nav.addEventListener('click', function() {
        header.style.display = 'none';
        didJustHide = true;
        setTimeout(function(){
            didJustHide = false;
        }, 200)
    })
} )


