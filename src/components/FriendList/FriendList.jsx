import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from "prop-types";
import css from './FriendList.module.css'
    
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(FriendListItem)}
        </ul>
)}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}