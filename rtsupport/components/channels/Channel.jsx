import React, {Component} from 'react';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);    
    }
    render(){
        const {channel, activeChannel} = this.props;
        return(
            <li className={activeChannel === channel ? 'active' : ''}>
                <a onClick={this.onClick.bind(this)}>
                    {channel.name}
                </a>
            </li>
        );
    }
}

Channel.propTypes = {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object
};

export default Channel;