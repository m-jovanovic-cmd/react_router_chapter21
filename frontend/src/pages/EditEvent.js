import { Fragment } from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');

    return (
        <Fragment>
            <EventForm method='patch' event={data.event} />
        </Fragment>
    )
};

export default EditEventPage;