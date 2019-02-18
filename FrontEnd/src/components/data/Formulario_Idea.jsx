import  React, {Component} from 'react';
import {connect} from 'react-redux';

class Formulario_Idea extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname:'',
            mail:'',
            phone:'',
            headquarter:'',
            roleId:''
        };
    }

    handleInput = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const USER = this.state;
        this.addUserHandle(USER)
    };

    addUserHandle = (USER) => {
        this.props.onAddUser(USER);
    };

    render() {
        return (
            <div>
                <form  method="post"  onSubmit={this.handleSubmit}>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps1 = (dispatch) => {
    return{
        onAddUser: (USER) => {
            dispatch (addUser(USER));
        }
    }
};

export default connect (null, mapDispatchToProps1)(Formulario_Idea);