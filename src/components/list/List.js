import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import Banner1 from "./banner1.jpg";
import Banner2 from "./banner2.jpg";
import Banner3 from "./banner3.jpg";
import Navmeau from "../../components/navmeau/Navmeau";
import News from "../../components/news/News";
import Seckill from "../../components/seckill/Seckill";
import Show from "../../components/show/Show";
import Wares from "../../components/wares/Wares";
import * as types from "../../store/types";
import asynList from "../../store/actions/asynList";


import "./List.css";
import {connect} from "react-redux";
class List extends Component{
    constructor(props){
        super()
        props.get()
    }
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     fetch(
    //         `/data/products.data`
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //         data=>this.setState({list:data})
    //     )
    // }

    render() {
        let {list} = this.props;
        return(
            <section className="zyw-container">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto:1000
                    }}

                >
                    <div><img src={Banner1} alt=""/></div>
                    <div><img src={Banner2} alt=""/></div>
                    <div><img src={Banner3} alt=""/></div>
                </ReactSwipe>
                <Navmeau></Navmeau>
                <News></News>
                <Seckill list={list} dataName="products"></Seckill>
                <Show></Show>
                <Wares list={list} dataName="products"></Wares>
            </section>
        )
    }
}

const initMapStateToProps=state=>{
    return(
        {
           list:state.list
        }
    )
}
const initMapDispatchToProps = dispatch=>{
    return({
        get:()=>dispatch(asynList({
            url:"/data/products.data",
            type:types.UPDATE_LIST
        })),
    })
}
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(List)
