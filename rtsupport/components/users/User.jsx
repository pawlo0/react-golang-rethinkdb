import React, {Component} from 'react';

class User extends Component{
    render(){
        const {user} = this.props;
        const {currentUser} = this.props;
        return(
            <li>
                {user.userName === currentUser ? <strong>{user.userName}</strong> : user.userName}
            </li>
        );
    }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired,
};

export default User;