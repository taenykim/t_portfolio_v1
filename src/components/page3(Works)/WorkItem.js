import React, { Component, Fragment } from "react";

class WorkItem extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      desktop: true,
      title: ["Fashub", "portfoliov1", "none"],
      subtitle: ["패션정보 공유 커뮤니티", "포트폴리오 v1", "none"]
    };
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

  static defaultProps = {
    contents: "fashub"
  };
  // state = {};

  render() {
    return (
      <Fragment>
        {this.props.contents === "fashub" && this.state.desktop && (
          <div className="workItem_container">
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
          </div>
        )}

        {this.props.contents === "portfoliov1" && this.state.desktop && (
          <div className="workItem_container">
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
          </div>
        )}

        {this.props.contents === "none" && this.state.desktop && (
          <div className="workItem_container">
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
          </div>
        )}

{this.props.contents === "fashub" && !this.state.desktop && (
          <div className="bar_workItem_container">
            <img
              className="bar_work_image"
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
          </div>
        )}

        {this.props.contents === "portfoliov1" && !this.state.desktop && (
          <div className="bar_workItem_container">
            <img
              className="bar_work_image"
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
          </div>
        )}

        {this.props.contents === "none" && !this.state.desktop && (
          <div className="bar_workItem_container">
            <img
              className="bar_work_image"
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
          </div>
        )}
      </Fragment>
    );
  }
}

export default WorkItem;
