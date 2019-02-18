import {NavLink} from "react-router-dom";
import  React, {Component} from 'react';


class Header extends Component{

    render(){
        return(
            <div>
                <nav id={"header"}>
                    <div id={"demiumTitle"}>Demium.</div>
                    <div className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Users" exact>Users </NavLink></div>
                    <div className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Cities" exact>Cities </NavLink></div>
                    <div className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Ideas" exact>Ideas </NavLink></div>
                    <div className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Teams" exact>Teams </NavLink></div>
                </nav>
            </div>
        )
    }
}

export default Header;