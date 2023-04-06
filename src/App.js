//import React from "react";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainComponent from "./MainComponent";
import { removeTodo, editTitle } from "./TodoApi";
//import { getTodoList, removeTodo, editTitle } from "./TodoApi";
import style from "./TodoListItem.module.css";
import ResizeAnimationStopper from "./ResizeAnimationStopper";
// import Search from './Search';

function App() {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  // const [isResizing, setIsResizing] = useState(false);

  const handleMenuClick = () => {
    setIsNavigationVisible(!isNavigationVisible);
  };

  // useEffect(() => {
  //   let resizeTimer;
  //   const handleResize = () => {
  //     setIsResizing(true);
  //     clearTimeout(resizeTimer);
  //     resizeTimer = setTimeout(() => {
  //       setIsResizing(false);
  //     }, 400);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <>
      {/* <div className={isResizing ? style["resize-animation-stopper"] : ""}> */}
      <ResizeAnimationStopper>
        <header className={`${style["primary-header"]} ${style.flex}`}>
          <div>
            <img
              className={style.logo}
              src="./task-list-white.svg"
              alt="Notebook and pen | todo list logo"
            />
          </div>
          <button
            className={`${style["mobile-nav-toggle"]} ${
              !isNavigationVisible ? style["mobile-nav-toggle-close"] : ""
            }`}
            onClick={handleMenuClick}
          >
            {/* The CSS class "sr-only" for span Menu is used to hide element 
            visually from sighted users while still making them accessible to 
            assistive technologies such as screen readers (SR), making website 
            more inclusive for all users. That's why the name of the class is 
            "sr-only", which means "for Screen Readers only".  */}

            <span className={style["sr-only"]}>Menu</span>
          </button>
          <BrowserRouter>
            <nav className={style.navigation}>
              <ul
                id="primary-navigation"
                className={`${style["primary-navigation"]} ${style.flex} ${
                  !isNavigationVisible ? style["primary-navigation-hidden"] : ""
                }`}
              >
                <li className={style.active}>
                  <Link className={style["ff-sans-cond"]} to="/">
                    Todo List
                  </Link>
                </li>
                <li>
                  <Link to="/new">New Todo List</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route
                path="/"
                element={
                  <MainComponent
                    removeTodo={removeTodo}
                    // todoList={todoList}
                    editTitle={editTitle}
                    // setTodoList={setTodoList}
                    // isLoading={isLoading}
                    // setIsLoading={setIsLoading}
                  />
                }
              />
              <Route
                path="/new"
                element={
                  <MainComponent
                    removeTodo={removeTodo}
                    editTitle={editTitle}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </header>
        {/* </div> */}
      </ResizeAnimationStopper>
    </>
  );
}

export default App;
