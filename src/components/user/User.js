import React,{Component} from 'react';
import "./User.css";
import {connect} from "react-redux";
import mylogo from "../../assets/img/mylogo.png"
import homecog from "../../assets/img/svg/home-cog.svg"
import homeMessage from "../../assets/img/svg/home-message.svg"
import homeL from "../../assets/img/svg/home-1.svg"
import homeDfk from "../../assets/img/svg/home-dfk.svg"
import homeDfh from "../../assets/img/svg/home-dfh.svg"
import homeDsh from "../../assets/img/svg/home-dsh.svg"
import homeDpj from "../../assets/img/svg/home-dpj.svg"
import homeTk from "../../assets/img/svg/home-tk.svg"
import home2 from "../../assets/img/svg/home-2.svg"
import home3 from "../../assets/img/svg/home-3.svg"
import home4 from "../../assets/img/svg/home-4.svg"
import home5 from "../../assets/img/svg/home-5.svg"
class User extends Component{
    render() {
        return(
            <section>
                <div className="home-head white-bgcolor clearfix">
                    <div className="head-img">
                        <div className="head-logo"><img src={mylogo} alt=""/></div>
                        <div className="head-name">{this.props.username}</div>
                        <div className="head-icon">
                            <a href="##"><img src={homecog} alt=""/></a>
                            <a href="##"><img src={homeMessage} alt=""/></a>
                        </div>
                    </div>
                    <div className="head-cont">
                        <div className="weui-flex">
                            <div className="weui-flex__item"><a href="star.html"><p>12</p><span>收藏的宝贝</span></a></div>
                            <div className="weui-flex__item"><a href="star.html"><p>6</p><span>我的喜欢</span></a></div>
                            <div className="weui-flex__item"><a href="star.html"><p>16</p><span>我的足迹</span></a></div>
                        </div>
                    </div>
                </div>
                <div className="home-cont weui-cells mt-625" id="te3">
                    <a className="weui-cell weui-cell_access" href="order.html">
                        <div className="weui-cell__bd">
                            <p className="choose-text"><img src={homeL} alt=""/> 全部订单</p>
                        </div>
                        <div className="weui-cell__ft choose-des">
                            查看所有已购宝贝
                        </div>
                    </a>
                </div>
                <div className="weui-flex home-order white-bgcolor mb-625">
                    <a href="order.html" className="weui-flex__item">
                        <div className="weui-flex__icon">
                            <img src={homeDfk} alt=""/>
                        </div>
                        <p className="weui-flex__label">待付款</p>
                    </a>
                    <a href="order.html" className="weui-flex__item">
                        <div className="weui-flex__icon">
                            <img src={homeDfh} alt=""/>
                        </div>
                        <p className="weui-flex__label">待发货</p>
                    </a>
                    <a href="order.html" className="weui-flex__item">
                        <div className="weui-flex__icon">
                            <img src={homeDsh} alt=""/>
                        </div>
                        <p className="weui-flex__label">待收货</p>
                    </a>
                    <a href="order.html" className="weui-flex__item">
                        <div className="weui-flex__icon">
                            <img src={homeDpj} alt=""/>
                        </div>
                        <p className="weui-flex__label">待评价</p>
                    </a>
                    <a href="##" className="weui-flex__item">
                        <div className="weui-flex__icon">
                            <img src={homeTk} alt=""/>
                        </div>
                        <p className="weui-flex__label">退款/售后</p>
                    </a>
                </div>
                <div className="home-cont weui-cells mb-625" id="te">
                    <a className="weui-cell weui-cell_access" href="##">
                        <div className="weui-cell__bd">
                            <p className="choose-text"><img src={home2} alt=""/> 酷币</p>
                        </div>
                        <div className="weui-cell__ft choose-des">
                            当前可用酷币30酷币
                        </div>
                    </a>
                    <a className="weui-cell weui-cell_access" href="coupon.html">
                        <div className="weui-cell__bd">
                            <p className="choose-text"><img src={home3} alt=""/> 优惠券</p>
                        </div>
                        <div className="weui-cell__ft choose-des">
                            2张
                        </div>
                    </a>
                </div>
                <div className="home-cont weui-cells mb-625" id="te2">
                    <a className="weui-cell weui-cell_access" href="j##">
                        <div className="weui-cell__bd">
                            <p className="choose-text"><img src={home4} alt=""/> 我的资料</p>
                        </div>
                        <div className="weui-cell__ft choose-des">
                        </div>
                    </a>
                    <a className="weui-cell weui-cell_access" href="##">
                        <div className="weui-cell__bd">
                            <p className="choose-text"><img src={home5} alt=""/> 意见反馈</p>
                        </div>
                        <div className="weui-cell__ft choose-des">
                        </div>
                    </a>
                </div>
            </section>
        )
    }
}

const initMapStateToProps=state=>({
    username:state.user.data.username
});
const initMapDispatchToProps=dispatch=>({
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(User);