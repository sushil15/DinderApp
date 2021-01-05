import React from 'react';
import "../style.css";

const Post=(props)=>{
return(
<div className="container post_structure">
    <div className="row mt-2 mb-2">
        <div className="col-4">
          <img  className="img-fluid" src={props.img} alt={props.img} />
        </div>
        <div className="col-6">
         <h4>{props.name}</h4>
         <h5>Petted on {props.date}</h5>
        </div>
        <div className="col-2 trash" >
        <i onClick={()=>{
          props.onClick(props.id);
        }}className="fa fa-trash" aria-hidden="true"></i>
        </div>
    </div>
</div>
);

}
export default Post;