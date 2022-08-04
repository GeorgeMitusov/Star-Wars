import { Component } from 'react';

export default class SwapiService extends Component {
    
    _apiBase = `https://swapi.dev/api`;
    _ImageBase = `https://starwars-visualguide.com/assets/img`;

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
          throw new Error(`couldn't fetch ${url}` + `${res.status}`)
        }
    
        const data = await res.json();
        return data
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res;
    }

    getPerson = async id => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res;
    }

    getPlanet = async id => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res;
    }

    getStarship = async id => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship);
    }

    getAllSpecies = async () => {
        const res = await this.getResource(`/species/`);
        return res;
    }

    getSpecie = async id => {
        const specie = await this.getResource(`/species/${id}`)
        return this._transformSpecie(specie)
    }

    getAllVehicles = async () => {
        const res = await this.getResource(`/vehicles/`);
        return res;
    }

    getVehicle = async id => {
        const vehicle = await this.getResource(`/vehicles/${id}`)
        return this._transformVehicle(vehicle)
    }

    getAllFilms = async () => {
        const res = await this.getResource(`/films/`);
        return res;
    }

    getFilm = async id => {
        const film = await this.getResource(`/films/${id}`)
        return this._transformFilm(film)
    }

    getPersonImage = id => {
        return `${this._ImageBase}/characters/${id}.jpg`
    }

    getStarshipImage = id => {
        return `${this._ImageBase}/starships/${id}.jpg`
    }

    getPlanetImage = id => {
        return `${this._ImageBase}/planets/${id}.jpg`
    }

    getSpecieImage = id => {
        return `${this._ImageBase}/species/${id}.jpg`
    }

    getVehicleImage = id => {
        return `${this._ImageBase}/vehicles/${id}.jpg`
    }

    getFilmImage = id => {
        return `${this._ImageBase}/films/${id}.jpg`
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet), 
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            orbitalPeriod: planet.orbital_period,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water
        }
    }

    _transformStarship(starship) {
        return {
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity,
          maxAtmospheringSpeed: starship.max_atmosphering_speed,
          consumables: starship.consumables,
          hyperdriveRating: starship.hyperdrive_rating,
          MGLT: starship.MGLT,
          starshipClass: starship.starship_class,
        }
    }
    
    _transformPerson(person) {
        return {
          id: this._extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          eyeColor: person.eye_color,
          height: person.height,
          mass: person.mass,
          hairColor: person.hair_color,
          skinColor: person.skin_color,
          homeworld: person.homeworld,
        }
    }

    _transformSpecie(specie) {
        return {
          id: this._extractId(specie),
          name: specie.name,
          classification: specie.classification,
          designation: specie.designation,
          averageHeight: specie.average_height,
          skinColors: specie.skin_colors,
          hairColors: specie.hair_colors,
          eyeColors: specie.eye_colors,
          averageLifespan: specie.average_lifespan,
          homeworld: specie.homeworld,
          language: specie.language
        }
    }

    _transformVehicle(vehicle) {
        return {
          id: this._extractId(vehicle),
          name: vehicle.name,
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
          costInCredits: vehicle.cost_in_credits,
          length: vehicle.length,
          maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
          crew: vehicle.crew,
          passengers: vehicle.passengers,
          cargoCapacity: vehicle.cargo_capacity,
          consumables: vehicle.consumables,
          vehicleClass: vehicle.vehicle_class
        }
    }

    _transformFilm(film) {
        return {
          id: this._extractId(film),
          episodeId: film.episode_id, 
          title: film.name,
          opening_crawl: film.opening_crawl,
          director: film.director,
          producer: film.producer,
          release_date: film.release_date,
        }
    }
}