import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const LazyImage = ({ src, alt, blurhash }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
          }}
        >
          <Blurhash
            hash={blurhash}
            width="100%" 
            height="100%" 
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LazyImage;