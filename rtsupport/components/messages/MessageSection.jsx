import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component{
    render(){
        const {activeChannel} = this.props;
        return( 
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    {activeChannel ? <strong>{activeChannel.name}</strong> : <strong>No channel</strong>}
                </div>
                {activeChannel ?
                   <div className='panel-body messages'>
                        <MessageList {...this.props} />
                        <MessageForm {...this.props} />
                    </div>
                :
                    <p>Please select a channel.</p>
                }
                        
            </div>
        );
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object,
    addMessage: React.PropTypes.func.isRequired
};

export default MessageSection;