import React from 'react';
import './Header.css';
import {ReloadOutlined} from '@ant-design/icons';

export default function App(props) {

  function handleReload() {
    props.reloadFn(!props.reloadVal);
  }

  return (
    <div className="header">
      <img
        className='logo'
        src='https://play-lh.googleusercontent.com/ZCcdleO601tLmes3eksOdC9PuC1jjxpOANwfHjum4r88po2T9T7tYlRVv-hunlGFZw=s180-rw'
        height='40'
        alt='Miskaa'
        loading='lazy'
      />
      <h2 className="title">Miskaa Asian Countries</h2>
      <button className="btn" onClick={handleReload}><ReloadOutlined className="reloadIcon"/>Reload</button>
    </div>
  );
}