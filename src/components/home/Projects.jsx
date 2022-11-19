import React from "react";
import './img/slide1.jpg'; //обязательно добавлять ссылки на источник!
import './img/slide2.jpg';
import  './img/slide4.jpg';
const Projects = (props) => {
  return (
    <>
     <div className="pro">
       <img src={props.image} alt="" className="pro__img"/>
       <p className="pro__desc">
         {props.skills}
       </p>
       <div className="pro-main">
         <h4 className="pro-main__title">
           {props.title}
         </h4>
         <p className="pro-main__desc">
           {props.server}
         </p>
         <button className="pro-main__button btn">
           <a href={props.link} className="pro-main__link">View ~></a>
         </button>
       </div>
     </div>
    </>
  )
};
export default Projects;