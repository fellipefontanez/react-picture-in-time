import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import App from './pages/home/App';
import Login from './pages/login/LoginForm';
import Template from './pages/Template';


export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route path='/teste' element={<p>Teste</p>} />
                    <Route index element={<Login />} />
                    <Route path='/feed' element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}