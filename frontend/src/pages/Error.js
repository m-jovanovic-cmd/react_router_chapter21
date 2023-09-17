import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occured!';
    let message = 'Something went wrong.';

    if(error.status === 500) {
        message = error.data.message;
    } else if(error.status) {
        title = 'Not found!';
        message = 'Could not find ressource or page.';
    }

    return (
        <Fragment>
            <MainNavigation />
            <PageContent 
                title={title} 
                message={message}
            />
        </Fragment>
    )
};

export default ErrorPage;