import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SAP extends Component {
    constructor(props) {
        super(props);
        this.state = {display:"block"};
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({display:this.state.display=="block"?"none":"block"
        });
    }
render(){
     return(<div id="box" style={{display:this.state.display}}> {/*<点击消失>*/}
        <div id="box-left">
            <ul>
                <li class="dropdown">
                    <a href="#" class="dropbtn">基础功能</a>
                    <div class="dropdown-content">
                        <p class="a">ss</p>
                        <p class="a">dd</p>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">图片展示</a>
                    <div class="dropdown-content">
                        <p class="a">ss</p>
                        <p class="a">dd</p>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">其他</a>
                    <div class="dropdown-content">
                        <p class="a">ss</p>
                        <p class="a">dd</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="box-middle">
            <img src={logo} className="big-logo" alt="logo" />
            <div id="box-middle-right">
                <button class="login" onClick={this.handleClick}>注册</button>
                <button class="login" onClick={this.handleClick}>登陆</button>
            </div>
            <div id={"shuru"}>
                 用户名：<input type={"text"}/>
                <br/>
                 密  码：<input type={"text"}/>
                <br/>
                <button onClick={this.handleClick} >提交</button>

            </div>
        </div>
        <div id="box-right">
            <p class="text">项目简介:</p>
            <p class="text">本项目自2018年7月9日起实施，项目组成员通过多方面调研，最终确定利用支持3D技术gis开源前端框架CesiumJS实现，主要完成的功能包括：3D可视化模型、楼宇模型、热力图</p>
        </div>
    </div>)

    }
}
class SAP2 extends Component {
    constructor(props) {
        super(props);
        this.state = {display:"none"};

    }

    handleClick() {
        this.setState({display:this.state.display=="none"?"block":"none"});
    }
    render(){
        return(<div id="box2"  >
            <div id="box2-left">
                <div >
                    <a href={""}>首页</a>

                </div>
                <div onClick={this.handleClick.bind(this)}>
                    功能
                    <div id={"sp"}   style={{display:this.state.display}}>

                        <span class="span">楼宇图</span>
                        <span class="span">热力图</span>
                        <span class="span">3D球型图</span>
                        <span class="span">人员行走路径</span>
                </div>
                </div>
                 <div onClick={this.handleClick.bind(this)}>
                     其他
                     <div  style={{display:this.state.display=="none"?"block":"none"}}>
                         <span class="span">使用说明</span>
                         <span class="span">版本维护</span>

                     </div>
                 </div>

            </div>
            <div id={"box2-right"}></div>

        </div>)}


}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">白金组</h1>
            <h3 className="App-title">gis可视化设计项目</h3>
            <p className="App-logo-name">中国移动</p>
           <img src={logo} className="App-logo" alt="logo" />
        </header>
           <SAP id={"SAP"}/>
           <SAP2/>


          <footer>
              苏州移动研究所2018/07/20
              项目成员：顾志晖，柯亮，顾优雅，赵彤
          </footer>
      </div>
    );
  }
}

export default App;
