import React from 'react';

import $styles from './background.module.css';

export default function Background() {
  return (
    <div className={$styles.background}>
      <span className={$styles['background-bottom-mask']}></span>

      <span className={$styles['background-left']}></span>
      <span className={$styles['background-right']}></span>
      <div className={$styles.content}>
        <div className={$styles.mask}></div>
        <div className={$styles['lines-wrapper']}>
          <div className={$styles.lines}></div>
        </div>
      </div>
    </div>
  );
}
