// import React from 'react';
// import $ from 'jquery';
// // import '../libs/easing.js'
// import {ImArrowUp2} from 'react-icons/im';

// class BackToTop extends React.Component {
//     componentDidMount(){
//         $('.back-to-top').click(function(){
//             $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
//             return false;
//           });
//         window.addEventListener('scroll', ()=>{
//             if(window.pageYOffset > 100){
//                 document.querySelector('.back-to-top').classList.remove("fadeOut");
//                 document.querySelector('.back-to-top').style.display = "block";
//                 document.querySelector('.back-to-top').classList.add("fadeIn");
//             }else {
//                 document.querySelector('.back-to-top').classList.remove("fadeIn");
//                 document.querySelector('.back-to-top').classList.add("fadeOut");
//             }
//         });
//     }

//     render(){
//         return <a href="/#" className="back-to-top animated" style={{ backgroundColor: "rgb(166, 0, 130)" }}><h1 ><ImArrowUp2 /></h1></a>;
//     }
// }

// export default BackToTop;
