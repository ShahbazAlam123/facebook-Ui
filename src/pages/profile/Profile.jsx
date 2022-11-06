import "./profile.css";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

const Profile = () => {
  return (
    <>
      <TopBar />

      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="./asset/posts/1.jpeg" alt="" className="coverImg" />
              <img src="./asset/person/5.jpeg" alt="" className="profileImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">jane</h4>
              <span className="profileDesc">I am a Bad boy</span>
            </div>
          </div>

          <div className="profileBottomRight">
            <Feed />
            <RightBar profile={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
