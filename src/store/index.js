
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
// import ACTIONS from './actions';

// const initStore = () => {
//   const store = configureStore(reducer, { clients: [] }, 
//     process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, logger) : applyMiddleware(thunk));
  
//   store.dispatch(ACTIONS.loadClients());

//   return store;
// };

const store = configureStore({
  reducer,
  middleware: (defaultMiddleware) => defaultMiddleware()
});

export default store;
