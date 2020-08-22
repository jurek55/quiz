import React from 'react';

const Menu = (props) => {
    return ( 
        <div className='menu'>
            <button onClick={props.reset}>zmiana testu</button>
        </div>
     );
}
 
export default Menu;