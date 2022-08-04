import React, { useState } from "react";
import { withSwapiService } from "../hoc-helpers";

import { Record } from "../item-details/ItemDetailsView";
import ItemDetails from "../item-details/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

import { useParams } from "react-router-dom";

const FilmDetails = ({ swapiService }) => {

    const [ path, setPath ] = useState('films-page/');

    const { getFilm, getFilmImage } = swapiService

    const params = useParams();

    return (
        <ErrorBoundary FallbackComponent={ErrorIndicator}>
            <ItemDetails 
                selectedItem={params.id} 
                getData={getFilm}
                getImageUrl={getFilmImage}
                path={path}
            >
                <Record field="title" label="Title" />
                <Record field="director" label="Director" />
                <Record field="producer" label="Producer" />
                <Record field="opening_crawl" label="Opening Crawl" />
                <Record field="release_date" label="Release Date" />
            </ItemDetails>
        </ErrorBoundary>
    )
};

export default withSwapiService(FilmDetails);