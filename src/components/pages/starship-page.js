import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { StarshipList } from '../sw-components';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';


const StarshipPage = ({ swapiService }) => {

    const { getStarshipImage } = swapiService

    const navigate = useNavigate();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <StarshipList 
                getItemImage={getStarshipImage} 
                onItemSelected={ itemId => navigate(`/starships-page/${itemId}`) } 
            />
        </ErrorBoundary>
    )
}

export default withSwapiService(StarshipPage)