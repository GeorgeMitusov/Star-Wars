import React from 'react';

import { withSwapiService } from "../hoc-helpers";

import { useNavigate } from 'react-router-dom';

import { PersonList } from '../sw-components';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const PeoplePage = ({ swapiService }) => {

    const { getPersonImage } = swapiService

    const navigate = useNavigate();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <PersonList
                getItemImage={getPersonImage} 
                onItemSelected={ itemId => navigate(`/people-page/${itemId}`) } 
            />
        </ErrorBoundary>
    )
}

export default withSwapiService(PeoplePage)