import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PostAdd from './components/pages/PostAdd';
import NavBar from './components/views/NavBar';   
import Footer from './components/views/Footer';
import { Container } from 'react-bootstrap';
import PostPage from './components/pages/PostPage';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import WrongAddress from './components/pages/WrongAddress';
import Categories from './components/pages/Categories';
import Category from './components/features/Category';


function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/post/:id" element={ <PostPage /> } />
          <Route path="/post/add" element={ <PostAdd /> } />
          <Route path="/post/edit/:id" element={ <PostEdit /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/categories" element={ <Categories /> } />
          <Route path="*" element={<WrongAddress/> } />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
