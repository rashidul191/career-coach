import React from 'react';
import { Spinner } from 'react-bootstrap';


const Loading = () => {
    return (
        <div className='container text-center my-5 py-5'>
             <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;