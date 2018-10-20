import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';

const CN = 'dashboard';

import './dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { getDashboardMessages } = this.props;
    getDashboardMessages();
  }

  renderContent(loading, error, messages) {
    const { users, followedUser, followUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages) {
      return messages.reverse().map(message => {
        const user = users.filter(user => {
          return user.id === message.user_id;
        })[0];
        return (
          <Tweet key={message.id} user={user} message={message} followedUser={followedUser} followUser={followUser} />
        );
      });
    } else {
      return <div>{error || 'Um erro ocorreu!'}</div>;
    }
  }

  render() {
    const { messages, loading, error } = this.props;
    console.log(messages);
    return (
      <div>
        <h1>DASHBOARD</h1>
        {this.renderContent(loading, error, messages)}
      </div>
    );
  }
}

export default Dashboard;
