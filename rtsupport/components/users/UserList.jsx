import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component{
    render(){
        return(
            <ul>{
                this.props.users.map( user => {
                    return( 
                        <User 
                            user={user}
                            currentUser={this.props.currentUser}
                            key={user.id}
                        />
                    );
                })    
            }</ul>
        );
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired,
    currentUser: React.PropTypes.string
};

export default UserList;