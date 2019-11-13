import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    return (
      <div className="About_container" id="page1">
        <div className="About_title">About</div>
        <div className="About_desc">
          <div className="desc_container">
            <div className="desc_item">
              <div>
                <i className="fa fa-search"></i>
              </div>
              <div className="desc_item_article">
                <h2>Think and Think</h2>
                <p>
                  영미권에서 자기소개서와 가장 의미가 비슷한 말을 뽑으라면
                  Personal statement라는 표현이 가장 적절하다. 의미상으로 자기
                  자신과 자기 자신의 경험에 대해 소개하는 내용으로 같은 의미가
                  되는 글을 이름 붙이자면 personal statement가 맞다.
                </p>
              </div>
            </div>
            <div className="desc_item">
              <div>
                <i className="fa fa-search"></i>
              </div>
              <div className="desc_item_article">
                <h2>Greative</h2>
                <p>
                  또한 에세이나 커버 레터는 자소서랑 완전히 같은 개념은 아니다.
                  가령 미국 대학 입학에 요구하는 자소서는 Essay라는 표현 그대로
                  영미권의 Essay의 형식을 따라야한다. 그나마 에세이는 Personal
                  statement라는 단어로 표현하는 경우도 있다. 다만 그래도 영미권
                  Essay의 형식을 따라야하는 것은 변함이 없다.
                </p>
              </div>
            </div>
            <div className="desc_item">
              <div>
                <i className="fa fa-search"></i>
              </div>
              <div className="desc_item_article">
                <h2>My ways</h2>
                <p>
                  어디까지나 참고하라는 이야기지, 베껴 쓰라는 말이 아니다.
                  오히려 유사해지면 잘릴 가능성이 높아진다. 그러나 적절히
                  참고하고 읽어본다면 매우 좋은 도움이 될 것이다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
