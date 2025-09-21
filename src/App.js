
import Header from './Header';
import Footer from "./Footer"
import Hero from './home/Hero';
import { BrowserRouter, Route, Router ,Routes} from 'react-router';
import Menu from './menu/Menu';
import About from './about/About';
import BookTable from './BookTable';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}  ></Route>
          <Route path='/menu' element={ <Menu/>  } ></Route>
          <Route path='/about' element={ <About/>  } ></Route>
          <Route path='/book-table' element={ <BookTable/>  } ></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
