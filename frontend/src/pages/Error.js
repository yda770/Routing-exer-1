import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();
    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = (error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found'
        message = 'Could not find this page!';
    }
    return <>
        <MainNavigation />
        <PageContent title={title}>
            {message}
        </PageContent>
    </>
}

export default ErrorPage;