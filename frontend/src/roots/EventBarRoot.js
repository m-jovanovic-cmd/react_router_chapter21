import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";


const EventBarRootLayout = () => {
    return (
        <Fragment>
            <header>
                <EventsNavigation />
            </header>
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
};

export default EventBarRootLayout;