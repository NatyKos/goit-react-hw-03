import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contactItem: { name, number } }) {
  return (
    <div>
      <p className={css.name}>
        <IoPersonSharp />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
      <button type="button">Delete</button>
    </div>
  );
}
