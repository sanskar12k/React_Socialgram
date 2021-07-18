import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./loading";

const PostsContent = () => {
    const { id } = useParams();
    const [post, setPosts] = useState(null);
  const [isLoading, setLoading] = useState (true);
    const port = process.env.PORT || 4000
 

  useEffect(() => {
    fetch(port + id) 
    .then(res => {
      return res.json();
    })
    .then (data => {
      setPosts(data);
      setLoading(false);
    });
  },[] );

    return (  
        <div className="postcontent">
             {isLoading && <Loading/>}
           {post && 
           (<div className = "details">
           <p>{post.name}</p>
           <p>{post.contents}</p>
           </div>)
           }
        </div>
    );
}
 
export default PostsContent;
