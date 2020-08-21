import React from 'react';


const test = [
    {path: '/fizyka', name: 'fizyka'},
    {path: '/historia', name: 'historia'},
    {path: '/żeglarstwo', name: 'żeglarstwo'}
]



const Menu = (props) => {
    const testy = test.map(item=>(<button key={item.path}  id={item.name} onClick={props.subject}>{item.name}</button>))
    return ( 
        <div className='menu'>
            
                {testy}
        
        </div>
     );
}
 
export default Menu;