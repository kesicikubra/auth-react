import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { TfiMinus, TfiPlus, TfiReload} from "react-icons/tfi";
import { useStore } from '../../store';
import { counterDown, counterReset, counterUp } from '../../store/counter/action';


const Counter = () => {
    const { counterState, dispatchCounter} = useStore();
    const {counter} =counterState;
  return (
    <ButtonGroup className='mt-5'>
        <Button variant="warning" onClick={()=> dispatchCounter(counterDown())}><TfiMinus/></Button>
        <Button variant="secondary" disabled>{counter}
    
        </Button>
        <Button variant="warning" onClick={()=> dispatchCounter(counterUp())}><TfiPlus/></Button>
        <Button variant="success" onClick={()=> dispatchCounter(counterReset(0))}><TfiReload/></Button>
    </ButtonGroup>
  )
}
export default Counter