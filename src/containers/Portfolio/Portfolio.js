import { useMorePosts, usePosts } from "../../providers/PostsProvider";
import "./Portfolio.css";

function Post({ post }) {
  return (
    <div className="post">
      <img src={post?.media_url} alt={post?.media_type} />
      <p>{post.caption}</p>
    </div>
  );
}

function Portfolio() {
  const posts = usePosts();
  const SeeMore = useMorePosts();

  return (
    <section id="portfolio">
      <h1>Moje prace</h1>
      <div className="posts">
        {posts.map(
          (post) => post.media_type === "IMAGE" && <Post post={post} />
        )}
      </div>
      {SeeMore.areMore && (
        <button
          onClick={() => {
            SeeMore.getMorePosts();
          }}
        >
          dumpcia
        </button>
      )}
    </section>
  );
}

export default Portfolio;
