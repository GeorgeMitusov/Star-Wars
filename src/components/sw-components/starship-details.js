import React, { useState } from "react";

import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

import { useParams } from "react-router-dom";

const StarshipDetails = ({ swapiService }) => {

    const [ path, setPath ] = useState('starships-page/');

    const { getStarship, getStarshipImage } = swapiService

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getStarship}
                getImageUrl={getStarshipImage}
                path={path}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="costInCredits" label="Cost In Credits" />
                <Record field="crew" label="Crew" />
                <Record field="passengers" label="Passengers" />
                <Record field="cargoCapacity" label="Cargo Capacity" />
                <Record field="maxAtmospheringSpeed" label="Max Atmosphering Speed" />
                <Record field="consumables" label="Consumables" />
                <Record field="hyperdriveRating" label="Hyperdrive Rating" />
                <Record field="MGLT" label="MGLT" />
                <Record field="starshipClass" label="Starship Class" />

            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(StarshipDetails);