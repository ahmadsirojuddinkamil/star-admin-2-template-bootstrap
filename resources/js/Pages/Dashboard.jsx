import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import App from '../Layouts/App'

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                Dashboard
            </Container>
        </>
    );
}

Dashboard.layout = page => <App children={page} />