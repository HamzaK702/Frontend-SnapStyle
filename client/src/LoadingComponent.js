import React from 'react';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <p>Loading...</p>
        {/* Optionally, you can add a spinner or any loading animation here */}
      </div>
    </div>
  );
};

export default LoadingComponent;
