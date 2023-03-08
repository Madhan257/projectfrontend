import React from 'react';
import './Style.css';
function Website() {
  return (
    <div className='banner'>
      <div className='navbar'>
        <h1 className='app'>MUSIC</h1>
        {/* <img src='logo.png' className='logo' /> */}
        <ul>
          <li>
            <a href='#'>POST</a>
          </li>
          <li>
            <a href='#'>GET</a>
          </li>
          <li>
            <a href='#'>UPADTE</a>
          </li>
          <li>
            <a href='#'>DELETE</a>
          </li>
          <li>
            <a href=''>SIGN UP</a>
          </li>
        </ul>
      </div>
      <div className='content'>
        <h1>MUSIC</h1>
        <p>
        Music is the art of combining and organizing sounds along with other elements in time to create a composition. ...
        <br />
No good movie is too long and no bad movie is short enough. ...
<br />
If it's a good movie, the sound could go off and the audience would still have a perfectly clear idea of what was going on.
          <br />
          press the bell icon to get latest updates.
        </p>

      </div>
    </div>
  );
}

export default Website;