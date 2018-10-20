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
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages
        .sort((a, b) => a.user_id - b.user_id)
        .reverse()
        .map(message => {
          const user = users.filter(user => {
            return user.id === message.user_id;
          })[0];
          return (
            <Tweet
              key={message.id}
              user={user}
              message={message}
              followUser={followUser}
              unfollowUser={unfollowUser}
              following={following}
              loggedUserId={loggedUserId}
            />
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
