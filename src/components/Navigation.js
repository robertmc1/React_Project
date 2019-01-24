import  React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <div id={"cuadrogeneral"}>

                <nav >
                   <ul>
                       <li  id="alinearColumn">
                           Nombre
                       </li>
                       <li id="alinearColumn">
                           Surname
                       </li>
                       <li id="alinearColumn">
                           Role
                       </li>
                       <li id="alinearColumn">
                           Headquorter
                       </li>
                   </ul>
                </nav>
                <nav >
                    <ul>
                        <li  id="alinearColumn">
                            Nombre
                        </li>
                        <li id="alinearColumn">
                            Surname
                        </li>
                        <li id="alinearColumn">
                            Role
                        </li>
                        <li id="alinearColumn">
                            Headquorter
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}


export default Navigation;