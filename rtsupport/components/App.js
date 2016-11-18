import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: []
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
    render(){
        return(
            <ChannelSection
                channels={this.state.channels}
                addChannel={this.addChannel.bind(this)}
                setChannel={this.setChannel.bind(this)}
            />
        );
    }
}

export default App;