import * as React from 'react';
import { useParams } from 'react-router-dom';

export default function Test() {
  let { idUser } = useParams();
  return <div onClick={() => console.log(idUser)}>YEEEE {idUser}</div>;
}
