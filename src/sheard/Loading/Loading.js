import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '100px' }} class="d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;