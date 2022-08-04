import React, { useState } from "react";

import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import { useParams } from "react-router-dom";

const PlanetDetails = ({ swapiService }) => {
    
    const [ path, setPath ] = useState('planets-page/');

    const { getPlanet, getPlanetImage } = swapiService;

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getPlanet}
                getImageUrl={getPlanetImage}
                path={path}
            >
                <Record field="name" label="Name" />
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation Period" />
                <Record field="orbitalPeriod" label="Orbital Period" />
                <Record field="diameter" label="Diameter" />
                <Record field="climate" label="Climate" />
                <Record field="gravity" label="Gravity" />
                <Record field="terrain" label="Terrain" />
                <Record field="surfaceWater" label="Surface Water" />
            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(PlanetDetails);