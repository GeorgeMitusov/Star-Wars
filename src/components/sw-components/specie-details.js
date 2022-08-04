import React, { useState } from "react";

import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

import { useParams } from "react-router-dom";

const SpecieDetails = ({ swapiService }) => {

    const [ path, setPath ] = useState('species-page/');

    const { getSpecie, getSpecieImage } = swapiService

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getSpecie}
                getImageUrl={getSpecieImage}
                path={path}
            >
                <Record field="name" label="Name" />
                <Record field="classification" label="Classification" />
                <Record field="designation" label="Designation" />
                <Record field="averageHeight" label="Average Height" />
                <Record field="skinColors" label="Skin Color" />
                <Record field="hairColors" label="Hair Color" />
                <Record field="eyeColors" label="Eye Color" />
                <Record field="averageLifespan" label="Average Lifespan" />
                <Record field="language" label="Language" />
                <Record field="homeworld" label="Homeworld" />
            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(SpecieDetails);