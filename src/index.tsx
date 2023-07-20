import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './client/pages/landingPage/LandingPage';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
        </>
    );
}

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);