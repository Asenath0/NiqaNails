import { useMorePosts, usePosts } from "../../providers/PostsProvider";
import "./Portfolio.css";
import Post from "../../components/Post/Post";

function Portfolio() {
  const posts = usePosts();
  const SeeMore = useMorePosts();

  return (
    <section id="portfolio">
      <h1>Moje prace</h1>
      <div className="posts">
        {posts.map(
          (post) =>
            (post.media_type === "IMAGE" ||
              post.media_type === "CAROUSEL_ALBUM") && <Post post={post} />
        )}
      </div>
      {SeeMore?.areMore && (
        <div className="button-wrapper">
          <button
            onClick={() => {
              SeeMore.getMorePosts();
            }}
          >
            Zobacz więcej
          </button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
