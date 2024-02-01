
// CircularProgressBar.js
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ skill, percent }) => {
  return (
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={{
          path: { stroke: '#007bff' }, // Adjust the color as needed
          text: { fill: '#007bff' }, // Adjust the color as needed
        }}
      />
      <p className="skill-label">{skill}</p>
    </div>
  );
};

export default CircularProgressBar;

// CircularProgressBar.js
// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const CircularProgressBar = ({ skill, percent }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     // Animate the progress bar when the component mounts or when percent changes
//     controls.start({ strokeDashoffset: 440 - (percent * 440) / 100 });
//   }, [controls, percent]);

//   return (
//     <div className="circular-progress-bar">
//       <svg width="100" height="100">
//         {/* Wrap the circle element with motion.circle */}
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="40"
//           strokeWidth="10"
//           stroke="#3498db"
//           fill="transparent"
//           strokeDasharray="440"
//           initial={{ strokeDashoffset: 440 }}
//           animate={controls}
//         />
//       </svg>
//       <p>{skill}</p>
//     </div>
//   );
// };

// export default CircularProgressBar;
