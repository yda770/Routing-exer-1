import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {

    const data = useLoaderData();
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={data.events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {

    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // return {
        //     isError: true,
        //     message: 'Could not fetch events.'
        // };

        throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
            status: 500,

        });
    } else {
        const resData = await response.json();
        return resData.events;
        // return resData.events;
    }
}

export function loader() {
    return {
        events: loadEvents(),
      };
    // return defer({
    //     events: loadEvents()
    // });
}
