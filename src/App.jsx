import './App.css'
import Die from "./components/Die.jsx";

function App() {
    return (
        <main>
            <div className="dice-container">
                {[...Array(10)].map((x, i) =>
                    <Die value={(i % 6)+1}/>
                )}
            </div>
        </main>

    )
}

export default App
