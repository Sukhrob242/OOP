// class Component {
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }
//     showElement() {
//          this.$el.style.display = 'block' 
//     }

//     hideElement() {
//         this.$el.style.display = 'none' 
//     }
// }

// class Circle extends Component {
//     constructor (options){
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px' ;
//         this.$el.style.background = options.color
//         this.$el.style.borderRadius = "50%"
//     }
// }

// const circle1 = new Circle({
//     selector:"#circle1",
//     size: 100,
//     color: 'crimson' 
// })

// const circle2 = new Circle({
//     selector:"#circle2",
//     size: 100,
//     color: 'coral' 
// })

let radius = 1 ;
let x = 1 ; 
let y = 1 ; 
const circle = {
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

circle.draw();  /* OOP  object Oriented Programming */