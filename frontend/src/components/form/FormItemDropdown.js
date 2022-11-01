import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItemDropdown
 * @description Input field
 * @return component
 */
const FormItemDropdown = ({
  onChange, value, id, label, options, errorMsg, inputStyle
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div className={styles.errorMsg}>
        {errorMsg}
        <br />
        <select
          style={inputStyle}
          className={styles.input}
          id={id}
          onChange={onChange}
          value={value}
        >
          {options.map((optionText) => (
            <option
              value={optionText}
              key={optionText}
            >
              {optionText}
            </option>
          ))}
        </select>
      </div>
    </label>
  </div>
);

export default FormItemDropdown;
