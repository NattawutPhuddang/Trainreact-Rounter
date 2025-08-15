export default function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_INPUT':
      return { ...state, inputText: action.payload };
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, state.inputText],
        inputText: '',
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        list: state.list.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}