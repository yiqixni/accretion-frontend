// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './Home.css';

// const wordVariants = {
//     highlight: {
//       color: 'purple', // Highlight color when visible
//       opacity: 1,
//       fontSize: '20pt',      
//       fontWeight: 'bold', 
//     },
//     hidden: {
//       color: 'transparent', // Hide the word initially
//       opacity: 0,
//     },
//   };


// const Statement_marketplace = () => {
//   const [currentWord, setCurrentWord] = useState('fractional equity share'); // Initial word
//   const words = ['REITs', 
//                  'for sale by owner', 
//                  'tokenized equity share'
//                 ]; // Words to cycle through

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
//       setCurrentWord(words[nextIndex]);
//     }, 1500); // Change word duration 

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [currentWord, words]);

//   return (
//     <div>
//       <div className='mission-statement-animation'>
//         <motion.span animate="highlight" variants={wordVariants}>
//             {currentWord}
//         </motion.span>
//       </div> 
      
//     </div>
//   );
// };

// export default Statement_marketplace;


import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Statement_marketplace = () => {
  const [currentWord, setCurrentWord] = useState('fractional equity share'); // Initial word
  const words = ['REITs', 
                 'for sale by owner', 
                 'tokenized equity share'
                ]; // Words to cycle through

  const containerRef = useRef(null); // Ref for the container element

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 1500); // Change word duration 

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentWord, words]);

  const longestWordLength = Math.max(...words.map(word => word.length)); // Find the length of the longest word
  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0; // Get the width of the container
  const fontSize = containerWidth / longestWordLength * 1.8; // Calculate the font size based on container width and longest word length

  const wordVariants = {
    highlight: {
      color: 'purple', // Highlight color when visible
      opacity: 1,
      fontSize: `${fontSize}px`, // Dynamically set the font size
      fontWeight: 'bold', // Font weight
    },
    hidden: {
      color: 'transparent', // Hide the word initially
      opacity: 0,
    },
  };

  return (
    <div>
      <div className='mission-statement-animation' ref={containerRef}>
        <motion.span animate="highlight" variants={wordVariants}>
            {currentWord}
        </motion.span>
      </div> 
    </div>
  );
};

export default Statement_marketplace;
