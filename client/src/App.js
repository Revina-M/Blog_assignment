import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route,Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layouts/Header'; 
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Article from './components/layouts/Article';
import Articles from './components/Articles';
import AddArticle from './components/layouts/AddArticle';
import EditArticle from './components/layouts/EditArticle';

function App() {
  const[posts,setPosts] = useState([]);
  useEffect(()=>{
    axios
      .get("/articles")
      .then(res=>setPosts(res.data))
      .catch(error=>console.log(error));
  },[]);
 
  return (
   
    <div className="App">
   
    <Header/>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Articles posts={posts}/>} />
    <Route path="/article/:id" element={<Article  posts={posts}/>} />
    {/* <Route path="/update/:id" element={<EditArticle posts={posts}/>} /> */}
    {/* <Route path="/add-article" element={<AddArticle/>} /> */}
    </Routes>
    <Footer/>
    </div>
   
  );
}

export default App;
