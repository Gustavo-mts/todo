import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
}


export const ListItem = ({ item }:Props ) => {
    
    const [isChecked, setIsChecked] = useState(item.done);

    const handleChecked = () => {
        if(item.done === true && isChecked) {
            item.done = false;
        } else {
            item.done = true;
        }
    }

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked} 
                onChange={e=>setIsChecked(e.target.checked)}
                onClick={handleChecked}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}