import { useState } from 'react'
import './App.css'
import BoxMaker from './components/BoxMaker'
import BoxDisplay from './components/BoxDisplay'

const App = (props) => {
    const [boxes, setBoxes] = useState(['green','blue','red']);
    const boxers = ( newBoxes ) => {
        setBoxes( [...boxes, newBoxes] );
    }
    return (
        <>
            <BoxMaker boxers = {boxers} />
            <BoxDisplay boxes = {boxes}/>
        </>
    )
}

export default App
