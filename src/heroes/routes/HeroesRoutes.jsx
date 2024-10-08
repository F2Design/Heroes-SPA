import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPages } from "../pages"


export const HeroesRotes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} ></Route>
                    <Route path="dc" element={<DcPage />} ></Route>
                    <Route path="search" element={<SearchPages />} ></Route>
                    <Route path="hero/:id" element={<HeroPage />} ></Route>

                    {/* Rota comodin si no tenemos */}
                    <Route path="/" element={<Navigate to='/marvel' />} ></Route>
                </Routes>
            </div>
        
        </>
    )
}
