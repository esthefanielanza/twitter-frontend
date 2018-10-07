import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';

const CN = 'dashboard';

import './dashboard.scss';

class Dashboard extends Component {
    render(){
        const { user, followedUser, followUser } = this.props;
        return (
        <div> 
            <h1>DASHBOARD</h1>
            <Tweet followedUser={followedUser} followUser={followUser}/>
            <Tweet followedUser={followedUser} followUser={followUser}/>
            <Tweet followedUser={followedUser} followUser={followUser}/>
        </div>
        );
    }
}  

export default Dashboard;
