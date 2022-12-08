import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader"

const ProfileInfo = (props) => {

if(!props.profile){
  return <Preloader/>
}

  return (
    
    <div >
     <div className={s.userStyle}>
     <img src="https://i.pinimg.com/564x/37/ef/be/37efbe5870be4303272afb22d3cc7c57.jpg" />
     </div>
<div className={s.descriptonInfo}>
    <img src={props.profile.photos.large}/>
    <div>description</div>
    <div>{props.profile.lookingForAJob}</div>
    <div>{props.profile.lookingForAJobDescription}</div>
    <div>{props.profile.fullName}</div>
    <div>{props.profile.contacts.github}</div>
    </div>      
     

    </div>
  )
};

export default ProfileInfo;
// {
//   props.profile.map(u=><div key={u.id} className={s.userStyle}>
//      <img src="https://i.pinimg.com/564x/37/ef/be/37efbe5870be4303272afb22d3cc7c57.jpg" />

// <div className={s.descriptonInfo}>
//     <img src={u.photos.large}/>
//     <div>description</div>
//     <div>{u.lookingForAJob}</div>
//     <div>{u.lookingForAJobDescription}</div>
//     <div>{u.fullName}</div>
//     <div>{u.github}</div>
//     </div>      
//       </div>)
// }