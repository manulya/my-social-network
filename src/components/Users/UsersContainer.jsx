import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC,unfollowAC, setUsersAC,setCurrentPageAC,setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reduser";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component{
    
    componentDidMount(){
    this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    }
      )
  }
  
  onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
        this.props.toggleIsFetching(false);
    this.props.setUsers(response.data.items);

    });
  }
  
    render(){
      
      return <>
      {this.props.isFetching?<Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                     /> 
                     </>
  }
  }
  

let mapStateToProps=(state)=>{

return {
    
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching,
}   
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(pageNumber)=>{
            dispatch(setTotalUsersCountAC(pageNumber))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);