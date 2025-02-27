import React, { useState, useEffect } from 'react';
import './accessibilityMenu.css'; // Include CSS for custom styles
import bigCursor from './big-cursor.png';

const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textScale, setTextScale] = useState(1); // Default scaling factor (1 = 100%)
  const [lineHeightScale, setLineHeightScale] = useState(1); // Default line height scaling factor
  const [isInverted, setIsInverted] = useState(false);
  const [isGray, setIsGray] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isBigCursor, setIsBigCursor] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false); // New state for light background

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const increaseTextSize = () => {
    setTextScale(prevScale => prevScale + 0.1); // Increase text scaling by 10%
  };

  const decreaseTextSize = () => {
    setTextScale(prevScale => Math.max(prevScale - 0.1, 0.5)); // Decrease scaling, minimum 50%
  };

  const increaseLineHeight = () => {
    setLineHeightScale(prevScale => prevScale + 0.1); // Increase line height scaling
  };

  const decreaseLineHeight = () => {
    setLineHeightScale(prevScale => Math.max(prevScale - 0.1, 1)); // Decrease line height, minimum 1
  };

  const toggleInvertColors = () => {
    setIsInverted(!isInverted);
  };

  const toggleGrayHues = () => {
    setIsGray(prevState => {
        const newState = !prevState;
        document.body.style.overflow = newState ? 'hidden' : 'auto';
        return newState;
    });
};

  const toggleUnderlineLinks = () => {
    setIsUnderlined(!isUnderlined);
  };

  const toggleBigCursor = () => {
    setIsBigCursor(prevState => !prevState);
  };

  const toggleLightBackground = () => {
    setIsLightBackground(prevState => {
        console.log('Toggling light background:', !prevState); // Log the new state
        return !prevState; // Toggle the state
    });
};

  const resetSettings = () => {
    setTextScale(1);
    setLineHeightScale(1);
    setIsInverted(false);
    setIsGray(false);
    setIsUnderlined(false);
    setIsBigCursor(false);
    setIsLightBackground(false); // Reset light background state
  };

  // Apply accessibility options to body content only
  useEffect(() => {
    if (textScale !== 1) {
      const style = document.createElement('style');
      style.innerHTML = `
        #content-wrapper *:not(.accessibility-menu *):not(.accessibility-menu) {
          font-size: calc(16px * ${textScale}) !important;
        }
        #content-wrapper h1:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(60px * ${textScale}) !important; }
        #content-wrapper h2:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(48px * ${textScale}) !important; }
        #content-wrapper h3:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(36px * ${textScale}) !important; }
        #content-wrapper h4:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(30px * ${textScale}) !important; }
        #content-wrapper h5:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(24px * ${textScale}) !important; }
        #content-wrapper h6:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(20px * ${textScale}) !important; }
        #content-wrapper button:not(.accessibility-menu *):not(.accessibility-menu) { font-size: calc(16px * ${textScale}) !important; }
      `;
      document.head.appendChild(style);
  
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [textScale]);

  useEffect(() => {
    if (lineHeightScale !== 1) {
      const style = document.createElement('style');
      style.innerHTML = `
        #content-wrapper, #content-wrapper p, #content-wrapper div, #content-wrapper span, #content-wrapper a, 
        #content-wrapper ul, #content-wrapper li, #content-wrapper h1, #content-wrapper h2, 
        #content-wrapper h3, #content-wrapper h4, #content-wrapper h5, #content-wrapper h6 {
          line-height: calc(1.5 * ${lineHeightScale}) !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [lineHeightScale]);

  useEffect(() => {
    const contentWrapper = document.getElementById('content-wrapper');

    // Handle inversion
    //contentWrapper.style.filter = isInverted ? 'invert(1)' : 'none';

    // Apply gray hues to text and background
    if (isGray) {
      contentWrapper.style.filter = 'grayscale(1)'; 
      contentWrapper.style.color = '#555'; // Gray text
     // contentWrapper.style.backgroundColor = '#ccc'; // Gray background (optional)
    } else {
      contentWrapper.style.filter = 'none'; 
      contentWrapper.style.color = 'initial'; // Reset to default
      contentWrapper.style.backgroundColor = 'initial'; // Reset to default background (optional)
    }

    // Apply light background colors
    if (isLightBackground) {
      contentWrapper.style.color = 'black'; // Set text to black
      contentWrapper.style.backgroundColor = 'white'; // Set background to white
    }

    // Adjust cursor size
    document.body.style.cursor = isBigCursor ? 'url(big-cursor.png), auto' : 'auto';
  }, [isInverted, isGray, isLightBackground, isBigCursor]);

  useEffect(() => {
    const links = document.querySelectorAll('#content-wrapper a');
    links.forEach(link => {
      link.style.textDecoration = isUnderlined ? 'underline' : 'none';
    });
  }, [isUnderlined]);

  useEffect(() => {
    const cursorStyle = isBigCursor ? 'url(./big-cursor.png), auto' : 'auto';
    document.body.style.cursor = cursorStyle;
  }, [isBigCursor]);

  useEffect(() => {
    console.log('Effect for light background triggered:', isLightBackground); // Log the current state
    const contentWrapper = document.getElementById('content-wrapper');

    if (isLightBackground) {
        contentWrapper.style.backgroundColor = 'white';
        contentWrapper.style.color = 'black';
    } else {
        contentWrapper.style.backgroundColor = 'initial'; // Reset to default
        contentWrapper.style.color = 'initial'; // Reset to default
    }

    // Other effects...
}, [isLightBackground]);

  return (
    <>
      <button
        className="floating-button accessibility-button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="accessibility-menu"
      >
        <span className="icon"><i className="fa fa-universal-access"></i></span>
      </button>

      {isMenuOpen && (
  <div className="accessibility-menu">
    <button className="close-button" onClick={toggleMenu} aria-label="Close Menu">
      &times; {/* This is a multiplication sign which looks like an 'X' */}
    </button>
    <h3>Accessibility Options</h3>
    <button onClick={increaseTextSize}>🔍 Increase Text Size</button>
    <button onClick={decreaseTextSize}>🔍 Decrease Text Size</button>
    <button onClick={increaseLineHeight}>📏 Increase Line Height</button>
    <button onClick={decreaseLineHeight}>📏 Decrease Line Height</button>
    <button onClick={toggleGrayHues}>
      {isGray ? '🌈 Normal Colors' : '🌑 Gray Hues'}
    </button>
    <button onClick={toggleUnderlineLinks}>
      {isUnderlined ? '🔗 Normal Links' : '🔗 Underline Links'}
    </button>
    <button onClick={resetSettings}>🔄 Reset</button>
  </div>
)}
    </>
  );
};

export default AccessibilityMenu;
