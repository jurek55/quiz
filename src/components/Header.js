import React from 'react';
const Header = (props) => {
   console.log(props);
    return ( 
        <React.Fragment>
            {props.title ? <h3>{`quiz ${props.title} `}</h3> : <h3>wybierz dziedzinę</h3>}
        </React.Fragment>
     );
}
 
export default Header;