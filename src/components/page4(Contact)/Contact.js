import React, { Component, Fragment } from "react";
import "./Contact.css";
import logo from './1123.png';

class Contact extends Component {
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
    return (
      <Fragment>
        {this.state.desktop ? (
         <div className="Contact_container" id="page4">
         {/* <div className="bar_Contact_title">Contact</div> */}
         <img src={logo} className="contactImage"/>

         <div className="bar_Contact_desc">

           <div className="contact_data">
           <h2>김태은</h2>
           <div>프론트엔드 개발자</div>
           <div>kimtaeeeny@gmail.com</div>
           <br />
           <br />
           </div>
           <form
             className="gform"
             className="contact_form"
             method="post"
             data-email="kimtaeeeny@naver.com"
             action="https://script.google.com/macros/s/AKfycbwARlGmkPnxhFCVmSoIpT5LETVZr-NcXgdVe66R/exec"
           >
           <label for="이름">Name</label>
           <br/>

           <input id="이름" type="text" name="이름" placeholder="이름"/>
           <br/>

           <label for="내용">Message</label>
           <br/>
           <input id="내용" type="text" placeholder="회신을 원하신다면 이메일주소를 남겨주세요." name="내용" style={{height:"10vh"}}/>
           <br/>
           <input type="submit" value="전송" /></form>
         </div>
       </div>
        ) : (
          <div className="Contact_container" id="page4">
            <div className="bar_Contact_title">Contact</div>
            <img src={logo} className="bar_contactImage"/>

            <div className="bar_Contact_desc">

              <div className="contact_data">
              <h2>김태은</h2>
              <div>프론트엔드 개발자</div>
              <div>kimtaeeeny@gmail.com</div>
              <br />
              <br />
              </div>
              <form
                className="gform"
                className="contact_form"
                method="post"
                data-email="kimtaeeeny@naver.com"
                action="https://script.google.com/macros/s/AKfycbwARlGmkPnxhFCVmSoIpT5LETVZr-NcXgdVe66R/exec"
              >
              <label for="이름">Name</label>
              <br/>

              <input id="이름" type="text" name="이름" placeholder="이름"/>
              <br/>

              <label for="내용">Message</label>
              <br/>
              <input id="내용" type="text" placeholder="회신을 원하신다면 이메일주소를 남겨주세요." name="내용" style={{height:"10vh"}}/>
              <br/>
              <input type="submit" value="전송" /></form>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Contact;
