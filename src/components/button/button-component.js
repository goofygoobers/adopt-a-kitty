import React from 'react'; 
import Button from '@material-ui/core/Button';

const ButtonTemplate = (props) => { 
    const {title, color} = props

    return(
    <Button variant="contained" color={color}>{title}</Button>
    )
}

export default ButtonTemplate;


