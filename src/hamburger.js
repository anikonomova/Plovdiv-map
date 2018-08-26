import React from 'react';
//hide/show sidebar on hamburger
const Hamburger = ({ toggle }) => {

  toggle = () => {
        const menu = document.querySelector('.menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

        const hamburger = document.querySelector('.hamburger');
        hamburger.style.left = hamburger.style.left === '35%' ? '2%' : '35%';


        const map = document.querySelector('#map');
        map.style.left = map.style.left === '35%' ? '0' : '35%';
        map.style.width = map.style.width === '65%' ? '100vw' : '65%';

        }

    return (
      <div tabIndex="0" aria-label='Show/Hide filter and list of restaurants'
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
