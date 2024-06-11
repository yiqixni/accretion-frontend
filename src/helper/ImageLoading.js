import React, { useState } from 'react';
import Loading from '../database-demo/loading-error-handling/Loading';

function ImageLoading({ imageUrl, altText }) {
    const [loading, setLoading] = useState(true);    

    // Handler for image load
    const handleImageLoad = () => {
        setLoading(false);
    };

    // Handler for image error
    const handleImageError = () => {
        setLoading(false);
        // Optionally, handle image error state
    };

    return (
        <div >
            {loading && (
                <Loading />
            )}
            <img
                src={imageUrl}
                alt={altText}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: loading ? 'none' : 'block', width: '100%', height: 'auto' }}
            />
        </div>
    );
}

export default ImageLoading;
