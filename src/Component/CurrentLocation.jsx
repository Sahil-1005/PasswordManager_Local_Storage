import React, { useState, useEffect } from 'react';

function CurrentLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          const { latitude, longitude } = success.coords;
          setPosition({ latitude, longitude });
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array to run only once after mount

  return (
    <div>
      {position.latitude && position.longitude ? (
        <p>
          Your Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default CurrentLocation;
