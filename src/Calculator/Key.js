import React, { memo } from 'react';

const Key = memo(({ type = 'number', value, className, onClick = null }) => {
  return (
    <button
      className={[`btn`, type, className].join(' ')}
      onClick={() => onClick(value, type)}
    >
      {value}
    </button>
  );
});

export default Key;
