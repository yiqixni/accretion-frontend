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
    const aspectRatioTwitter = 1.91;
    const png_width = 800;

    image.onload = () => {
        // Set canvas dimensions to the image dimensions
        const header_height = png_width / aspectRatioTwitter - image.height; // define header space anchored to the deed graph  
        const header_width = png_width; 
        const canvasWidth = png_width;
        const canvasHeight = image.height + header_height;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        
        // Fill the canvas with a white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the original deed visual onto the canvas
        const imageX = canvas.width / 2 - image.width / 2; 
        const imageY = header_height;
        ctx.drawImage(image, imageX, imageY);

        // Draw the logo on top of the image
        const logo = new Image();
        logo.src = logoSVG; 

        logo.onload = () => {            
            const logoAspectRatio = 4; 
            const logoWidth = header_width * 0.38; // Width of the logo
            const logoHeight = logoWidth / logoAspectRatio; // Height of the logo
            const logoX = header_width / 2 - logoWidth / 2; // X position of the logo
            const logoY = 10; // Y position of the logo

            // Draw the logo onto the canvas
            ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
            
            // Adjust font size to fit the text within 80% of canvas width
            const addressText = dataAddress;
            
            let fontSize = 10; // Initial font size
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = 'black';
            let textWidth = ctx.measureText(addressText).width;
            while (textWidth < canvasWidth * 0.6) {
                fontSize += 1;
                ctx.font = `${fontSize}px Arial`;
                textWidth = ctx.measureText(addressText).width;
            }

            // Draw the adjusted text
            ctx.fillText(addressText, canvasWidth / 2 - textWidth / 2, logoY + logoHeight * 1.25);

            // Convert the canvas to a data URL
            const enhancedDataUrl = canvas.toDataURL('image/png');
            setDataPNG(enhancedDataUrl);

        };
    };

    image.src = dataUrl;
};

export default convertSVGToPNG; 