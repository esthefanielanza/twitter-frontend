import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tweet from '../Tweet/Tweet';

const CN = 'dashboard';

import './dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { getDashboardMessages } = this.props;
    getDashboardMessages();
  }

  renderProfileContent(loading, error, messages) {
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages.map(message => {
        const user = users.filter(user => {
          return message.id == user.id;
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

  renderFriendsContent(loading, error, messages) {
    const { users, followUser, loggedUserId, following, unfollowUser } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    } else if (messages.length > 0) {
      return messages.map(message => {
        const user = users.filter(user => {
          return message.id == user.id;
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
      return <div>{error || 'Nenhuma mensagem a ser exibida.'}</div>;
    }
  }

  renderDashboardContent(loading, error, messages) {
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
    const {
      messages,
      loading,
      error,
      loadingFriends,
      friendsError,
      friendsMessages,
      loadingProfile,
      profileError,
      profileMessages,
      getDashboardMessages,
      getProfileMessages,
      loggedUserId,
      getFriendsMessages
    } = this.props;
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => getDashboardMessages()}>
              <h1 className="tab-title">DASHBOARD</h1>
            </Tab>
            <Tab onClick={() => getFriendsMessages(loggedUserId)}>
              <h1 className="tab-title">FRIENDS</h1>
            </Tab>
            <Tab onClick={() => getProfileMessages(loggedUserId)}>
              <h1 className="tab-title">PROFILE</h1>
            </Tab>
          </TabList>

          <TabPanel>
            <h2>{this.renderDashboardContent(loading, error, messages)}</h2>
          </TabPanel>
          <TabPanel>
            <h2>{this.renderFriendsContent(loadingFriends, friendsError, friendsMessages)}</h2>
          </TabPanel>
          <TabPanel>
            <h2>{this.renderProfileContent(loadingProfile, profileError, profileMessages)}</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Dashboard;
