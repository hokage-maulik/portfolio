// import React from 'react'
// import Particles from "react-tsparticles";


// export default function Particle() {
//   return (
//     <div>
//       <Particles
//         params={{
//           "particles": {
//             "number": {
//               "value": 160,
//               "density": {
//                 "enable": false
//               }
//             },
//             "size": {
//               "value": 3,
//               "random": true,
//               "anim": {
//                 "speed": 4,
//                 "size_min": 0.3
//               }
//             },
//             "line_linked": {
//               "enable": false
//             },
//             "move": {
//               "random": true,
//               "speed": 1,
//               "direction": "top",
//               "out_mode": "out"
//             }
//           },
//           "interactivity": {
//             "events": {
//               "onhover": {
//                 "enable": true,
//                 "mode": "bubble"
//               },
//               "onclick": {
//                 "enable": true,
//                 "mode": "repulse"
//               }
//             },
//             "modes": {
//               "bubble": {
//                 "distance": 250,
//                 "duration": 2,
//                 "size": 0,
//                 "opacity": 0
//               },
//               "repulse": {
//                 "distance": 400,
//                 "duration": 4
//               }
//             }
//           }
//         }} />
//     </div>
//   )
// }

import React from 'react';
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";


export default function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main); // Load tsparticles engine with full options
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
}


// const res = await axios.get("http://localhost:3000/data");
