/* eslint-disable no-undef */
import PropTypes from 'prop-types';
export const Instagram_stories = ( {userImg, userName} ) => {
  return (
    <>
    <div className="historias">
        <img src={require({userImg}).default} alt="Olvidate de un titulo"/>
        <a href="#">{userName}</a>
    </div>
    </>
  )
}
Instagram_stories.propTypes = {
    userImg: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
};
export default Instagram_stories;