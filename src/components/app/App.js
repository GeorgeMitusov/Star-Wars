import * as React from 'react';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Html, Stars } from '@react-three/drei'

import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapi-service-context/';

import AnimatedRoutes from '../animated-routes';
import BigLoader from '../big-loader';

import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './App.scss'; 

const App = () => {
  
  const swapiService = new SwapiService();

  const [ error, setError ] = useState(false);
  const [ done, setDone ] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000);
  }, [])

  const Light = () => { 
    return (
        <>
            <directionalLight position={[ 0, 100, 0 ]} intensity={5} />
            <directionalLight position={[ 0, -100, 0 ]} intensity={1} />
            <directionalLight position={[ -100, 0, 0 ]} intensity={1} />
            <directionalLight position={[ 100, 0, 0 ]} intensity={.5} />
            <directionalLight position={[ 0, 0, 100 ]} intensity={.3} />
        </>
    )
  }

  const HTMLContent = () => {
    return (
      <Html fullscreen>
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
          <div className='wrap'>

            <SwapiServiceProvider value={swapiService}>
              
              <Router>
                <AnimatedRoutes error={error} />
              </Router>

            </SwapiServiceProvider>
            
          </div>
        </ErrorBoundary>
      </Html>
    )
  }

  const Content = () => (
     <Canvas camera={{ position: [ 0, 0, 150 ], fov: 70 }}>
        <Stars 
          position={[0, 0, -800]}
          radius={100} 
          depth={100} 
          count={10000} 
          factor={5} 
          saturation={10} 
          fade 
          speed={1.5}
        />
        <Light/>
        <HTMLContent/>
      </Canvas> 
  )
  
  const loader = !done ? <BigLoader/> : <Content/>

  return (
    <div className='app'>
      { loader }
    </div>
  )
}

export default App;



































{/* ____________________________________________________________ */}

// { error && <Bomb/> }

// <Header/>
// {/* <RandomPlanet/> */}

// <ErrorBoundary FallbackComponent={ErrorIndicator}>

//   { error && <Bomb/> }
  
//   <AnimatePresence exitBeforeEnter>
    
//     <Routes>

//       <Route path="/" element={<Main/>}/>

//       <Route path="/about" element={<About/>}/>

//       <Route path="/people-page" element={<PeoplePage/> } />

//       <Route path="/planets-page" element={<PlanetPage/> } />

//       <Route path="/starships-page" element={<StarshipPage/> } />

//       <Route path="/species-page" element={<SpeciePage/> } />

//       <Route path="/vehicles-page" element={<VehiclePage/> } />

//       <Route path="/films-page" element={<FilmPage /> } />

//       <Route path="/people-page/:id" 
//         element={<PersonDetails itemId={params.id} />} />
      
//       <Route path="/planets-page/:id" 
//         element={<PlanetDetails itemId={params.id} />} />
      
//       <Route path="/starships-page/:id" 
//         element={<StarshipDetails itemId={params.id} />} />
      
//       <Route path="/species-page/:id" 
//         element={<SpecieDetails itemId={params.id} />} />
      
//       <Route path="/vehicles-page/:id" 
//         element={<VehicleDetails itemId={params.id} />} />

//       <Route path="/films-page/:id" 
//         element={<FilmDetails itemId={params.id} />} />

//     </Routes>
  
//   </AnimatePresence>

// </ErrorBoundary>

{/* ____________________________________________________________ */}



















// const App = () => {
  
//   const swapiService = new SwapiService();

//   const [ error, setError ] = useState(false);

//   const params = useParams();

//   return (
//     <div className='app'>

//       {/* <button onClick={() => setError(e => !e)}> toggle explode </button>  */}

//       <Canvas>
//         <Stars radius={50} depth={100} count={5000} factor={4} saturation={0} fade speed={1} />
//       </Canvas>
//       <ErrorBoundary FallbackComponent={ErrorIndicator}>
        
//         <SwapiServiceProvider value={swapiService}>
//           <Router>

//             { error && <Bomb/> }

//             <Header/>

//             {/* <RandomPlanet/> */}
            
//             <ErrorBoundary FallbackComponent={ErrorIndicator}>
//               { error && <Bomb/> }
//               <Routes>

//                 <Route path="/" element={<> <h1> Welcome to STARDB </h1> </>}/>

//                 <Route path="/people-page" element={<PeoplePage/> } />

//                 <Route path="/planets-page" element={<PlanetPage/> } />

//                 <Route path="/starships-page" element={<StarshipPage/> } />

//                 <Route path="/species-page" element={<SpeciePage/> } />

//                 <Route path="/vehicles-page" element={<VehiclePage/> } />

//                 <Route path="/films-page" element={<FilmPage /> } />

//                 <Route path="/people-page/:id" 
//                   element={<PersonDetails itemId={params.id} />} />
                
//                 <Route path="/planets-page/:id" 
//                   element={<PlanetDetails itemId={params.id} />} />
                
//                 <Route path="/starships-page/:id" 
//                   element={<StarshipDetails itemId={params.id} />} />
                
//                 <Route path="/species-page/:id" 
//                   element={<SpecieDetails itemId={params.id} />} />
                
//                 <Route path="/vehicles-page/:id" 
//                   element={<VehicleDetails itemId={params.id} />} />

//                 <Route path="/films-page/:id" 
//                   element={<FilmDetails itemId={params.id} />} />

//               </Routes>
//             </ErrorBoundary>
       
//           </Router>
//         </SwapiServiceProvider>

//       </ErrorBoundary>
//     </div>
//   )
// }

// export default App;

  // const { getPerson, getStarship, getPlanet, 
  //   getPersonImage, getStarshipImage, getPlanetImage,
  //   getAllPeople, getAllPlanets, getAllStarships   } = swapiService;

          {/* <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />
          
          <StarshipDetails itemId={3} />

          <PersonList>
            { ({ name }) => <span> { name } </span>}
          </PersonList>

          <PlanetList>
            { ({ name, population }) => <span> { name } & { population } </span>}
          </PlanetList>
          
          <StarshipList>
            { ({ name, manufacturer }) => <span> { name } & { manufacturer } </span>}
          </StarshipList> */}

  // const itemList = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemList 
  //       renderItem={i => `${i.name} (${i.birth_year})`}
  //       onPersonSelected={onPersonSelected} getData={swapiService.getAllPeople} 
  //     />
  //   </ErrorBoundary>
  // )

  // const peopleList = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemList 
  //       renderItem={i => `${i.name} (${i.birth_year})`}
  //       onPersonSelected={onPersonSelected} getData={getAllPeople} 
  //     />
  //   </ErrorBoundary>
  // )

  // const planetsList = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemList 
  //       renderItem={i => `${i.name} (${i.population})`}
  //       onPlanetSelected={onPlanetSelected} getData={getAllPlanets} 
  //     />
  //   </ErrorBoundary>
  // )
  
  // const starshipsList = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemList 
  //       renderItem={i => `${i.model} (${i.manufacturer})`}
  //       onStarshipSelected={onStarshipSelected} getData={getAllStarships} 
  //     />
  //   </ErrorBoundary>
  // )

  // const starshipDetails = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemDetails 
  //       selectedItem={15} 
  //       getData={getStarship}
  //       getImageUrl={getStarshipImage}
  //     >
  //       <Record field="model" label="Model" />
  //       <Record field="length" label="Length" />
  //       <Record field="costInCredits" label="Cost" />
  //     </ItemDetails>
  //   </ErrorBoundary>
  // )

  // const personDetails = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemDetails 
  //       selectedItem={11} 
  //       getData={getPerson}
  //       getImageUrl={getPersonImage}
  //     >
  //       <Record field="gender" label="Gender" />
  //       <Record field="eyeColor" label="Eye Color" />
  //     </ItemDetails>
  //   </ErrorBoundary>
  // )

  // const planetDetails = (
  //   <ErrorBoundary FallbackComponent={ErrorIndicator}>
  //     <ItemDetails 
  //       selectedItem={11} 
  //       getData={getPlanet}
  //       getImageUrl={getPlanetImage}
  //     >
  //       <Record field="name" label="Name" />
  //       <Record field="population" label="Population" />
  //     </ItemDetails>
  //   </ErrorBoundary>
  // )

  // const persDetails = (
  //   <PersonDetails itemId={11} />
  // )

  // const planDetails = (
  //   <PlanetDetails itemId={13} />
  // )

  // const starDetails = (
  //   <StarshipDetails itemId={13} />
  // )

  // const persList = (
  //   <PersonList/>
  //   // <PersonList>
  //   //   { ({ name }) => <span> { name } </span>}
  //   // </PersonList>
  // )
  
  // const planList = (
  //   <PlanetList/>
  //   // <PlanetList>
  //   //   { ({ name, population }) => <span> { name } & { population } </span>}
  //   // </PlanetList>
  // )

  // const starList = (
  //   <StarshipList/>
  //   // <StarshipList>
  //   //   { ({ name, manufacturer }) => <span> { name } & { manufacturer } </span>}
  //   // </StarshipList> 
  // )

{/* <Row left={peopleList} right={personDetails} />
          <Row left={starshipsList} right={starshipDetails} />
          <Row left={planetsList} right={planetDetails} /> */}

 {/* <ItemPage 
          onPersonSelected={onPersonSelected} 
          selectedPerson={selectedPerson} 
          getData={swapiService.getAllPeople}
          renderItem={i => `${i.name} (${i.birth_year})`}
        /> */}

  // const personRender = i => {
  //   return ( <div>
  //       <h1> NAME: {i.name}</h1>
  //       <p> GENDER: {i.gender} </p>
  //       <p> BIRTHD: {i.birthYear} </p>
  //     </div>
  //   )
  // }

// IT WERE IN THE BODY
// ___________________
{/* <PeoplePage 
            onPersonSelected={onPersonSelected} 
            selectedPerson={selectedPerson} 
            getData={swapiService.getAllPeople}
            renderItem={i => `${i.name} (${i.birth_year})`}
            // personRender={ i => personRender(i)}
          /> */}
        {/* <PeoplePage 
          onPersonSelected={onPersonSelected} 
          selectedPerson={selectedPerson} 
          getData={swapiService.getAllPeople}
          renderItem={({ name, gender, birthDay}) => `${name} (${gender}, ${birthDay})`}
        /> */}

        {/* <div className='people-page'>
          <div className="item-list-wrap">
            <ItemList 
              onPlanetSelected={onPlanetSelected} 
              getData={swapiService.getAllPlanets}
              renderItem={({ name, population }) => `${name} ${population}`} 
            />
          </div>
          <div className="person-details-wrap">
            <PersonDetails selectedPlanet={selectedPlanet}  />
          </div>
        </div> */}

        {/* <div className='people-page'>
          <div className="item-list-wrap">
            <ItemList 
              onStarshipSelected={onStarshipSelected} 
              getData={swapiService.getAllStarships}
              renderItem={({ name, model, length }) => `${name} ${model} ${length}`} 
            />
          </div>
          <div className="person-details-wrap">
            <PersonDetails selectedStarship={selectedStarship}  />
          </div>
        </div> */}

