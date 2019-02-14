import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import "./Finding.css";
import Findheader from "../findheader/Findheader"
import Findcart from "../findcart/Findcart";
import Findgroup from "../findgroup/Findgroup";
import Banner1 from "./banner1.jpg";
import Banner2 from "./banner2.jpg";
import Banner3 from "./banner3.jpg";
import asynList from "../../store/actions/asynList";
import * as types from "../../store/types";
import {connect} from "react-redux";
class Finding extends Component{
    constructor(props){
        super()
        props.get()
    }
    // state={
    //     msg2:[]
    // };
    // componentDidMount() {
    //     fetch(
    //         `/data/find.data`
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //         data=>this.setState({msg2:data})
    //     )
    // }

    render() {
        let {finding}=this.props
        return(

            <section className="zyw-container">
                <Findheader></Findheader>
                <Findcart></Findcart>
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
                <Findgroup msg2={finding} dataName="find"></Findgroup>
            </section>

        )
    }
}

const initMapStateToProps=state=>{
    return(
        {
            finding:state.finding
        }
    )
}
const initMapDispatchToProps = dispatch=>{
    return({
        get:()=>dispatch(asynList({
            url:"/data/find.data",
            type:types.UPDATE_FINDING
        })),
    })
}
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Finding)