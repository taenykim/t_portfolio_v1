import React, { Component, Fragment } from "react";
import "./About.css";

class About extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, desktop: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
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
  render() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    return (
      <Fragment>
        {this.state.desktop ? (
          <div className="About_container" id="page1">
            {/* <div className="About_title">ABOUT</div> */}
            <div className="About_desc">
            <div className="About_title">About Me<div>저는 수원에서 개발을 공부하는 김태은입니다.</div></div>
              <h2>Life is</h2>
              <p>
                제주도에서 태어나 현재는 수원에서 대학을 다니고 있습니다.
                대학교에서 인터렉션디자인과 프로그래밍 수업을 듣고 흥미를 느껴
                프론트엔드 개발 공부를 시작하게 되었습니다.
              </p>
              <br />  

              <div className="p_line"></div>
              <br />        

              <h2>Pursue to</h2>
              <p>
                UI/UX와 코드 로직에 있어서 구현 뿐만 아니라 정확한 이해와 사용을
                목표로 하고있습니다.
              </p>
              <br />              <br />
              <div className="p_line"></div>
              <br />        
              <h2>Better than me</h2>
              <p>
                디자인에도 '취향'이란 것이 있지만 '좋은' 디자인이 존재하듯이
                자신을 잃지 않는 선에서 끊임없이 자기 스스로를 반성하고
                숙고하면서 더 나은 사람이 되도록 노력하자는 것이 삶의
                모토입니다.
              </p>
            </div>
          </div>
        ) : (
          <div className="About_container" id="page1">
            <div className="bar_About_title">ABOUT</div>
            <div className="bar_About_desc">
              <h2>Life is</h2>
              <p>
                제주도에서 태어나 현재는 수원에서 대학을 다니고 있습니다.
                대학교에서 인터렉션디자인과 프로그래밍 수업을 듣고 흥미를 느껴
                프론트엔드 개발 공부를 시작하게 되었습니다.
              </p>
              <br />
              <div className="p_line"></div>
              <br />        
              <h2>Pursue to</h2>
              <p>
                UI/UX와 코드 로직에 있어서 구현 뿐만 아니라 정확한 이해와 사용을
                목표로 하고있습니다.
              </p>
              <br />
              <div className="p_line"></div>
              <br />        
              <h2>Better than me</h2>
              <p>
                디자인에도 '취향'이란 것이 있지만 '좋은' 디자인이 존재하듯이
                자신을 잃지 않는 선에서 끊임없이 자기 스스로를 반성하고
                숙고하면서 더 나은 사람이 되도록 노력하자는 것이 삶의
                모토입니다.
              </p>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default About;
