import React from "react";
import s from './users.module.css'
import axios from "axios";
import def_ava from '../../img/avatar.png';

class Users extends React.Component{
    
  componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
    this.props.setUsers(response.data.items)
  }
    )
}

  render(){
  return <div >
  
  {
    this.props.users.map(u=><div key={u.id} className={s.userStyle}>
        <div className={s.persone}>
       <div>
               <img src={u.photos.small!=null?u.photos.small:def_ava}/>
            </div>
            <div>
                {u.followed
                ?<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                
            </div>
            </div>
           <div className={s.about}>
                <div>{u.name}</div>
                <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.location}>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
            </div>
        
        </div>)
  }
</div>

}
}

export default Users;