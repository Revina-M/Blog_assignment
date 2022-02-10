import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Articles = (props) => {
const {posts}=props;
 return(
     <MainContainer>
        
        {posts.map((article,key)=>(
            <div className='container' key={key}>
            <Link
                to={{
                    pathname:`/article/${article._id}`
                }}
            >
            <h2>{article.title}</h2>
            </Link>
            
            <p>{article.article}</p>
            <span>Author: {article.author}</span>
            <div className='row my-5'>
                <div className='col-sm-2'>
                    <Link to={`/update/${article._id}`} className='btn btn-outline-success'>
                        Edit Article
                    </Link>
                </div>
                <div className='col-sm-2'>
                    <Link to="/delete-article" className='btn btn-outline-danger'>
                        Delete Article
                    </Link>
                </div>
            </div>
            </div>
        ))} 
     </MainContainer>
 );
}

export default Articles;

const MainContainer = styled.div`
    margin:7rem 0;
    color:white;
`;