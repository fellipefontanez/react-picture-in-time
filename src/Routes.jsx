import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import App from './pages/home/App';
import Header from './components/Header/Header';
import Template from './pages/Template';


export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route path='/teste' element={<p>Teste</p>} />
                    <Route index element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}