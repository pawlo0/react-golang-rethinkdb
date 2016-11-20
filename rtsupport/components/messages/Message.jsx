import React, {Component} from 'react';

class Message extends Component{
    render(){
        const {message} = this.props;
        return(
            <li className='message'>
                <p><span className='author'>{message.author}</span><span className='timestamp'>{message.timestamp}</span></p>
                <p><span className='body'>{message.body}</span></p>
            </li>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
};

export default Message;