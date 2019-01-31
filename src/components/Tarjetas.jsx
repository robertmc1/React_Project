import {Component} from 'react';

class Tarjetas extends Component {
    constructor(){
        super();

    }

    render() {
        const user = this.state.user.map((user,i) => {
            return(
                <div className="card">

                    <div className="grid-container">
                        <div id="name">
                            {user.name}
                        </div>

                        <div id="surname">
                            {user.surname}
                        </div>

                        <div id="rol">
                            {user.role}
                        </div>

                        <div id="role">
                            {user.headquorter}
                        </div>
                    </div>

                </div>
            )
        });

        return(
            <div>
                <div>
                    REAL UNICORN
                </div>
                <div>

                </div>
            </div>
        )

    };
}

export default Tarjetas;