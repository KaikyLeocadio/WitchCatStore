import React from 'react';
import Styles from './ComponentProps.module.css';

function ComponentProps({ textoPadrao }) {
  return (
    <section className={Styles.textoprops}>
      <p>{textoPadrao}</p>
    </section>
  );
}

export default ComponentProps;