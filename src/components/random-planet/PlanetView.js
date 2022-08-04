
const PlanetView = ({ randomDetails, setId, id }) => {

  const { name, population, rotation_period, diameter } = randomDetails;

  return (
    <>
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation_period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
          <li>
            <button onClick={() => setId(Math.floor(Math.random() * 11) + 1)}>
              Random
            </button>
          </li>
        </ul>
    </>
  ) 
}

export default PlanetView