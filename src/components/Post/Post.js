import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <img src={post?.media_url} alt={post?.media_type} />
      <p>{post.caption}</p>
    </div>
  );
}

export default Post;
