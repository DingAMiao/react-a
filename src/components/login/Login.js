import React,{Component} from 'react';
import "./Login.css";
import Loginheader from "../loginheader/Loginheader";
import mylogo from "../../assets/img/mylogo.png"
import asynUser from "../../store/actions/asynUser";
import * as types from "../../store/types";
import {connect} from "react-redux";
class Login extends Component{
    state={
        username:"",
        password:""
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render() {
        return(
            <div>
            <Loginheader></Loginheader>
            < section className = "zyw-container" >
            < div className = "login-img" >
                < img src = {mylogo} alt = "" /> </div>
        <div className="weui-cells">
            <div className="weui-cell weui-cell_select weui-cell_select-before">
                <div className="weui-cell__hd">
                    <select className="weui-select" name="select2">
                        <option value="1">+86</option>
                        <option value="2">+80</option>
                        <option value="3">+84</option>
                        <option value="4">+87</option>
                    </select>
                </div>
                <div className="weui-cell__bd">
                    <input name="username" value={this.state.username} className="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" onChange={this.changeIpt.bind(this)}/>
                </div>
            </div>
        </div>
        <div className="weui-cells">
            <div className="weui-cell">
                <div className="weui-cell__bd">
                    <input name="password" value={this.state.password} className="weui-input" type="password" placeholder="请输入密码" onChange={(ev)=>this.changeIpt(ev)}/>
                </div>
            </div>
        </div>
        <div className="weui-cells__tips text-right"><a href="##">忘记密码？</a></div>
        <div className="login-btn" onClick={this.props.login.bind(null,this.state.username,this.state.password,this.props.history)}><a href="##" className="weui-btn weui-btn_warn theme-bgcolor">登录</a></div>
    </section>
            </div>
        )
    }
}

const initMapStateToProps=state=>{
    return(
        {

        }
    )
}
const initMapDispatchToProps = dispatch=>({
        login:(username,password,history)=>dispatch(asynUser({
            url:"/data/user.json",
            username,password
        })).then(
            (auth)=>auth ?
                history.push({pathname:'/user'}) :
                history.push({pathname:'/login'})
        )
    })
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login)