import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./loading";
import { useParams } from "react-router";

const Dashboard  = () => {
  var link = "http://localhost:5000/posts";
  
  const [post, setPosts] = useState(null);
  const [Ppost,setPpost] = useState(null);
  const [isLoading, setLoading] = useState (true);
  const [isPosting, setPosting] = useState(false);
  const [likes, setLikes] = useState(0);
  const [contents , setpostContent] = useState('');

  useEffect(() => {
    fetch(link)
    .then(res => {
      return res.json();
    })
    .then (data => {
      setPosts(data);
      setLoading(false);
    });
  },[] );
  

  
  //Refreshes the page
  const refreshPage = ()=>{
    window.location.reload();
 }
   //Delete the given post
  const handlePost = (e) =>{
     e.preventDefault();
     setPosting (true);
  
   const  postscontent = {name : "Sanskar" ,contents,likes:0 };

   fetch("http://localhost:5000/posts" ,{
       method:'POST',
       headers: {"Content-Type" : "application/json"},
       body: JSON.stringify(postscontent)    // Converts the object into string 
     }).then(() => {
       refreshPage();
       setPosting (false);
     }) 
   }
   const deleteHandler=(id) =>{
   fetch('http://localhost:5000/posts/' + id, {
     method: 'DELETE'
    }) .then(() =>{
    refreshPage();
   });
 }
   
  const myFunction = (x) => {
     x.className = "fa-thumbs-down";
   }
   
    return (
        <div className="home">
        
        <div className="posting">
        <form onSubmit = {handlePost}>
          <textarea rows = "5" cols = "40" placeholder = "What's on your mind?..." required
          value = {contents} 
            onChange = {(e) => setpostContent(e.target.value) }
          /> <br />
         {!isPosting && <button >Post</button>}
         {isPosting && <button disabled >Posting...</button>}
        </form>
        {isLoading && <Loading/>}
        </div>
        <hr/>
        { post && <div className="posts">
         {post.map ((post) => (
          <div className="post-content" key = {post.id}>
          <div className="firstline">
           <h4>{post.name}</h4>
           <div className="buttons">
           <button className = "edit"><span className="glyphicon">&#xe065;</span></button>
            <button onClick = {()=>{deleteHandler(post.id)}} className = "del" ><i className="material-icons">delete</i></button>
           </div>
           
            </div>
           <Link to = {`/posts/${post.id}`}> 
           <p> {post.contents }</p>
           </Link>
           <div className="likes">
             <i className="fa fa-thumbs-up"></i>
          
           </div> 

            <div className="comments">
            <form action="">
               
              <input type="text" placeholder = "Add Comments..."/>
              <button> <i class="material-icons">&#xe163;</i></button>
            </form>
            </div>
          </div>
                  ) ) }
        </div>}
        </div>

       
      );
}
 
export default Dashboard;