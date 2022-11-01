import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type, errorMsg, inputStyle, maxLength
}) => (

  <div className={styles.mainInputDiv}>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div className={styles.errorMsg}>
        {errorMsg}
        <br />
        <input
          style={inputStyle}
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          maxLength={maxLength}
        />
      </div>
    </label>
  </div>
);

export default FormItem;
