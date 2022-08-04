import React, { useState, useEffect } from 'react'
import SwapiService from '../../services/SwapiService';

import Loader from '../loader/Index';
import PlanetView from './PlanetView';
import ErrorIndicator from '../error-indicator/Index';

import './RandomPlanet.scss';

const RandomPlanet = () => {

  const swapiService = new SwapiService();

  const randomDigit = Math.floor(Math.random() * 25) + 3; 

  const [ randomDetails, setRandomDetails ] = useState({});
  const [ id, setId ] = useState(randomDigit);
  const [ loading, setLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      
      const getRandomPlanetDetails = async () => {
  
        setHasError(false);
  
        try {
          const res = await swapiService.getPlanet(id);
          
          onFetchFinish(res)
  
        } catch ( error ) {
          onError(error)
        }
      }
      
      setId(Math.floor(Math.random() * 11) + 1);
      getRandomPlanetDetails();

    }, 3000);
    return () => clearInterval(interval);

  }, [id])

  const onFetchFinish = res => {
    setRandomDetails(res);
    setLoading(false);
  }

  const onError = err => {
    console.error(err);
    setHasError(true)
    setLoading(false)
  }

  const hasData = !loading && !hasError;
  const spinner = loading && <Loader/>;
  const content = hasData && <PlanetView 
                                randomDetails={randomDetails} 
                                setId={setId} id={id} />;
  const error = hasError && <ErrorIndicator/>                            

  return (
    <div className="random-planet jumbotron rounded">
      { error }
      { spinner }
      { content }
    </div>
  )
}

export default RandomPlanet

