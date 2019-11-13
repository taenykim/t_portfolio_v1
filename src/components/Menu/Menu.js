import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, desktop: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // 스크롤 이벤트 적용
    window.addEventListener("scroll", this.onScroll);

    this._isMounted = true;
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    console.log("마운트", this._isMounted);
  }
  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log("이너하이트", window.innerWidth);
    console.log("데스크탑", this.state.desktop);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth < 1040) {
      this.setState({
        desktop: false
      });
    } else {
      this.setState({
        desktop: true
      });
    }
  }

  onScroll = e => {
    if (this.state.desktop) {
      // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
      //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
      const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
      this.setState({ scrollTop });
      // console.log("scrollTop",scrollTop);
      const menu_a = document.getElementsByClassName("menu_a");
      const menu_container = document.getElementsByClassName("menu_container");
      const menu_list = document.getElementsByClassName("menu_list");
      if (scrollTop > 0) {
        menu_container[0].style = "background : white";
        menu_list[0].style = "color:black";
      } else {
        menu_container[0].style = "background : blue";
        menu_list[0].style = "color:white";
      }

      if (scrollTop > window.innerHeight*4 - 200) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "";
        menu_a[4].style = "background : blue; color:white";
      } else if (scrollTop > window.innerHeight*3 - 200) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "background : blue; color:white";
        menu_a[4].style = "";
      } else if (scrollTop > window.innerHeight*2 - 200) {
        menu_a[1].style = "";
        menu_a[2].style = "background : blue; color:white";
        menu_a[3].style = "";
        menu_a[4].style = "";
      } else if (scrollTop > window.innerHeight - 200) {
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
    } else {
      // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
      //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
      const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
      this.setState({ scrollTop });
      // console.log("scrollTop",scrollTop);
      const menu_a = document.getElementsByClassName("bar_menu_a");
      const menu_container = document.getElementsByClassName(
        "bar_menu_container"
      );
      console.log(window.innerHeight);
      const menu_list = document.getElementsByClassName("bar_menu_list");
      if (scrollTop > 0) {
        menu_container[0].style = "background : white";
        menu_list[0].style = "color:black";
      } else {
        menu_container[0].style = "background : blue";
        menu_list[0].style = "color:white";
      }

      if (scrollTop > window.innerHeight *4-100) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "";
        menu_a[4].style = "background : blue; color:white";
      } else if (scrollTop > window.innerHeight *3-100) {
        menu_a[1].style = "";
        menu_a[2].style = "";
        menu_a[3].style = "background : blue; color:white";
        menu_a[4].style = "";
      } else if (scrollTop > window.innerHeight *2-100) {
        menu_a[1].style = "";
        menu_a[2].style = "background : blue; color:white";
        menu_a[3].style = "";
        menu_a[4].style = "";
      } else if (scrollTop > window.innerHeight *1-100) {
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
    }
  };

  render() {
    return (
      <div>
        {this.state.desktop ? (
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
        ) : (
          <div className="bar_menu_container">
            <div className="bar_home">
              <div
                className="bar_menu_a"
                onClick={() => {
                  document.getElementById("pageHome").scrollIntoView();
                }}
              >
                Home
              </div>
            </div>
            <ul className="bar_menu_list">
                <div
                  className="bar_menu_a"
                  onClick={() => {
                    document.getElementById("page1").scrollIntoView();
                  }}
                >
   About
                </div>
                <div
                  className="bar_menu_a"
                  onClick={() => {
                    document.getElementById("page2").scrollIntoView();
                  }}
                >
                 Skills
                </div>
                <div
                  className="bar_menu_a"
                  onClick={() => {
                    document.getElementById("page3").scrollIntoView();
                  }}
                >
                  Works
                </div>
                <div
                  className="bar_menu_a"
                  onClick={() => {
                    document.getElementById("page4").scrollIntoView();
                  }}
                >
                  Contact
                </div>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
