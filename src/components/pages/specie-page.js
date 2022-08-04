import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { SpeciesList } from '../sw-components';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';


const SpeciePage = ({ swapiService }) => {

    const { getSpecieImage } = swapiService

    const navigate = useNavigate();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <SpeciesList
                getItemImage={getSpecieImage} 
                onItemSelected={ itemId => navigate(`/species-page/${itemId}`) } 
            />
        </ErrorBoundary>
    )
}

export default withSwapiService(SpeciePage)