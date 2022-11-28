import React from "react";
import s from './users.module.css'
import avatar from "../../img/avatar.png";

let Users = (props)=>{
 
if(props.users.length===0){
props.setUsers([
    {
    id: 1,
    followed:true,
    fullName: 'Alex SMR',
    status: 'like sweety ass',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    photo: (
      <img src={avatar} alt="ava"/>     ), 
  },
  {
      id: 2,
      followed:false,
      fullName: 'ZA Kate',
      status: 'i smell like fascist',
      location: {
        city: 'Creml',
        country: 'Russia'
      },
      photo: (
          <img src={avatar} alt="ava"/>     ), 
  },
  {
  id: 3,
  followed:true,
    fullName: 'LiZA',
    status: 'not za Kate',
    location: {
      city: 'Silcon valley',
      country: 'Belarus'
    },
    photo: (
      <img src={avatar} alt="ava"/>     ), 
    }
]
)
}

return <div className={s.userStyle}>
  {
    props.users.map(u=><div key={u.id}>
        <span>
            <div>
                {u.photo}
            </div>
            <div>
                {u.followed
                ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
            </span>
        </span>
        </div>)
  }
</div>
}

export default Users;