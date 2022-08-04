import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { FilmList } from '../sw-components';

const FilmPage = ({ swapiService }) => {

    const { getFilmImage } = swapiService

    const navigate = useNavigate();

    return (
        <FilmList 
            getItemImage={getFilmImage} 
            onItemSelected={ itemId => navigate(`/films-page/${itemId}`) } 
        />
    )
}

export default withSwapiService(FilmPage);