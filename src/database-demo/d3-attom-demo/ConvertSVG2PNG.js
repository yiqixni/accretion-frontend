import { toPng } from 'html-to-image';
import logoSVG from '../../layout/logo_letters_v2.svg';

const convertSVGToPNG = (svgElement, setDataPNG, dataAddress) => {
    // Use html-to-image to convert the SVG element to a PNG
    if (!svgElement) {
        console.error('SVG element is not defined');
        return;
    }
    toPng(svgElement)
        .then(function (pngDataUrl) {
            // setDataPNG(pngDataUrl); // Set the PNG data URL in the state
            addLogoAndTextToImage(pngDataUrl, setDataPNG, dataAddress);
        })
        .catch(function (error) {
            console.error('Error converting SVG to PNG:', error);
        });
};

const addLogoAndTextToImage = (dataUrl, setDataPNG, dataAddress) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();    

    image.onload = () => {
        // Set canvas dimensions to the image dimensions
        const header_height = image.height * 0.5; // define header space anchored to the deed graph  
        const header_width = image.width; 
        canvas.width = image.width;
        canvas.height = image.height + header_height;

        // Draw the original image onto the canvas
        ctx.drawImage(image, 0, header_height);

        // Draw the logo on top of the image
        const logo = new Image();
        logo.src = logoSVG; 

        logo.onload = () => {            
            const logoAspectRatio = 4; 
            const logoWidth = header_width * 0.6; // Width of the logo
            const logoHeight = logoWidth / logoAspectRatio; // Height of the logo
            const logoX = header_width / 2 - logoWidth / 2; // X position of the logo
            const logoY = 10; // Y position of the logo

            // Draw the logo onto the canvas
            ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

            // Add address text below the logo            
            ctx.font = '20px Arial';
            ctx.fillStyle = 'black';
            const addressText = dataAddress;
            const textWidth = ctx.measureText(addressText).width;                   
            ctx.fillText(addressText, header_width / 2 - textWidth / 2, header_height*0.8);

            // Convert the canvas to a data URL
            const enhancedDataUrl = canvas.toDataURL('image/png');
            setDataPNG(enhancedDataUrl);

        };
    };

    image.src = dataUrl;
};


export default convertSVGToPNG; 