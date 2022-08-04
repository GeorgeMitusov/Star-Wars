import React from "react";
import SwapiService from "../../services/SwapiService";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list/Item-List";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets, 
    getAllStarships,
    getAllSpecies,
    getAllFilms,
    getAllVehicles
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span> {name} </span>;
// const renderNameNModel = ({ name, model }) => <span> {name} ({ model }) </span>;
// const renderNameNPop = ({ name, population }) => <span> {name} ({ population }) </span>;
// const renderTitle = ({ title, director }) => <span> {title} ({ director }) </span>;

const PersonList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllPeople);

const PlanetList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllPlanets);

const StarshipList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllStarships);

const SpeciesList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllSpecies);

const VehicleList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllVehicles); 
                        
const FilmList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllFilms); 

export {
    PersonList, 
    PlanetList, 
    StarshipList,
    SpeciesList,
    VehicleList,
    FilmList
}