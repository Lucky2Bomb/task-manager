import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import("./home"));
const LoginPage = lazy(() => import("./login"));

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Routing; 