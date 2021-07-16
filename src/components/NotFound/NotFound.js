import React from 'react';
import ErrorImage from './error.jpg';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center m-5'>
            <div>
                <div className='text-center mb-3'>
                <h4>Sorry! page not found</h4>
                </div>
                <div>
                <img style={{width:'600px',height:'350px'}} src={ErrorImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;