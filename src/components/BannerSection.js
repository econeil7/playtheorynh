import React from 'react';
import './BannerSection.css';

function BannerSection({ title, bodyText, additionalContent }) {
  return (
    <div className="banner-section">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-text">{bodyText}</p>
      {additionalContent && <div className="banner-additional-content">{additionalContent}</div>}
    </div>
  );
}

export default BannerSection;
