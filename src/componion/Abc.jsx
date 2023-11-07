import React, { useState } from 'react';

function CharacterCounter() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const characterCount = value.length;
    console.log('Number of characters:', characterCount);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default CharacterCounter;