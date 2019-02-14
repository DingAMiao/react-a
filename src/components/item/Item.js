import React,{Component} from 'react';
import "./Item.css";
import Itemheader from "../../components/itemheader/Itemheader";
import Itemfoot from "../../components/itemfoot/Itemfoot";
import querystring from 'query-string';
import asynList from "../../store/actions/asynList";
import * as types from "../../store/types";
import {connect} from "react-redux";

class Item extends Component{
    // state={
    //     msg:{}
    // };
    componentDidMount() {
        let id=this.props.match.params.id-0;
        let dataName=querystring.parse(this.props.location.search).dataName;
        this.props.get(id,dataName)
        // fetch(
        //     `/data/${dataName}.data`
        // ).then(
        //     res => res.json()
        // ).then(
        //     data => this.setState({
        //         msg:data[id-1]
        //     })
        // )
    }

    render() {
        let {item}=this.props.item;
        return(
            <div>
                <Itemheader></Itemheader>
                <section className="zyw-container">

                    <div className="item-img">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img
                                src={this.props.item.smallImage}
                                alt=""/></div>
                            <div className="swiper-slide"><img
                                src="https://m.360buyimg.com/n12/jfs/t13438/360/124743365/49464/474ae43b/5a03ffaeNeb7db52b.jpg!q70.jpg"
                                alt=""/></div>
                            <div className="swiper-slide"><img
                                src="https://m.360buyimg.com/n12/jfs/t12814/353/139949949/27453/5a037076/5a03ff88N7bdff90d.jpg!q70.jpg"
                                alt=""/></div>
                            <div className="swiper-slide"><img
                                src="https://m.360buyimg.com/n12/jfs/t11485/251/1617504994/45865/1e52d881/5a03ff99Ne79b5ee9.jpg!q70.jpg"
                                alt=""/></div>
                            <div className="swiper-slide"><img
                                src="https://m.360buyimg.com/n12/jfs/t11140/344/1557119770/31087/d11c46ac/5a03ff9fNd553a907.jpg!q70.jpg"
                                alt=""/></div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="item-details white-bgcolor clearfix">
                        <h3 className="details-title">{this.props.item.productName}</h3>
                        <strong className="details-prince theme-color pull-left">￥{this.props.item.vipshopPrice}</strong>
                        <span className="details-volume pull-right">月销：{this.props.item.newCatId}件</span>
                    </div>
                    <div className="item-choose weui-cells mt-625">
                        <a className="weui-cell weui-cell_access open-popup" href="javascript:;"
                           data-target="#item_spec">
                            <div className="weui-cell__bd">
                                <p className="choose-text">选择 <span>颜色分类</span></p>
                            </div>
                            <div className="weui-cell__ft choose-des">
                            </div>
                        </a>
                        <div id="item_spec" className="weui-popup__container popup-bottom">
                            <div className="weui-popup__overlay"></div>
                            <div className="weui-popup__modal">
                                <div className="item-spec-layer white-bgcolor">
                                    <div className="spec-head clearfix">
                                        <div className="spec-head-img"><img
                                            src="https://m.360buyimg.com/n1/jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg"
                                            alt=""/></div>
                                        <strong className="spec-head-prince theme-color">￥7800.00</strong>
                                        <p className="spec-head-intro">商品编号：51867</p>
                                    </div>
                                    <div className="spec-info clearfix">
                                        <div className="spec-info-hd">颜色</div>
                                        <div className="spec-info-bd">
                                            <ul>
                                                <li className="active">银色</li>
                                                <li>深空灰色</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="spec-info clearfix">
                                        <div className="spec-info-hd">版本</div>
                                        <div className="spec-info-bd">
                                            <ul>
                                                <li>64GB</li>
                                                <li className="active">256GB</li>
                                                <li>64GB+一年碎屏险套餐</li>
                                                <li>256GB+一年碎屏险套餐</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="spec-length mb-625">
                                        <div className="weui-cell__bd">
                                            <p className="length-hd">数量</p>
                                        </div>
                                        <div className="weui-cell__ft">
                                            <div className="weui-count">
                                                <a className="weui-count__btn weui-count__decrease"></a>
                                                <input className="weui-count__number" type="number"  defaultValue="1"/>
                                                    <a className="weui-count__btn weui-count__increase"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="item-layer-button theme-bgcolor white-color" type="submit">确定
                                    </button>
                                    <a href="javascript:;" className="close-popup spec-close"><i
                                        className="fa fa-close"></i></a>
                                </div>
                            </div>
                        </div>
                        <a className="weui-cell weui-cell_access open-popup" href="javascript:;"
                           data-target="#item_parameter">
                            <div className="weui-cell__bd">
                                <p className="choose-text">产品参数</p>
                            </div>
                            <div className="weui-cell__ft choose-des">
                            </div>
                        </a>
                        <div id="item_parameter" className="weui-popup__container popup-bottom">
                            <div className="weui-popup__overlay"></div>
                            <div className="weui-popup__modal">
                                <div className="item-parameter-layer white-bgcolor">
                                    <h3 className="parameter-title">产品参数</h3>
                                    <table className="table table-condensed parameter-table">
                                        <tbody>
                                        <tr>
                                            <th>品牌</th>
                                            <td>Apple/苹果</td>
                                        </tr>
                                        <tr>
                                            <th>Apple型号</th>
                                            <td>Apple X</td>
                                        </tr>
                                        <tr>
                                            <th>网络类型</th>
                                            <td>无需合约版</td>
                                        </tr>
                                        <tr>
                                            <th>机身颜色</th>
                                            <td>深空灰色 银色</td>
                                        </tr>
                                        <tr>
                                            <th>套餐类型</th>
                                            <td>官方标配</td>
                                        </tr>
                                        <tr>
                                            <th>售后服务</th>
                                            <td>全国联保</td>
                                        </tr>
                                        <tr>
                                            <th>存储容量</th>
                                            <td>256GB 64GB</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button className="item-layer-button theme-bgcolor white-color close-popup"
                                            type="submit">完成
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-serve">
                        <span><i className="fa fa-check-circle-o theme-color"></i> 品质承诺</span>
                        <span><i className="fa fa-check-circle-o theme-color"></i> 七天包退换</span>
                        <span><i className="fa fa-check-circle-o theme-color"></i> 如实描述</span>
                    </div>
                    <div className="item-assess weui-cells mb-625">
                        <a className="weui-cell weui-cell_access" href="javascript:;">
                            <div className="weui-cell__bd">
                                <p className="choose-text">用户评价（<em className="theme-color">0</em>条）</p>
                            </div>
                            <div className="weui-cell__ft choose-des">
                                100%好评
                            </div>
                        </a>
                    </div>
                    <div className="item-precent white-bgcolor" id="item-precent">
                        <h4>图文详情</h4>
                        <span>
            <img
                src={this.props.item.smallImage}
                alt=""/>
            <img
                src={this.props.item.image3}
                alt=""/>
            <img
                src={this.props.item.image7}
                alt=""/>
            <br/>
                    </span>
                </div>
                </section>
                <Itemfoot></Itemfoot>
            </div>
        )
    }
}

const initMapStateToProps=state=>{
    return(
        {
            item:state.item
        }
    )
}
const initMapDispatchToProps = dispatch=>{

    return({
        get:(id,dataName)=>dispatch(asynList({
            url:`/data/${dataName}.data`,
            type:types.UPDATE_ITEM,
            id:id
        })),
    })
}
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Item)