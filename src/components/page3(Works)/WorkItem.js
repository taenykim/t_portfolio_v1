import React, { Component } from 'react';

class WorkItem extends Component {
    render() {
        return (
            <div className="workItem_container">
                <img className="work_image" src="https://artfiles.alphacoders.com/609/thumb-60983.jpg"/>
                <div className="WorkItem_title">Fahub</div>
                <div className="WorkItem_subtitle">패션정보 공유 사이트</div>
            </div>
        );
    }
}

export default WorkItem;