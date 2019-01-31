import {NavLink} from "react-router-dom";
import  React, {Component} from 'react';


class Header extends Component{

    render(){

        return(
            <div>
                <ul id={"header"}>
                    <li className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Users" exact>Users </NavLink></li>
                    <li className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Cities" exact>Cities </NavLink></li>
                    <li className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Ideas" exact>Ideas </NavLink></li>
                    <li className={"botonesMenu"}><NavLink activeClassName={'is-active'} to="/Teams" exact>Teams </NavLink></li>
                    <div id={"demiumTitle"}>Demium</div>
                </ul>
            </div>

        )
    }
}

export default Header;