import React, { Component } from 'react';

class Message extends Component{
  render() {
    const {message} = this.props;
    return (
      <li className='message'>
        <div className='author'>
          <strong>{message.author}</strong>
          <i className='timestamp'>{message.createdAt}></i>
        </div>
        <div className='body'>{message.body}</div>
      </li>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
}

export default Message;
