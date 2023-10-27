/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Instagram_suggets = ({ userImg, name, userName }) => {
  
  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const handleClick = () =>{
      setIsFollowing(!isFollowing)
    }

  return (
    <div className="sugerencias">
      <img src={require({userImg}).default} alt="" />
      <h5>{name}</h5>
      <span>@{userName}</span>
      <a href='#' className='followCard-button' onClick={handleClick}>{text}</a>
    </div>
  );
};

Instagram_suggets.propTypes = {
  userImg: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Instagram_suggets;