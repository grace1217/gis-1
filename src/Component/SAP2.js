import React,{Component}from "react"

class SAP2 extends Component{
    constructor(props) {
        super(props);
        this.state = [{display:"none"},{visibility: "hidden"},{disp:"none"}, {date: new Date()}];
        this.handleClick1=this.handleClick1.bind(this)
        this.handleClick2=this.handleClick2.bind(this)
        /*this.handleClick3=this.handleClick3.bind(this)*/
    }
    handleClick1() {
        this.setState({display:this.state.display=="none"?"block":"none"});
    }
    handleClick2() {
        this.setState({visibility:this.state.visibility==="hidden"?"visible":"hidden"});
    }
   /* handleClick3() {
        this.setState({disp:this.state.disp=="none"?"block":"none"})
    }*/

    render(){
        return(
            <div id="box2"   >
                {/* <div id="box2"  onMouseOver={this.handleMouseover}  style={{visibility:this.state.visibility}}*/}
                <div id="box2-left">
                    <div className="shadow">
                        <a href={""}>首页</a>

                    </div>
                    <div  className="shadow"onClick={this.handleClick1.bind(this)}>
                        功能

                    </div>
                    <div id={"sp"}   style={{display:this.state.display}}>{/*第二页面*/}

                        <span className="span">楼宇图</span>
                        <span className="span">热力图</span>
                        <span className="span">3D球型图</span>
                        <span className="span">人员行走路径</span>
                    </div>
                    <div className="shadow"onClick={this.handleClick2.bind(this)}>
                        其他

                    </div>
                    <div   id="qita"style={{visibility:this.state.visibility}}>  {/*使用不同显示方式*/}
                        <span className="span">使用说明</span>
                        <span className="span">版本维护</span>
                    </div>

                </div>
                {/*新添加的*/}
                <div id={"box2-shuju"}>
                    <div id={"showGIS"}>
                        <div id={"welcome"}>欢迎您admin!用户</div>
                        展示区

                    </div>
                </div>

            </div>
        )
    }

}
export default SAP2