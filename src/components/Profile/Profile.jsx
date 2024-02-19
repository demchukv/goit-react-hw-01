import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers = 0, views = 0, likes = 0 } }) => {
    return (
        <div className={css.profile}>
          <div className={css.user}>
            <img
            className={css.avatar}
            src={image}
            alt={name}
            />
            <p className={css.username}>{name}</p>
            <p className={css.usertag}>@{tag}</p>
            <p className={css.userlocation}>{location}</p>
          </div>

          <ul className={css.stats}>
            <li className={css.statsitem}>
                <span className={css.statsname}>Followers</span>
                <span className={css.statsvalue}>{followers}</span>
            </li>
            <li className={css.statsitem}>
                <span className={css.statsname}>Views</span>
                <span className={css.statsvalue}>{views}</span>
            </li>
            <li className={css.statsitem}>
                <span className={css.statsname}>Likes</span>
                <span className={css.statsvalue}>{likes}</span>
            </li>
          </ul>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };

export default Profile