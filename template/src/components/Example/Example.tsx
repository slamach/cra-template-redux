import React from 'react';

const Example: React.FC = () => {
  return (
    <p>
      This is React app template by{' '}
      <a href="https://dmitriisviridov.com">Dmitrii Sviridov</a>
    </p>
  );
};

const MemoizedExample = React.memo(Example);

export { MemoizedExample as Example };
