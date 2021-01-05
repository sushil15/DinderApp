import React, { useEffect,useState } from 'react';
import FindBtn  from "./Components/FindBtn";
import GetImg from"./Components/GetImg";
import LikePost from "./Components/LikePost";
import NavBar from "./Components/NavBar";
import dogname from "./Components/dogname";
import Footer from './Components/Footer';
import './style.css';


function App() {
 const[getimg,setimg]=useState("");
 const[getname,setname]=useState("");

 useEffect(()=>{
  let random_name=Math.floor(Math.random()*dogname.length);

  fetch("https://dog.ceo/api/breeds/image/random")
 .then(res=>res.json())
 .then(data=>{
   setimg(data.message);
   setname(dogname[random_name]);
 });

},[]);

 const getImg=()=>{
   let random_name=Math.floor(Math.random()*dogname.length);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setimg(data.message);
        setname(dogname[random_name]);
      });
  }

  return (
   <div className="container dinder-page">
     <div className="row dinder-navbar">
       <div className="col-12 p-4">
         <NavBar/>
       </div>
     </div>
     <div className="row mb-4">
      <div className="col-md-6 text-center">
        <GetImg img={getimg} name={getname} />
        <FindBtn onClick={getImg}/>
      </div>
       <div className="col-md-6 dinder-post-div mt-3">
       <LikePost/>
      </div>
     </div>
     <div  className="row">
       <div className="col-12">
           <Footer />
       </div>
     </div>

   </div>


  );
}

export default App;
