import React, { useCallback, useState } from 'react';
import styles from './themetoggle.module.css';
import useTheme from '../../lib/theme';

export function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <label className={styles.switch}>
        <input
          name="theme"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Switch between Dark and Light Mode"
        />
        <span className={styles.slider} />
      </label>
    </div>
  );
}
