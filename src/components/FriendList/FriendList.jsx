import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.friendavatar} />
            <p className={css.friendname}>{name}</p>
            <p className={clsx(
                isOnline ? css.friendisonline : css.friendnotonline
            )}>{isOnline ? "Online" : "Offline"}</p>
        </>
    );
}

const FriendList = ({friends}) => {
    return (
    <ul className={css.friends}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return (
            <li key={id} className={css.frienditem}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
            );
        })}
    </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array,
};
FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendList;