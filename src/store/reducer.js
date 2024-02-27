import ACTIONS from './actions';

const defaultState = { clients: [] };

const clientReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ACTIONS.Types.LOAD_CLIENTS: 
      return { ...state, clients: payload };

    case ACTIONS.Types.SAVE_CLIENT: {
      const { clients } = state, 
        index = clients.findIndex((c) => c.id === payload.id);

        if (index === -1) {
          const newClients = [...clients, payload];
          return { ...state, clients: newClients };
        } else {
          const updatedClients = clients.map((client, idx) =>
            idx === index ? payload : client
          );
          return { ...state, clients: updatedClients };
        }
    }

    case ACTIONS.Types.DELETE_CLIENT: 
      return { ...state, clients: state.clients.filter((c) => c.id !== payload) };

    default:
      return state;
  }
};

export default clientReducer;
