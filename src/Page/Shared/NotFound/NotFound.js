import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='App my-md-5 py-sm-5'>
            <h4>Error!! Sorry Page Not Found</h4>
            <h1>404</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;