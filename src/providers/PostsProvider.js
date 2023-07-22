import { createContext, useContext, useEffect, useState } from "react"

const PostsContext = createContext([])
const MorePostsContext = createContext(() => {})

export function usePosts () {
    return useContext(PostsContext)
}

export function useMorePosts() {
    return useContext(MorePostsContext)
}

function PostsProvider({children}) {
    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=" + process.env.REACT_APP_ACCESS_TOKEN)

    function fetchPosts() {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setPosts(prev => [...prev, ...json.data])
            setUrl(json.paging.next)
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const SeeMore = {
        getMorePosts: fetchPosts,
        areMore: !!url
    }

    return (
        <PostsContext.Provider value={posts}>
            <MorePostsContext.Provider value={SeeMore}>
                {children}
            </MorePostsContext.Provider>
        </PostsContext.Provider>
    )
}

export default PostsProvider