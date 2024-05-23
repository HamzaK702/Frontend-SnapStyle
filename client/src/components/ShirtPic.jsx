import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Box } from '@mui/material';

function ShirtPic() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current, // reference to the container
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: process.env.PUBLIC_URL + '/assets/QuestionMarkShirt.json' // animation file path
        });

        return () => animation.destroy(); // cleanup for unmounting
    }, []);

    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <div ref={animationContainer} style={{ width: 300, height: 300 }}></div>
        </Box>
    );
}

export default ShirtPic;



// import React, { useEffect, useState } from 'react';
// import { Lottie } from 'lottie-react';
// import { Box } from '@mui/material';

// function ShirtPic() {
//     const [animationData, setAnimationData] = useState(null);

//     useEffect(() => {
//         fetch(process.env.PUBLIC_URL + '/assets/QuestionMarkShirt.json')
//             .then(response => response.json())
//             .then(data => setAnimationData(data))
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
//             {animationData && <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />}
//         </Box>
//     );
// }

// export default ShirtPic;


// import React from 'react';
// import { Lottie } from 'lottie-react';
// import { Box } from '@mui/material';

// function ShirtPic() {
//     const animationPath = process.env.PUBLIC_URL + '/assets/QuestionMarkShirt.json'; // Correct path to access public folder assets

//     return (
//         <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
//             <Lottie path={animationPath} style={{ width: 300, height: 300 }} />
//         </Box>
//     );
// }

// export default ShirtPic;



// import React from 'react';
// import { Lottie } from 'lottie-react';
// import { Box } from '@mui/material';
// import animationData from '../public/assets/QuestionMarkShirt.json'; // Adjust this path as needed

// function ShirtPic() {
//     return (
//         <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
//             <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
//         </Box>
//     );
// }

// export default ShirtPic;
