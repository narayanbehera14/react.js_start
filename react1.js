//what is react.js ?
//js library-> UI(fronted),META facebook(2013)

//why we need ract.js (in old time in facbook app example if we get any msg or frnd request count is not updated)
//so for that we need render or reload whole page .
// whts why component based architecture in this everything is component in react.js
//in this everything is divide into component only that part will reload and not other component will not reload

var h1 = document.createElement(h1);
h1.innerHTML = "hello form js"
document.body.appendChild(h1) //to access the body element


 // library: -GSAP for animation
//           - Lenis for smooth scrolling
//            -React.JS website UI bna k lye
// eg : can make more changes (every feature has different library)

//Framework : -NextJS
 //             -Angular
// in built eg: flat house (cant change more in this)
//

//import & export (multiplt file to access)

// type of export (1.named , 2.default)

const a = 10;
 export default a ; //in default a can be written anything in import
                 
import abcd from '/.app.js'//import will access those element writeen in default
console.log("hello"); 

import {age} from './app.js'//{} is to specific declare value
console.log(age);



//-------------------------------------------//

//Real DOM (reload required for full page)

//Virtual DOM (it will compare to real dom then specific part will change )

//JSX - Javascript XML (HTML + JavaScript combination HTML CAN WRITTEN IN javascript)

var h1 = <h1></h1>
