import PhotosContext from './contexts/Photos.conext';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './views/Home';
import Favorites from './views/Favorites';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import wildWolf from './assets/img/wild-wolf.png';

function App() {

  const [photos, setPhotos] = useState([]);
  const [photosFavorites, setPhotosFavorites] = useState([]);
  const [init, setInit] = useState(false);
  const shareState = {
    photos, 
    setPhotos, 
    photosFavorites, 
    setPhotosFavorites, 
    init, 
    setInit
  }
  
  return (
      <>
        <PhotosContext.Provider value={shareState}>
          <BrowserRouter>
            <section className="row g-1 mx-0 min-vh-100">
              <nav className="col-md-4 col-xl-3 col-xxl-2 bg-dark position-sticky top-0 start-0">
                <div className="position-sticky top-0 start-0 d-flex flex-column align-items-center">
                  <img src={wildWolf} alt="Wild Wolf" className="float-start mt-md-4 logo" />
                  <ul className="pt-3 ps-0 m-0 w-100">
                    <li>
                      <NavLink to="/" className="btn btn-dark border-0 w-100 text-start rounded-0 py-3">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favorites" className="btn btn-dark border-0 w-100 text-start rounded-0 py-3">
                        Favoritos
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
              <main className="col-md-8 col-xl-9 col-xxl-10">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/favorites' element={<Favorites />} />
                </Routes>
              </main>
            </section>
          </BrowserRouter>
        </PhotosContext.Provider>
      </>    
  );
}

export default App;
