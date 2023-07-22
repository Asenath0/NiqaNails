import { usePosts } from "../../providers/PostsProvider"
import './Portfolio.css'

function Post({post}) {
    return <div className="post">
        <img src={post?.media_url} alt={post?.media_type} />
                <p>{post.caption}</p>
        </div>
}

function Portfolio() {
    const posts = usePosts()
    
    return (
        <section id="portfolio" >
            <h1>Moje prace</h1>
            <div className="posts">
            {posts.map(post => post.media_type === 'IMAGE' && <Post post={post} />)}
            </div>
        </section>
    )
}

export default Portfolio