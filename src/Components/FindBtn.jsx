import React from 'react';

const FindBtn=(props)=>{
 return(
 <button className="btn btn-primary" onClick={props.onClick}>Find Dog</button>
 );
}
export default FindBtn;