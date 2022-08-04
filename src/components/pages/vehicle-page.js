import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { VehicleList } from '../sw-components';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const VehiclePage = ({ swapiService }) => {

    const { getVehicleImage } = swapiService

    const navigate = useNavigate();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <VehicleList 
                getItemImage={getVehicleImage} 
                onItemSelected={ itemId => navigate(`/vehicles-page/${itemId}`) } 
            />
        </ErrorBoundary>
    )
}

export default withSwapiService(VehiclePage)