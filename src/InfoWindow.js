import React from 'react';

const Info = ({ info }) => {

    return (
      <div  tabIndex='1'
            style={{ padding: `10px` }}>
        <div style={{ fontSize: `16px`, fontColor: `black` }}>
        {info}
        </div>
      </div>    )
    }


export default Info;
