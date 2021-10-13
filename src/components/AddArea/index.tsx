import React from 'react';
import * as C from './styled';

export const AddArea = () => {
    return (
        <C.Components>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
            />
        </C.Components>
    );
}