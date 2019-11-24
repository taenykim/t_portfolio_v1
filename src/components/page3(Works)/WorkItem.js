import React, { Component, Fragment } from "react";

class WorkItem extends Component {
  static defaultProps = {
    contents:"fashub",
  };
  state={
    title:["Fashub", "portfoliov1", "none"],
    subtitle:["패션정보 공유 커뮤니티", "포트폴리오 v1", "none"],
  }
  render() {
    return (
      <Fragment>
      {this.props.contents==="fashub" && ( <div className="workItem_container">
        <img
          className="work_image"
          src="https://artfiles.alphacoders.com/609/thumb-60983.jpg"
        />
        <div>
          <div className="WorkItem_title">{this.state.title[0]}</div>
          <div className="WorkItem_subtitle">{this.state.subtitle[0]}</div>
        </div>

        <div className="WorkItem_desc">
          깃주소, 제작과정노트
          <br />
          사용된 기술 넣기
          <br />
          <br />
        </div>
        <div className="WorkItem_footer">
          <div className="WorkItem_visit">Visit Website</div>
          <div className="WorkItem_visit">제작과정노트</div>
        </div>
      </div>)}
     

      {this.props.contents==="portfoliov1" && ( <div className="workItem_container">
        <img
          className="work_image"
          src="https://artfiles.alphacoders.com/609/thumb-60983.jpg"
        />
        <div>
          <div className="WorkItem_title">{this.state.title[1]}</div>
          <div className="WorkItem_subtitle">{this.state.subtitle[1]}</div>
        </div>

        <div className="WorkItem_desc">
          깃주소, 제작과정노트
          <br />
          사용된 기술 넣기
          <br />
          <br />
        </div>
        <div className="WorkItem_footer">
          <div className="WorkItem_visit">Visit Website</div>
          <div className="WorkItem_visit">제작과정노트</div>
        </div>
      </div>)}


      {this.props.contents==="none" && ( <div className="workItem_container">
        <img
          className="work_image"
          src="https://artfiles.alphacoders.com/609/thumb-60983.jpg"
        />
        <div>
          <div className="WorkItem_title">{this.state.title[2]}</div>
          <div className="WorkItem_subtitle">{this.state.subtitle[2]}</div>
        </div>

        <div className="WorkItem_desc">
          깃주소, 제작과정노트
          <br />
          사용된 기술 넣기
          <br />
          <br />
        </div>
        <div className="WorkItem_footer">
          <div className="WorkItem_visit">Visit Website</div>
          <div className="WorkItem_visit">제작과정노트</div>
        </div>
      </div>)}
      </Fragment>
    );
  }
}

export default WorkItem;
