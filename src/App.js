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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </PhotosContext.Provider>
      </>    
  );
}

export default App;
