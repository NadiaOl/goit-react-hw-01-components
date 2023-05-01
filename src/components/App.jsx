import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userProfile from '../data/user.json';
import dataStatistic from '../data/data.json';
import friendList from '../data/friends.json';
import transactionList from '../data/transactions.json';


export const App = () => {
  return (
    <div style={{
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      gap: 20,
      color: '#010101',
    }}>
      
      <Profile
        user={userProfile}
        avatar={userProfile.avatar}
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        stats={userProfile.stats}
      />
      <Statistics
        title="Upload stats"
        stats={dataStatistic}
      />
      
      <FriendList
        friends={friendList} />
      
      <TransactionHistory 
        items={transactionList} 
      />
    </div>
  );
};
