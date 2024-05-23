import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FormText } from 'react-bootstrap';

export default function RootLayout() {
    return (
        <div>
            <Header /> 
            <main>
                < Outlet />
            </main>
            <Footer />
        </div>
    )

};