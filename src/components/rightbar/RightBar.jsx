import "./rightbar.css";
import { GrFormAdd } from "react-icons/gr";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <div className="rightbarContainer">
        <div className="rightbarWrapper">
          <div className="birthdayGift">
            <img src="./asset/gift.png" alt="" className="bday" />
            <span className="rightbarGiftText">
              <b>Pola foster</b> and <b>2 other</b> have Birthday Today
            </span>
          </div>

          <div className="rightbarAd">
            <img src="./asset/ad.jpeg" alt="" className="ad" />
          </div>

          <div className="onlineFriends">
            <span className="onlineText">Online Friends</span>

            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
            <div className="friends">
              <div className="online">
                <img src="./asset/person/3.jpeg" alt="" className="onlinePic" />
                <span className="status"></span>
              </div>
              <span className="onlineName">sfak gokolo</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div className="profileContainer">
        <button className="followbtn">
          <div>Follow</div> <GrFormAdd className="addicon" />
        </button>
        <div className="userInfo">
          <h4 className="userHeading">User Information</h4>
          <div className="userdetails">
            <span>
              <b>City</b> : New York
            </span>
            <span>
              <b>From</b> : Madrid
            </span>
            <span>
              <b>RelationShip</b> : Single
            </span>
          </div>
          <div className="userFriends">
            <h2>User Friends</h2>
            <img src="./asset/person/6.jpeg" alt="img" className="friendImg" />
            <span className="userName">Jane</span>
          </div>
        </div>
      </div>
    );
  };
  return profile ? <ProfileRightBar /> : <HomeRightBar />;
};

export default RightBar;
