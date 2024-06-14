import { toPng } from 'html-to-image';
import logoSVG from '../../layout/logo_letters_v2.svg';

const convertSVGToPNG = (svgElement, setDataPNG, dataAddress) => {
    const svgWidth = svgElement.getBoundingClientRect().width;
    console.log("convertSVGToPNG svgElement width=", svgWidth);

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
    // define png size
    const png_width = 800;
    const png_height = png_width / aspectRatioTwitter; 
    // define deed visual size
    const image_target_width = 600; 
    const image_target_height = 300; 
    // define header size
    const header_height = png_height - image_target_height; // define header space anchored to the deed graph  
    const header_width = png_width; 
    // Set canvas dimensions to the image dimensions                
    const canvasWidth = png_width;
    const canvasHeight = image_target_height + header_height;
    
    image.onload = () => {
        console.log("image.height=", image.height);
        console.log("image.width=", image.width);
        
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        
        // Fill the canvas with a white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the original deed visual onto the canvas
        const imageX = canvas.width / 2 - image_target_width / 2; 
        const imageY = header_height;        
        ctx.drawImage(image, 0, 0, image.width, image.height, // define the current png size
            imageX, imageY,                                   // define the starting png location
            image_target_width, image_target_height);         // define the target png size

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
            while (textWidth < canvasWidth * 0.52) {
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
    console.log("ConvertSVG2PNG: image width=", image.width);
};

export default convertSVGToPNG; 