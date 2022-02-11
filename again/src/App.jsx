import React, {useEffect,useState} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Exp from './components/experience/Exp';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Pagination from './components/portfolio/Pagination';
import './index.css';
import Services from './components/services/Services';
import axios from 'axios';
import Loading from './components/loading/Loading';


function App() {

  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  })

  const [testState, setTestState] = useState({
    loading: true,
    posts: null,
  })

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.all([
        axios.get(`http://127.0.0.1:8000/core/projects/`),
        axios.get(`http://127.0.0.1:8000/core/feedback/`),
      ])
      setAppState({loading:false, posts:response[0].data})
      setTestState({loading:false, posts:response[1].data})

    }
    loadPost()
  },[]);

  return (
    <>
      {testState.loading? 
        <> 
          <Loading /> 
        </>
        :
        <>
          <Header />
          <Nav />
          <About />
          <Exp />
          <Services />
          <Pagination projects={appState.posts}/>
          <Testimonials testimonials = {testState.posts}/>
          <Contact />
          <Footer />
        </>
      }
    </>
  )
}

export default App
