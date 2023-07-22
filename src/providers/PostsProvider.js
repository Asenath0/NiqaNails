import { createContext, useContext, useEffect, useState } from "react"

const PostsContext = createContext([])

export function usePosts () {
    return useContext(PostsContext)
}

function PostsProvider({children}) {
    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=IGQVJWVFdKQ0pxXzA5cW5Edy1xOUFwbnYzWV9JaEhfcVFGTjhVUThzSUhxRnJ5OWlydXdQdnQzLWhscjd0OHppWTQxQ2NWWWxwZAGJwbWIzVHVKQV9uNmxVS29CX2lhWjRwTHZASVS1DVWM4bFBfWV9EZAwZDZD")

    function fetchPosts() {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setPosts(json.data)
            setUrl(json.paging.next)
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    )
}

export default PostsProvider