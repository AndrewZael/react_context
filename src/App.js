import PhotosContext from './contexts/Photos.conext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Favorites from './views/Favorites';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

function App() {

  const [photos, setPhotos] = useState([]);
  const [photosFavorites, setPhotosFavorites] = useState([]);
  
  return (
      <>
        <PhotosContext.Provider value={{photos, setPhotos, photosFavorites, setPhotosFavorites}}>
          <BrowserRouter>
            <section className="row g-1 mx-0">
              <nav className="col-md-4 col-xl-3 col-xxl-2 bg-black">

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
