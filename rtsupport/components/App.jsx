import React, { Component } from 'react';
import fecha from 'fecha';
import ChannelSection from './channels/ChannelSection.jsx'
import UserSection from './users/UserSection.jsx'
import MessageSection from './messages/MessageSection.jsx'

class App extends Component{
  constructor(props){
    super(props);
    const timestamp = fecha.format(new Date, 'hh:mm.ss DD/MM/YY');
    this.state = {
      channels: [{id:0, name:'Hardware Support'}, {id:1, name:'Software Support'}],
      users: [{id:0, name: 'Paulo'}],
      messages: [{id:0, body: 'This is a test message', author: 'server', timestamp}],
      activeChannel: {}
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length,  name});
    this.setState({channels});
    // Todo: send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // Todo: Get channels messages
  }
  setUserName(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
    // TODO: send to server
  }
  addMessage(body){
    let {messages, users} = this.state;
    let author = users.length > 0 ? users[0].name : 'announymous';
    const createdAt = fecha.format(new Date, 'hh:mm.ss DD/MM/YY');
    messages.push({id: messages.length, body, author, createdAt})
    this.setState({messages});
  }
  render() {
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
            setUserName={this.setUserName.bind(this)}
          />
        </div>
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>
    );
  }
}

export default App;
