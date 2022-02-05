import { rerenderEntireTree } from "../../../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        likesCount: 10,
        dislikesCount: 1,
        message: "go little rock star",
      },
      { id: 2, likesCount: 25, dislikesCount: 3, message: "you are the best" },
      { id: 3, likesCount: 1, dislikesCount: 12, message: "be my legend" },
      { id: 4, likesCount: 5, dislikesCount: 6, message: "yes, i agree" },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Ulyana",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        id: 2,
        name: "Kate",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        id: 3,
        name: "Liz",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        id: 4,
        name: "Andrew",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        id: 5,
        name: "Alex",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
    ],

    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Nice to hear you" },
      { id: 3, message: "I'm too" },
    ],
  },
  sitebar: {
    friends: [
      {
        name: "Ulyana",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        name: "Kate",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
      {
        name: "Liz",
        img: (
          <img src="https://thumbs.dreamstime.com/b/%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-134042540.jpg" />
        ),
      },
    ],
  },
};



export let addPost=(postMessage)=>{

let newPost={
        id: 5,
        likesCount: 0,
        dislikesCount: 0,
        message: postMessage,
}
state.profilePage.posts.push(newPost);
rerenderEntireTree(state);
};

export let addMessage=(messageNew)=>
{
  let newMessage={
    id: 4, message: messageNew
  }
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export default state;
