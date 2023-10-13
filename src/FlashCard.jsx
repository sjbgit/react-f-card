// FlashCard.js
import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

const FlashCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="flashcard front" onClick={handleClick}>
        {frontContent}
      </div>
      <div className="flashcard back" onClick={handleClick}>
        {backContent}
      </div>
    </CardFlip>
  );
};

export default FlashCard;
