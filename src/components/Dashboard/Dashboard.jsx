import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';

const CN = 'dashboard';

import './dashboard.scss';

class Dashboard extends Component {
    render(){
        return (
        <div> 
            <h1>DASHBOARD</h1>
            <Tweet />
            <Tweet />
            <Tweet />
        </div>
        );
    }
}  

export default Dashboard;
