import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Article = props => {
    const {posts}=props;
    const [title,setTitle]=useState('');
    const [article,setArticle]=useState('');
    const [author,setAuthor]=useState('');

    useEffect(()=>{
        axios
        .get(`/articles/${props.match.params.id}`)
        .then(res=>[
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthor(res.data.author)
        ])
        .catch(error=>console.log(error));
    },[posts]);

    return (
        <div>
            <h2>{title}</h2>
            <p>{article}</p>
            <p>{author}</p>
        </div>
    );
}

export default Article;

