
import { useState } from 'react';

export const AddCategory = ({ onNewValue}) => {

    const [imputValue, setimputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setimputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(imputValue.trim().length<1) return;
        //setcategories(categories => [imputValue,...categories])
        onNewValue(imputValue.trim());
        setimputValue('')
        //setcategories([imputValue,...categories])
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar gif'
                value = {imputValue}
                onChange={ onInputChange}
            
            />
        </form>      
    )
}
