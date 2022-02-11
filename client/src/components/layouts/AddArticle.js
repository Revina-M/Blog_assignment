import React,{useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {Link} from 'react-router-dom';

function AddArticle(props) {
    const [title, setTitle] = useState("");
    const [article,setArticle] = useState("");
    const [author,setAuthor] = useState("");

    const changeOnClick = e =>{
        e.preventDefault();

        const articles={
            title,
            article,
            author
        };

        setTitle("");
        setArticle("");
        setAuthor("");

        axios
            .post("/home/articles/add",articles)
            .then(res=>console.log(res.data))
            .catch(err=>{
                console.log(err);
            });
    };


    return (
        <AddArticleContainer>

<Link to="/home" className='btn btn-info'>Home</Link>
<br></br>
            <div className='container'>
        <h1 color='white'>Add New Article</h1>
        <br></br>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="author">Author</label>
    <input type="text" value={author} onChange={e=>setAuthor(e.target.value)} className="form-control"  placeholder="Author Name"/>
  </div>
  <br></br>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"  placeholder="Title"/>
  </div>
  <br></br>
  <div className="form-group">
    <label htmlFor="article">Article</label>
    <textarea value={article} className="form-control" onChange={e=>setArticle(e.target.value)} rows="3"></textarea>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Post Article</button>
</form>
</div>
</AddArticleContainer>
    );
}

export default AddArticle;


const AddArticleContainer = styled.div`
    margin:3rem auto;
    padding: 4rem;
    width: 31.25rem;
`;