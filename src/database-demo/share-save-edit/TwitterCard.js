import React from 'react';
import { Helmet } from 'react-helmet';

const TwitterCard = ({ dataJSON, linkPNG, shareLink }) => {
    console.log("=== Twitter Card dataJSON === ",dataJSON);
    const addressOneLine = dataJSON.property[0].address.oneLine;
    const xTitle = "Accretion Database: the best place for title search.";
    const xDescription = "Title history of " + addressOneLine; 
    

    return (
        <Helmet defer={false}>
            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={xTitle} />
            <meta name="twitter:description" content={xDescription} />
            <meta property="og:description" content={xDescription} />
            <meta name="twitter:image:src" content={linkPNG} /> 
            <meta property="og:image" content={linkPNG} /> 
            <meta property="og:url" content={shareLink} />
            <meta name="twitter:site" content="@AccretionHome" />
            <meta name="twitter:craetor" content="@AccretionHome" />
        </Helmet>
    );
};

export default TwitterCard;
