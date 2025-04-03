import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'First Event',
        description: 'This is the first event',
        date: '2023-10-01',
        location: 'New York',
    },
    {
        id: 'e2',
        title: 'Second Event',
        description: 'This is the second event',
        date: '2023-10-02',
        location: 'Los Angeles',
    },
];


function EventsPage() {
    return (
        <>
            <h1>Events</h1>
            <ul>{
                DUMMY_EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))
            }</ul>
        </>

    )
}

export default EventsPage;