export default function DatabaseVisualization({ data }) {
    // Sort the data by date in ascending order
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
    return (
        <div className="visualization-container">
            {data.map((item, index) => (
                <div key={index} className="visualization-block">
                    {/* Render your block content here */}
                    <p>Date: {item.date}</p>
                    {/* <p>Street Name: {item.street_name}</p> */}
                    {/* <p>Town: {item.town}</p> */}
                    <p>Type: {item.type}</p>
                    {/* <p>Book Page: {item.book_page}</p> */}
                </div>
            ))}
        </div>
    );
};
  