import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import PostPage from './components/pages/PostPage';
import About from './components/pages/About';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/post/:id" element={ <PostPage /> } />
        <Route path="/post/add" element={ <PostAdd /> } />
        <Route path="/post/edit/:id" element={ <PostEdit /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
