import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './client/pages/landingPage/LandingPage';
import HomePage from './client/pages/homePage/HomePage';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
        </>
    );
}

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);