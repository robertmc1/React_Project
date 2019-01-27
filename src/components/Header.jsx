import  React, {Component} from 'react';


class Header extends Component{

    render(){
        return(
            <div>
                <ul id={"header"}>
                    <li className={"botonesMenu"}><a  href="#home">User</a></li>
                    <li className={"botonesMenu"}><a href="#news">Cities</a></li>
                    <li className={"botonesMenu"}><a href="#contact">Idea</a></li>
                    <li className={"botonesMenu"}><a href="#contact">Team</a></li>
                    <div id={"demiumTitle"}>Demium</div>
                </ul>
            </div>

        )
    }
}

export default Header;