import React, {useContext} from 'react';
import BrushIcon from '@material-ui/icons/Brush';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
    const  toggleTheme  = useContext(ThemeContext)
    return ( 
        <button onClick={toggleTheme} 
                style={{textAlign:"center",
                        position:"fixed",
                         zIndex:"5",
                         borderRadius:'10px',
                         left:"0px",
                         top:"120px",
                         color:"#5f9ea0",
                         backgroundColor:"#e9eaed",
                         cursor:"pointer"}}>
            <BrushIcon style={{marginLeft:"4px",fontSize:"20px"}} />
        </button>
     );
}
 
export default ThemeToggle;