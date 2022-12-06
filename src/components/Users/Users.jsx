import React from "react";
import def_ava from '../../img/avatar.png';
import s from './users.module.css'


let Users =(props)=>{
  debugger;
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
 let pages=[];
 for(let i=1;i<=pagesCount;i++){
  pages.push(i);
 }
    return <div>
    <div>
      {pages.map(p=>{
       return <span className={s.page}><span className={props.currentPage===p && s.selectedPage}
       onClick={(e)=>{props.onPageChanged(p);}}>{p}</span>
       </span>
      })
    }
   </div>
    {
      props.users.map(u=><div key={u.id} className={s.userStyle}>
          <div className={s.persone}>
         <div>
                 <img src={u.photos.small!=null?u.photos.small:def_ava}/>
              </div>
              <div>
                  {u.followed
                  ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                  :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                  
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
export default Users;