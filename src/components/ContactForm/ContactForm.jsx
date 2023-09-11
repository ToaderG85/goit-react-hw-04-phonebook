import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({onSubmit}) {
    const [name,setName] = useState('');
    const [number,setNumber] =useState('');

    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    const handleChange = event => {
        const { name, value } = event.target;
        if ('name' === name) {
          setName(value);
        } else if (name === 'number') {
          setNumber(value);
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
        event.target.reset();
      };


  return (
    <div className={style.contact__form}>
        <h4>New Contact</h4>
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type='text'
                    name="name"
                    placeholder='Name'
                    pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={inputNameId}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="tel"
                    name="number"
                    placeholder='Phone number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={inputNumberId}
                    onChange={handleChange}
                />
            </label>
            <button className={style.add__button} type='submit'>Add to Contacts</button>
        </form>
    </div>    
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
