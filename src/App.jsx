import './App.css'
import Die from "./components/Die.jsx";
import {useState} from "react";

function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
        .fill(0)
        .map(() => Math.ceil(Math.random() * 6))
    }

    const diceElements = dice.map(num => <Die value={num} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={() => setDice(generateAllNewDice())}>Roll Dice</button>
        </main>
    )
}

export default App
