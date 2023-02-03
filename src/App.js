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
  
  return (
      <>
        <PhotosContext.Provider value={{photos, setPhotos, photosFavorites, setPhotosFavorites}}>
          <BrowserRouter>
            <section className="row g-1 mx-0 min-vh-100">
              <nav className="col-md-4 col-xl-3 col-xxl-2 bg-dark">
                <div className="position-sticky top-0 start-0">
                  <img src={wildWolf} alt="Wild Wolf" width="100%" />
                  <ul className="py-4 ps-0 m-0">
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
