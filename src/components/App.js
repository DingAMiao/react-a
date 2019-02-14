import React,{Component} from 'react';
import Navbar from "../common/navbar/Navbar";
import Footbar from "../common/footbar/Footbar";
import Error from "../common/error/error";
import List from "../components/list/List";
import Productlist from "./productlist/Productlist";
import Finding from "./finding/Finding";
import Buycart from "./buycar/Buycar";
import User from "./user/User";
import Item from "./item/Item";
import Login from "./login/Login";
import Reg from "./reg/Reg";
import Loading from"../common/loading/Loading";

import {connect} from "react-redux";

import {Route,Redirect,Switch} from "react-router-dom";
import * as types from "../store/types";
import Auth from "../guard/Auth"

class App extends Component{
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.location.pathname);

        //监听路由
        let path = nextProps.location.pathname;
        this.watchRouter(path)
    }
    watchRouter(path){
        let {viewNav,viewFoot}=this.props;

        if (/list/.test(path)){
            // this.setState({bNav:true,bFoot:true})
            viewNav(true);viewFoot(true)
        }
        if (/productlist|finding|user/.test(path)){
            // this.setState({bNav:false,bFoot:true})
            viewNav(false);viewFoot(true)
        }
        if (/item|buycart|login|reg/.test(path)){
            // this.setState({bNav:false,bFoot:false})
            viewNav(false);viewFoot(false)
        }
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
    }
    render() {
        let {bNav,bFoot,bLoading} = this.props;
        return(
            <>
                {bLoading && <Loading/>}
                {bNav &&  <Navbar/>}

                <Switch>
                    <Route path="/list" component={List}/>
                    <Route path="/productlist" component={Productlist}/>
                    <Route path="/finding" component={Finding}/>
                    <Auth path="/user" component={User}/>
                    <Route path="/buycart" component={Buycart}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/item/:id" component={Item}/>
                    <Redirect exact from="/" to="/list"/>
                    <Route component={Error}/>
                </Switch>

                {bFoot &&  <Footbar/>}

            </>
        )
    }
}

const initMapStateToProps=state=>{
    return(
        {
          bNav:state.bNav,
          bFoot:state.bFoot,
          bLoading:state.bLoading,
        }
    )
}

const initMapDispatchToProps = dispatch=>{
    return({
        viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
        viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
    })
}
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App)