import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
const Post = () => {
  return (
    <>
      <div className="postContainer">
        <div className="mainPost">
          <div className="postTop">
            <div className="postTopLeft">
              <img src="./asset/person/4.jpeg" alt="img" className="postImg" />
              <span className="postName">john</span>
              <span className="postDate">3 days ago</span>
            </div>
            <div className="postTopRight">
              <div>
                <FiMoreVertical className="threedotRight" />
              </div>
            </div>
          </div>

          <div className="postCenter">
            <div className="postdesc">Hi this is my post</div>
            <div className="postImage">
              <img src="./asset/person/4.jpeg" alt="" className="img" />
            </div>
          </div>

          <div className="postBottom">
            <div className="postBottomleft">
              <img src="./asset/like.png" alt="" className="like" />
              <img src="./asset/heart.png" alt="" className="like" />
              <span className="likeCount">10</span>
            </div>
            <div className="PostComment">
              <span className="cmnt">comment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="postContainer">
        <div className="mainPost">
          <div className="postTop">
            <div className="postTopLeft">
              <img src="./asset/person/4.jpeg" alt="img" className="postImg" />
              <span className="postName">john</span>
              <span className="postDate">3 days ago</span>
            </div>
            <div className="postTopRight">
              <div>
                <FiMoreVertical className="threedotRight" />
              </div>
            </div>
          </div>

          <div className="postCenter">
            <div className="postdesc">Hi this is my post</div>
            <div className="postImage">
              <img src="./asset/person/8.jpeg" alt="" className="img" />
            </div>
          </div>

          <div className="postBottom">
            <div className="postBottomleft">
              <img src="./asset/like.png" alt="" className="like" />
              <img src="./asset/heart.png" alt="" className="like" />
              <span className="likeCount">10</span>
            </div>
            <div className="PostComment">
              <span className="cmnt">comment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="postContainer">
        <div className="mainPost">
          <div className="postTop">
            <div className="postTopLeft">
              <img src="./asset/person/4.jpeg" alt="img" className="postImg" />
              <span className="postName">john</span>
              <span className="postDate">3 days ago</span>
            </div>
            <div className="postTopRight">
              <div>
                <FiMoreVertical className="threedotRight" />
              </div>
            </div>
          </div>

          <div className="postCenter">
            <div className="postdesc">Hi this is my post</div>
            <div className="postImage">
              <img src="./asset/posts/4.jpeg" alt="" className="img" />
            </div>
          </div>

          <div className="postBottom">
            <div className="postBottomleft">
              <img src="./asset/like.png" alt="" className="like" />
              <img src="./asset/heart.png" alt="" className="like" />
              <span className="likeCount">10</span>
            </div>
            <div className="PostComment">
              <span className="cmnt">comment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
