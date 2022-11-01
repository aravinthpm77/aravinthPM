const header =document.querySelector('.header.container');

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if( scroll_position>250){
        
        header.style.scale=1;
    }
    else{
        
        header.style.scale=1.05;
        
    }
})

