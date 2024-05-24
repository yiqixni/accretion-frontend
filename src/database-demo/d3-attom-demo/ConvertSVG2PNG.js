import { toPng } from 'html-to-image';


const convertSVGToPNG = (svgElement, callback) => {
    // Use html-to-image to convert the SVG element to a PNG
    toPng(svgElement)
        .then(function (pngDataUrl) {
            callback(pngDataUrl); // Set the PNG data URL in the state
        })
        .catch(function (error) {
            console.error('Error converting SVG to PNG:', error);
        });
};

export default convertSVGToPNG; 