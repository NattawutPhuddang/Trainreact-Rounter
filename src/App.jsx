import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './componants/home';
import Count from './componants/count';
import Todolist from './componants/todolist';
import './App.css';

function App() {
  const activeClassName = 'nav-active';

  return (
    <AppProvider>
      <BrowserRouter>
        <nav>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/count"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Counter
          </NavLink>
          <NavLink
            to="/todolist"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Todolist
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count" element={<Count />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;