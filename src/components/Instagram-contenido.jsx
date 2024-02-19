/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";

export const Instagram_contenido = ({
  userImg,
  descImg,
  descImgContent,
  userName,
  date,
  comment,
  contentRoot,
}) => {
  return (
    <>
      <div className="container">
        <img src={userImg} alt={descImg} className="user" />
        <h5>{`${userName} .`}</h5>
        <span>{date}</span>
        <img src={contentRoot} alt={descImgContent} />
      </div>
      <div className="media">
        <FaRegHeart className="iconContenido" />
        <FaRegComment className="iconContenido" />
        <CiPaperplane className="iconContenido" />
        <span className="bookMark">
          <BsBookmark />
        </span>
        <p>
          {`${userName} ${comment}`} <FaRegSmile />
        </p>
        <p>Añadir comentario</p>
        <hr />
      </div>
    </>
  );
};

export default Instagram_contenido;
