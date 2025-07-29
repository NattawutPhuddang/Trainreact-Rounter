import Counter from './count.jsx';
import React from 'react';

function Home() {
const [showCounter, setShowCounter] = React.useState(false);

return (
    <div className="home">
        <header className="home-header">
            <h1>Welcome to the Home Page</h1>
            <button onClick={() => setShowCounter(!showCounter)}>Counter</button>
            {showCounter && <Counter />}
        </header>
    </div>
);
}
export default Home;