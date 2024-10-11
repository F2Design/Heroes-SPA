import { Route, Routes } from 'react-router-dom';

import { HeroesRotes } from "../heroes";
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} ></Route>


                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRotes />
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={<HeroesRotes />} ></Route> */}
            </Routes>
        </>
    )
}
