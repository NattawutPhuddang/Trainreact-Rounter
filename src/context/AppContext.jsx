import { createContext, useReducer } from 'react';
import reducer from './reducer';

export const AppContext = createContext();

const initialState = {
  count: 0,
  inputText: '',
  list: [],
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}