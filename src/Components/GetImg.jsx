import React from 'react';
import "../style.css";


const GetImg=(props)=>{
const storePost=()=>{
   const getDate=()=>{
   let today = new Date();
   let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
   return date;
   }
  
  const postdata={
      img:props.img,
      name:props.name,
      date:getDate(),
  }
 
  if (localStorage.getItem("like_dog") === null) {
    let arr=[];
    arr.unshift((postdata));
    localStorage.setItem("like_dog",JSON.stringify(arr));

  }

  else{
     let check=0;
     let arr=JSON.parse(localStorage.getItem("like_dog"));
     for(let i=0;i<arr.length;i++){
       if(arr[i].name===props.name && arr[i].img===props.img){
        check=1;
       }
     }
     if(check!==1){
      arr.unshift(postdata);
      localStorage.setItem("like_dog",JSON.stringify(arr)); 
     } 
     else{
      alert("This dog is already petted");
     }
  }
}

return(
 <div className=" container img_post mb-4 ">
    <div className="row  ">
        <div className="col-12">
            <div className="row mt-4">
             <div className="col-12">
             <img src={props.img} alt="Dinder"/>
             <h3 className="text-center">{props.name}</h3>
             </div>
            </div>
            <div className="row ">
            <div className="col-6 text-center ">
            <button className="btn btn-primary pl-2 pr-2 pt-1 pb-1" onClick={storePost}><i className="fa fa-thumbs-up " aria-hidden="true"></i></button>
            </div>
            <div className="col-6 text-center">
            <button className=" btn btn-primary pl-2 pr-2 pt-1 pb-1" ><i className="fa fa-thumbs-down " aria-hidden="true"></i></button>
            </div>  
            </div>
        </div>
    </div> 
 </div>
);

}
export default GetImg;
