import React from 'react';

const Hamburger = ({ toggle }) => {

  toggle = () => {
        const menu = document.querySelector('.menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

        const hamburger = document.querySelector('.hamburger');
        hamburger.style.left = hamburger.style.left === '20%' ? '0' : '20%';


        const map = document.querySelector('#map');
        map.style.left = map.style.left === '20%' ? '0' : '20%';
        map.style.width = map.style.width === '80%' ? '100vw' : '80%';

        }

    return (
      <div
        className="hamburger"
        onClick={(event) => toggle()}
        >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
}

export default Hamburger;
