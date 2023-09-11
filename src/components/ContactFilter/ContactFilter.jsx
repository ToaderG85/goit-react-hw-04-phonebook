import React from 'react';
import { nanoid } from 'nanoid';
import style from './ContactFilter.module.css';
import PropTypes from 'prop-types';

export default function ContactFilter({ value, onChange }) {
    const filterID = nanoid();
    return (
      <div className={style.contact__filter}>
        <label htmlFor={filterID}>
          Find contact (name)
          <input
            type="text"
            value={value}
            name="filter"
            onChange={onChange}
            id={filterID}
          />
        </label>
      </div>
    );
}

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};