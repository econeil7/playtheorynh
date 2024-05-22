import React from 'react';
import './BannerContainer.css';

function BannerContainer({ children }) {
  return <div className="banner-container">{children}</div>;
}

export default BannerContainer;
