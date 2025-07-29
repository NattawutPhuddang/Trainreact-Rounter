import Counter from './count.jsx';
import Todolist from './todolist.jsx';
import React from 'react';

function Home() {
const [showCounter, setShowCounter] = React.useState(false);
const [showtodolist, setShowtodolist] = React.useState(false);

return (
    <div className="home">
        <header className="home-header">
            <h1>Welcome to the Home Page</h1>
            <div>
            <button onClick={() => setShowCounter(!showCounter)}>Counter</button>
            {showCounter && <Counter />}
            </div>
            <div>
             <button onClick={() => setShowtodolist(!showtodolist)}>Todolist</button>
            {showtodolist && <Todolist />}
            </div>
        </header>
    </div>
);
}
export default Home;