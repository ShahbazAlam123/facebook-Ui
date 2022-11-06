import "./topbar.css";
import { FiSearch } from "react-icons/fi";
import { BsPersonFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="tobarLeft">
        <span className="logo">facebook</span>
      </div>

      <div className="topbarMid">
        <div className="searchBar">
          <FiSearch className="searchIcon" />
          <input
            placeholder="Search for friends or videos"
            type="text"
            className="search"
          />
        </div>
      </div>
      <div className="topRight">
        <div className="topRightwrapper">
          <div className="textLink">
            <span className="text">HomePage</span>
            <span className="text">Timeline</span>
          </div>
          <div className="linkIcons">
            <div className="icon">
              <BsPersonFill />
              <span className="num">1</span>
            </div>
            <div className="icon">
              <BsFillChatLeftDotsFill />
              <span className="num">1</span>
            </div>
            <div className="icon">
              <IoMdNotifications />
              <span className="num">2</span>
            </div>
          </div>
          <div className="profileLink">
            <img
              src="./asset/person/4.jpeg"
              alt="img"
              className="profileImgbar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
