// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './Database.css';

// const wordVariants = {
//     highlight: {
//       color: 'green', // Highlight color when visible
//       opacity: 1,
//       fontSize: '20pt',
//     },
//     hidden: {
//       color: 'transparent', // Hide the word initially
//       opacity: 0,
//     },
// };


// const StatementAnimation2 = () => {
//   const [currentWord, setCurrentWord] = useState('county clerks'); // Initial word
//   const words = ['county clerk', 
//                  'real estate attorney', 
//                  'title company', 
//                  'title insurer', 
//                  'REIT', 
//                  'for sale by owner', 
//                  'seasoned retail investor',
//                  'first time home buyer',
//                 ]; // Words to cycle through

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
//       setCurrentWord(words[nextIndex]);
//     }, 500); // Change word duration 

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [currentWord, words]);

//   return (
//     <div>
//       <div id='statement-animation'>
//         <motion.span animate="highlight" variants={wordVariants}>
//             {currentWord}
//         </motion.span>
//       </div> 
      
//     </div>
//   );
// };

// export default StatementAnimation2;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Database.css';

const StatementAnimation2 = () => {
  const [currentWord, setCurrentWord] = useState('county clerks'); // Initial word
  const words = ['county clerk', 
                 'real estate attorney', 
                 'title company', 
                 'title insurer', 
                 'REIT', 
                 'for sale by owner', 
                 'seasoned retail investor',
                 'first time home buyer',
                ]; // Words to cycle through

  const containerRef = useRef(null); // Ref for the container element

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 500); // Change word duration 

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentWord, words]);

  const longestWordLength = Math.max(...words.map(word => word.length)); // Find the length of the longest word
  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0; // Get the width of the container
  const fontSize = containerWidth / longestWordLength * 1.8; // Calculate the font size based on container width and longest word length

  const wordVariants = {
    highlight: {
      color: 'green', // Highlight color when visible
      opacity: 1,
      fontSize: `${fontSize}px`, // Dynamically set the font size
    },
    hidden: {
      color: 'transparent', // Hide the word initially
      opacity: 0,
    },
  };

  return (
    <div>
      <div id='statement-animation' ref={containerRef}>
        <motion.span animate="highlight" variants={wordVariants}>
            {currentWord}
        </motion.span>
      </div> 
    </div>
  );
};

export default StatementAnimation2;
