import axios from 'axios';
import { useState } from 'react';

export default function Test() {
  const [value, setValues] = useState('');
  const info = {
    firstname: 'yanis',
    email: 'yaniscrab@gmail.com',
    password: 'pass123',
  };

  const sendData = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/test',
      data: info,
    });
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
      <input type="submit" onClick={sendData} value="Submit" />
    </div>
  );
}
