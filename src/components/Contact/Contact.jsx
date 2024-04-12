import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
export default function Contact({ contactItem: { name, number } }) {
  return (
    <div>
      <p>
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
