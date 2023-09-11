import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({contacts, onDelete}) {
  return (
    <div className={style.contact__list}>
      <h4 className={style.contacts__title}>Contacts</h4>
      <ul>
      {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => onDelete(id)}
              >
                {' '}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};