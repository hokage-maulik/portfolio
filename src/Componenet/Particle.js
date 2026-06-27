// Particle component DISABLED
// Reason: tsParticles version mismatch error
// Engine version: 2.12.0 vs Plugins version: 3.7.1
// 
// To fix this, you would need to:
// 1. Update package.json to use compatible versions
// 2. Run: npm install to update dependencies
// 3. Then re-enable this component

// Original code commented below:
/*
import React from 'react';
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

export default function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{...}}
    />
  );
}
*/

// Placeholder export to prevent import errors
export default function Particle() {
  return null;
}
