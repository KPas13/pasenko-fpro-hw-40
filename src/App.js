import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Users from "./Components/UserList/Users";
import Albums from "./Components/Albums/Albums";
import Photos from "./Components/Photos/Photos";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Users />}/>
                <Route path="/albums/:userID" element={<Albums />} />
                <Route path="/photos/:albumID" element={<Photos />} />
            </Routes>
        </Router>
    );
};

export default App;
