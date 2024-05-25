import React from 'react';
import { Helmet } from 'react-helmet';

const TwitterCard = ({ propertyData }) => {
    console.log("=== Twitter Card propertyData === ",propertyData);

    return (
        <Helmet>
            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="testing title" />
            <meta name="twitter:description" content="testing description" />
            <meta name="twitter:image" content={propertyData.imageLink} />            
        </Helmet>
    );
};

export default TwitterCard;