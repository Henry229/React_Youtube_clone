import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText('');
    navigate(`/videos/watch/${text}`);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Video ID:'
          value={text}
          onChange={handleChange}
        />
      </form>
      {/* <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link> */}
    </nav>
  );
};

export default Navbar;
