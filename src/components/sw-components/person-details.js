import React, { useState } from "react";

import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import { useParams } from "react-router-dom";

const PersonDetails = ({ swapiService }) => {

    const [ path, setPath ] = useState('people-page/');

    const {getPerson, getPersonImage} = swapiService

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getPerson}
                getImageUrl={getPersonImage}
                path={path}
            >
                <Record field="name" label="Name" />
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="height" label="Height" />
                <Record field="mass" label="Mass" />
                <Record field="hairColor" label="Hair Color" />
                <Record field="skinColor" label="Skin Color" />
                <Record field="homeworld" label="Homeworld" />
            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(PersonDetails); 