import React from 'react';
import './CallToAction.css';

function CallToAction({title, bodyText, buttonText, italicizeLastWord}) {
    const titleParts = title.split(' ');
    const lastWord = titleParts.pop();

  return (
    <div className="cta-container">
        <h1 className="cta-title">
            {titleParts.join(' ')}{' '}
            {italicizeLastWord ? <em>{lastWord}</em> : lastWord}
        </h1>
      <p className="cta-text">{bodyText}</p>
      <button className="cta-button">{buttonText}</button>
    </div>
  );
}

export default CallToAction;
