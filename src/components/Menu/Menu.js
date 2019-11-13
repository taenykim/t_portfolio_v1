import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  componentDidMount() {
    // 스크롤 이벤트 적용
    window.addEventListener("scroll", this.onScroll);
    // console.log(document.getElementsByClassName("Home_container"));
  }
  onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
    // console.log("scrollTop",scrollTop);
    const menu_a = document.getElementsByClassName("menu_a");
    const menu_container = document.getElementsByClassName("menu_container");
    const menu_list = document.getElementsByClassName("menu_list");
    if(scrollTop>0){
        menu_container[0].style = "background : white";
        menu_list[0].style = "color:black";
    }else{
        menu_container[0].style = "background : blue"
        menu_list[0].style = "color:white";
    }

      if (scrollTop >3748-200) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "";
        menu_a[4].style = "background : blue; color:white";
      } else if (scrollTop >2811-200) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "background : blue; color:white";
        menu_a[4].style = "";
      } else if (scrollTop > 1874-200) {
        menu_a[1].style = "";
        menu_a[2].style = "background : blue; color:white";
        menu_a[3].style = "";
        menu_a[4].style = "";
      } else if (scrollTop > 937-200) {
        menu_a[1].style = "background : blue; color:white";
        menu_a[2].style = "";
        menu_a[3].style = "";
        menu_a[4].style = "";
      } else {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "";
        menu_a[4].style = "";
      }
    
  };

  render() {
    return (
      <div className="menu_container">
        <div className="home">
          <div
            className="menu_a"
            onClick={() => {
              document.getElementById("pageHome").scrollIntoView();
            }}
          >
            Home
          </div>
        </div>
        <ul className="menu_list">
          <li className="menu_item">
            <div
              className="menu_a"
              onClick={() => {
                document.getElementById("page1").scrollIntoView();
              }}
            >
              <span>About</span>
            </div>
          </li>
          <li className="menu_item">
            <div
              className="menu_a"
              onClick={() => {
                document.getElementById("page2").scrollIntoView();
              }}
            >
              <span>Skills</span>
            </div>
          </li>
          <li className="menu_item">
            <div
              className="menu_a"
              onClick={() => {
                document.getElementById("page3").scrollIntoView();
              }}
            >
              <span>Works</span>
            </div>
          </li>
          <li className="menu_item">
            <div
              className="menu_a"
              onClick={() => {
                document.getElementById("page4").scrollIntoView();
              }}
            >
              <span>Contact</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
