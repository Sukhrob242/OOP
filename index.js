

let radius = 1 ;
let x = 1 ; 
let y = 1 ; 


// circle.draw();  /* OOP  object Oriented Programming */

function createCircle(params) {
    return {
        radius: 1 , 
        location: {
            x:1 ,
            y:1 , 
        }, 
        isVisible: true , 
        draw: function() {
            console.log('aylana');
        }
    }
    
}