import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar pão', done: false}
  ]);


  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
      </C.Area>
    </C.Container>
  );
}

export default App;