import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {}
        };
    }
    addChannel(name){
        let {channels} = this.state;
        channels.push({id:channels.length, name});
        this.setState({channels});
        // to do: send to server
    }
    setChannel(activeChannel){
        this.setState({activeChannel});
        // to do: Get channels messages
    }
    addUser(userName){
        let {users} = this.state;
        users.push({id:users.length, userName});
        this.setState({users});
        this.setState({currentUser: userName});
        // to do: send to server
    }
    addMessage(message){
        let {messages} = this.state;
        let author = this.state.currentUser;
        let channel = this.state.activeChannel;
        let d = new Date();
        let timestamp = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " ";
        messages.push({
            id: messages.length,
            author,
            channel,
            timestamp,
            body: message
        });
        this.setState(messages);
        // to do: send to server
    }
    render(){
        return(
            <div className="app">
                <div className="nav">
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection
                        {...this.state}
                        addUser={this.addUser.bind(this)}
                    />
                </div>
                <div className='messages-container'>    
                    <MessageSection
                        messages={
                            this.state.messages.filter(message => {
                                return message.channel === this.state.activeChannel; 
                            })
                        }
                        activeChannel={this.state.activeChannel}
                        addMessage={this.addMessage.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;