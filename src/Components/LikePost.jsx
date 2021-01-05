import React, { useEffect, useState } from 'react';
import Post from "./Post";
import "../style.css";

const LikePost=(props)=>{ 

const [like,setlike]=useState(0); 
const [getpost, setpost]=useState([]);

 setInterval(()=>{
  if(like===0){
      setlike(1);
  }
  else{
      setlike(0);
  }
 },1000);

  

    useEffect(()=>{
     setpost(JSON.parse(localStorage.getItem("like_dog") || "[]"));
    },[like]);

    const deletePost=(val)=>{
        let arr=JSON.parse(localStorage.getItem("like_dog") || "[]");
        let arr2=[];

        for(var i=0;i<arr.length;i++){
            if(i!==Number(val)){
               arr2.push(arr[i]);
            }
        }
        
        localStorage.setItem("like_dog",JSON.stringify(arr2));
    }

    function setdata(val,index){
        return(
        <Post  key={index} id={index} img={val.img} name={val.name} date={val.date} onClick={deletePost}/>
        );
     }

    
    return(
        <>
        {<>{getpost.map(setdata)}</>}
       </>
    );
}
export default LikePost;