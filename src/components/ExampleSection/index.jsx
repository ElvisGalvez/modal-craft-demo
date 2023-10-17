import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExampleSection.css';

const ExampleSection = ({ title, description, code, ExampleComponent }) => {
  const [showFullCode, setShowFullCode] = useState(false);

  return (
    <section>
      <h2>{title}</h2>
      <h3>How It Works:</h3>
      <p>{description}</p>
      <div className={`code-block ${showFullCode ? 'full' : ''}`} onClick={() => setShowFullCode(!showFullCode)}>
        <pre>{code}</pre>
        <div className="reveal-more">
          {showFullCode ? 'Collapse' : 'See more...'}
        </div>
      </div>
      <h3>Modal in Action:</h3>
      <ExampleComponent />
    </section>
  );
};


ExampleSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  ExampleComponent: PropTypes.elementType.isRequired,
};

export default ExampleSection;
