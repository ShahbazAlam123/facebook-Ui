import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feedContainer">
      <Share />
      <Post />
    </div>
  );
};

export default Feed;
