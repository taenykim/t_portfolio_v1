(this.webpackJsonpt_portfolio_v1=this.webpackJsonpt_portfolio_v1||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),l=n.n(s),o=(n(14),n(1)),c=n(2),r=n(5),d=n(4),m=n(6),u=n(3),h=(n(15),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.onScroll=function(e){if(n.state.desktop){var t=e.srcElement.scrollingElement.scrollTop;n.setState({scrollTop:t});var a=document.getElementsByClassName("menu_a"),i=document.getElementsByClassName("menu_container"),s=document.getElementsByClassName("menu_list");t>0?(i[0].style="background : white",s[0].style="color:black"):(i[0].style="background : rgba(34,31,194,1)",s[0].style="color:white"),t>4*window.innerHeight-200?(a[1].style="",a[2].style="",a[3].style="",a[4].style="background : rgba(34,31,194,1); color:white"):t>3*window.innerHeight-200?(a[1].style="",a[2].style="",a[3].style="background : red; color:white",a[4].style=""):t>2*window.innerHeight-200?(a[1].style="",a[2].style="background : rgba(34,31,194,1); color:white",a[3].style="",a[4].style=""):t>window.innerHeight-200?(a[1].style="background : rgba(34,31,194,1); color:white",a[2].style="",a[3].style="",a[4].style=""):(a[1].style="",a[2].style="",a[3].style="",a[4].style="")}else{var l=e.srcElement.scrollingElement.scrollTop;n.setState({scrollTop:l});var o=document.getElementsByClassName("bar_menu_a"),c=document.getElementsByClassName("bar_menu_container");console.log(window.innerHeight);var r=document.getElementsByClassName("bar_menu_list");l>0?(c[0].style="background : white",r[0].style="color:black"):(c[0].style="background : rgba(34,31,194,1)",r[0].style="color:white"),l>4*window.innerHeight-100?(o[1].style="",o[2].style="",o[3].style="",o[4].style="background : rgba(34,31,194,1); color:white"):l>3*window.innerHeight-100?(o[1].style="",o[2].style="",o[3].style="background : red; color:white",o[4].style=""):l>2*window.innerHeight-100?(o[1].style="",o[2].style="background : rgba(34,31,194,1); color:white",o[3].style="",o[4].style=""):l>1*window.innerHeight-100?(o[1].style="background : rgba(34,31,194,1); color:white",o[2].style="",o[3].style="",o[4].style=""):(o[1].style="",o[2].style="",o[3].style="",o[4].style="")}},n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll),this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),console.log("\ub9c8\uc6b4\ud2b8",this._isMounted)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){console.log("\uc774\ub108\ud558\uc774\ud2b8",window.innerWidth),console.log("\ub370\uc2a4\ud06c\ud0d1",this.state.desktop),this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.desktop?i.a.createElement("div",{className:"menu_container"},i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"menu_a",onClick:function(){document.getElementById("pageHome").scrollIntoView()}},"Home")),i.a.createElement("ul",{className:"menu_list"},i.a.createElement("li",{className:"menu_item"},i.a.createElement("div",{className:"menu_a",onClick:function(){document.getElementById("page1").scrollIntoView()}},i.a.createElement("span",null,"ABOUT"))),i.a.createElement("li",{className:"menu_item"},i.a.createElement("div",{className:"menu_a",onClick:function(){document.getElementById("page2").scrollIntoView()}},i.a.createElement("span",null,"SKILLS"))),i.a.createElement("li",{className:"menu_item"},i.a.createElement("div",{className:"menu_a",onClick:function(){document.getElementById("page3").scrollIntoView()}},i.a.createElement("span",null,"WORKS"))),i.a.createElement("li",{className:"menu_item"},i.a.createElement("div",{className:"menu_a",onClick:function(){document.getElementById("page4").scrollIntoView()}},i.a.createElement("span",null,"CONTACT"))))):i.a.createElement("div",{className:"bar_menu_container"},i.a.createElement("div",{className:"bar_home"},i.a.createElement("div",{className:"bar_menu_a",onClick:function(){document.getElementById("pageHome").scrollIntoView()}},i.a.createElement("span",null,"HOME"))),i.a.createElement("ul",{className:"bar_menu_list"},i.a.createElement("div",{className:"bar_menu_a",onClick:function(){document.getElementById("page1").scrollIntoView()}},i.a.createElement("span",null,"ABOUT")),i.a.createElement("div",{className:"bar_menu_a",onClick:function(){document.getElementById("page2").scrollIntoView()}},i.a.createElement("span",null,"SKILLS")),i.a.createElement("div",{className:"bar_menu_a",onClick:function(){document.getElementById("page3").scrollIntoView()}},i.a.createElement("span",null,"WORKS")),i.a.createElement("div",{className:"bar_menu_a",onClick:function(){document.getElementById("page4").scrollIntoView()}},i.a.createElement("span",null,"CONTACT")))))}}]),t}(a.Component)),w=(n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,this.state.desktop?i.a.createElement("div",{className:"Home_container",id:"pageHome"},i.a.createElement("div",{className:"Home_desc"},i.a.createElement("div",null,"Hello, o_o"),i.a.createElement("div",null,"This Is My"),i.a.createElement("div",null,"Front-end Portfolio "),i.a.createElement("div",null,"v.1"))):i.a.createElement("div",{className:"Home_container",id:"pageHome"},i.a.createElement("div",{className:"bar_Home_desc"},i.a.createElement("div",null,"Hello, o_o"),i.a.createElement("div",null,"This Is My"),i.a.createElement("div",null,"Front-end Portfolio "),i.a.createElement("div",null,"v.1"))))}}]),t}(a.Component)),E=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){var e=document.createElement("link");return e.rel="stylesheet",e.href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",document.getElementsByTagName("head")[0].appendChild(e),i.a.createElement(a.Fragment,null,this.state.desktop?i.a.createElement("div",{className:"About_container",id:"page1"},i.a.createElement("div",{className:"About_title"},"ABOUT"),i.a.createElement("div",{className:"About_desc"},i.a.createElement("h2",null,"Think Harder"),i.a.createElement("p",null,"\uc601\ubbf8\uad8c\uc5d0\uc11c \uc790\uae30\uc18c\uac1c\uc11c\uc640 \uac00\uc7a5 \uc758\ubbf8\uac00 \ube44\uc2b7\ud55c \ub9d0\uc744 \ubf51\uc73c\ub77c\uba74 Personal statement\ub77c\ub294 \ud45c\ud604\uc774 \uac00\uc7a5 \uc801\uc808\ud558\ub2e4. \uc758\ubbf8\uc0c1\uc73c\ub85c \uc790\uae30 \uc790\uc2e0\uacfc \uc790\uae30 \uc790\uc2e0\uc758 \uacbd\ud5d8\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub294 \ub0b4\uc6a9\uc73c\ub85c \uac19\uc740 \uc758\ubbf8\uac00 \ub418\ub294 \uae00\uc744 \uc774\ub984 \ubd99\uc774\uc790\uba74 personal statement\uac00 \ub9de\ub2e4."))):i.a.createElement("div",{className:"About_container",id:"page1"},i.a.createElement("div",{className:"bar_About_title"},"ABOUT"),i.a.createElement("div",{className:"bar_About_desc"},i.a.createElement("h2",null,"Think Harder"),i.a.createElement("p",null,"\uc601\ubbf8\uad8c\uc5d0\uc11c \uc790\uae30\uc18c\uac1c\uc11c\uc640 \uac00\uc7a5 \uc758\ubbf8\uac00 \ube44\uc2b7\ud55c \ub9d0\uc744 \ubf51\uc73c\ub77c\uba74 Personal statement\ub77c\ub294 \ud45c\ud604\uc774 \uac00\uc7a5 \uc801\uc808\ud558\ub2e4. \uc758\ubbf8\uc0c1\uc73c\ub85c \uc790\uae30 \uc790\uc2e0\uacfc \uc790\uae30 \uc790\uc2e0\uc758 \uacbd\ud5d8\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub294 \ub0b4\uc6a9\uc73c\ub85c \uac19\uc740 \uc758\ubbf8\uac00 \ub418\ub294 \uae00\uc744 \uc774\ub984 \ubd99\uc774\uc790\uba74 personal statement\uac00 \ub9de\ub2e4."))))}}]),t}(a.Component)),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,this.state.desktop?i.a.createElement("div",{className:"Works_container",id:"page3"},i.a.createElement("div",{className:"Content_title"},"Works"),i.a.createElement("div",{className:"Content_desc"},i.a.createElement("div",null,"This is"),i.a.createElement("div",null,"Works"),i.a.createElement("div",null,"Page"))):i.a.createElement("div",{className:"Works_container",id:"page3"},i.a.createElement("div",{className:"bar_Content_title"},"Works"),i.a.createElement("div",{className:"bar_Content_desc"},i.a.createElement("div",null,"This is"),i.a.createElement("div",null,"Works"),i.a.createElement("div",null,"Page"))))}}]),t}(a.Component),p=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,this.state.desktop?i.a.createElement("div",{className:"Skills_container",id:"page2"},i.a.createElement("div",{className:"Skills_title"},"Skills"),i.a.createElement("div",{className:"Skills_desc"},i.a.createElement("div",null,"Basic"),i.a.createElement("div",null,"Developing"),i.a.createElement("div",null,"Design"))):i.a.createElement("div",{className:"Skills_container",id:"page2"},i.a.createElement("div",{className:"bar_Skills_title"},"Skills"),i.a.createElement("div",{className:"bar_Skills_desc"},i.a.createElement("div",null,"Basic"),i.a.createElement("div",null,"Developing"),i.a.createElement("div",null,"Design"))))}}]),t}(a.Component)),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e)))._isMounted=!1,n.state={width:0,height:0,desktop:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),window.innerWidth<1040?this.setState({desktop:!1}):this.setState({desktop:!0})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,this.state.desktop?i.a.createElement("div",{className:"Contact_container",id:"page4"},i.a.createElement("div",{className:"Content_title"},"Contact"),i.a.createElement("div",{className:"Content_desc"},i.a.createElement("div",null,"This is"),i.a.createElement("div",null,"Contact"),i.a.createElement("div",null,"Page"),i.a.createElement("br",null),i.a.createElement("input",null))):i.a.createElement("div",{className:"Contact_container",id:"page4"},i.a.createElement("div",{className:"bar_Content_title"},"Contact"),i.a.createElement("div",{className:"bar_Content_desc"},i.a.createElement("div",null,"This is"),i.a.createElement("div",null,"Contact"),i.a.createElement("div",null,"Page"),i.a.createElement("br",null),i.a.createElement("input",null))))}}]),t}(a.Component),b=(n(19),n(20),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"full_container"},i.a.createElement(h,null),i.a.createElement(w,null),i.a.createElement(E,null),i.a.createElement(p,null),i.a.createElement(v,null),i.a.createElement(g,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.62ba7671.chunk.js.map