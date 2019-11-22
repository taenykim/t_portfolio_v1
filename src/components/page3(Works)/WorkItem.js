import React, { Component } from "react";

class WorkItem extends Component {
  render() {
    return (
      <div className="workItem_container">
        <img
          className="work_image"
          src="https://artfiles.alphacoders.com/609/thumb-60983.jpg"
        />
        <div className="WorkItem_title">Fahub</div>
        <div className="WorkItem_subtitle">패션정보 공유 사이트</div>
        <br />
        깃주소, 제작과정노트
        <br />
        사용된 기술 넣기
        <br />
        <br />
        <div className="WorkItem_visit">Go to Link</div>
      </div>
    );
  }
}

export default WorkItem;
