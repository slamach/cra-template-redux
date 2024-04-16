import React from 'react';
import classNames from 'classnames';

import styles from './Example.module.css';

interface IExampleProps {
  className?: string;
}

const Example: React.FC<IExampleProps> = ({ className }) => {
  return (
    <p className={classNames(styles.container, className)}>
      This is React app template by{' '}
      <a href="https://dmitriisviridov.com">Dmitrii Sviridov</a>
    </p>
  );
};

const MemoizedExample = React.memo(Example);

export { MemoizedExample as Example };
