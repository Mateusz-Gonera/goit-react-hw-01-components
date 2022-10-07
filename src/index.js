import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './components/zad1Profile/user.json';
import { Profile } from './components/zad1Profile/Profile';
import data from './components/zad2Statistic/data.json';
import { Statistics } from './components/zad2Statistic/Statistic';
import friends from './components/zad3Friends/friends.json';
import { FriendList } from './components/zad3Friends/FriendsList';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </App>
  </React.StrictMode>
);
