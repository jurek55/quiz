import React from 'react';
const Header = (props) => {
   console.log(props);
   
    return ( 
        <React.Fragment>
            {props.title ? <h3 ><p className='title' onClick = {props.message} >{`quiz ${props.title} `}</p></h3> : <h3>wybierz dziedzinę</h3>}
        </React.Fragment>
     );
}
 
export default Header;