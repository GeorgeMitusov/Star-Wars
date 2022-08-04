import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { PlanetList } from '../sw-components';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const PlanetPage = ({ swapiService }) => {

    const { getPlanetImage } = swapiService
    
    const navigate = useNavigate();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <PlanetList 
                getItemImage={getPlanetImage}
                onItemSelected={ itemId => navigate(`/planets-page/${itemId}`) } 
            />
        </ErrorBoundary>
    )
}
    
export default withSwapiService(PlanetPage)