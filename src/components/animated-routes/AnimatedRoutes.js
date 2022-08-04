import React from 'react';
import { useLocation, Routes, Route, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../header/Header';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import Main from '../main/Main';
import About from '../about/About';
import { FilmPage, PeoplePage, PlanetPage, SpeciePage, StarshipPage, VehiclePage } from '../pages';
import { FilmDetails, PersonDetails, PlanetDetails, SpecieDetails, StarshipDetails, VehicleDetails } from '../sw-components';


const AnimatedRoutes = ({ error, }) => {

  const location = useLocation();

  const params = useParams();

  return (
    <>
      { error && <Bomb/> }

      <Header/>
      {/* <RandomPlanet/> */}
      
      <ErrorBoundary FallbackComponent={ErrorIndicator}>
      
        { error && <Bomb/> }
        
        <AnimatePresence exitBeforeEnter>
          
          <Routes key={location.pathname} location={location}>
      
            <Route path="/" element={<Main/>}/>
      
            <Route path="/about" element={<About/>}/>
      
            <Route path="/people-page" element={<PeoplePage/> } />
      
            <Route path="/planets-page" element={<PlanetPage/> } />
      
            <Route path="/starships-page" element={<StarshipPage/> } />
      
            <Route path="/species-page" element={<SpeciePage/> } />
      
            <Route path="/vehicles-page" element={<VehiclePage/> } />
      
            <Route path="/films-page" element={<FilmPage /> } />
      
            <Route path="/people-page/:id" 
              element={<PersonDetails itemId={params.id} />} />
            
            <Route path="/planets-page/:id" 
              element={<PlanetDetails itemId={params.id} />} />
            
            <Route path="/starships-page/:id" 
              element={<StarshipDetails itemId={params.id} />} />
            
            <Route path="/species-page/:id" 
              element={<SpecieDetails itemId={params.id} />} />
            
            <Route path="/vehicles-page/:id" 
              element={<VehicleDetails itemId={params.id} />} />
      
            <Route path="/films-page/:id" 
              element={<FilmDetails itemId={params.id} />} />
      
          </Routes>
        
        </AnimatePresence>
      
      </ErrorBoundary>
    </>

  )
}

export default AnimatedRoutes;

function Bomb() {
  throw new Error('CABBOM');
}