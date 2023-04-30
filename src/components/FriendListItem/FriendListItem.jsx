import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li key={id} className={css.item}>
            <span className={css.status}>{isOnline ? (
        <button className={css.statusOn}>.</button>) : (
        <button className={css.statusOff}>.</button>)
            
                }</span>
            <img className={css.avatar} src={`${avatar}`} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}