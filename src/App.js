import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />}
              />
            <Route path="/users" element={<UsersContainer />}
              />
            <Route path="/profile" element={ <Profile/>} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          
        </div>
      </div>
   
  );
};

export default App;
