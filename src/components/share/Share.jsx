import "./share.css";
import {
  MdPermMedia,
  MdLabel,
  MdOutlineRoom,
  MdEmojiEmotions,
} from "react-icons/md";

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="./asset/person/4.jpeg" alt="img" className="shareImg" />
          <span className="shareText">Whats in your Mind john ?</span>
        </div>

        <div className="shareMid">
          <hr className="shareLine" />
        </div>

        <div className="shareDown">
          <div className="shareOptions">
            <div className="photoUpload">
              <MdPermMedia id="photo" className="shareIcon" />
              <span className="uploadText">Photo or Video</span>
            </div>
            <div className="photoUpload">
              <MdLabel id="tag" className="shareIcon" />
              <span className="uploadText">Tag</span>
            </div>
            <div className="photoUpload">
              <MdOutlineRoom id="loc" className="shareIcon" />
              <span className="uploadText">Location</span>
            </div>
            <div className="photoUpload">
              <MdEmojiEmotions id="feel" className="shareIcon" />
              <span className="uploadText">Feelings</span>
            </div>
          </div>
          <div className="shareBtn">
            <button className="sbtn">share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
