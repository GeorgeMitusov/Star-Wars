import React, { useState } from "react";

import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

import { useParams } from "react-router-dom";

const VehicleDetails = ({ swapiService }) => {

    const [ path, setPath ] = useState('vehicles-page/');

    const { getVehicle, getVehicleImage } = swapiService

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getVehicle}
                getImageUrl={getVehicleImage}
                path={path}
            >
                <Record field="name" label="Name" />
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="costInCredits" label="Cost In Credits" />
                <Record field="length" label="Length" />
                <Record field="maxAtmospheringSpeed" label="Max Atmosphering Speed" />
                <Record field="crew" label="Crew" />
                <Record field="passengers" label="Passengers" />
                <Record field="cargoCapacity" label="Cargo Capacity" />
                <Record field="consumables" label="Consumables" />
                <Record field="vehicleClass" label="Vehicle Class" />
            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(VehicleDetails);