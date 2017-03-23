export default function createSocketIOMiddleware(socket) {

  return ({ dispatch, getState })  => next => action => {

    if (action.type === 'CONNECT') {
      socket.connect();
    }
    if (action.type === 'DISCONNECT') {
      socket.disconnect();
    }

    if (typeof action === 'function') {
      return action(dispatch, socket, getState);
    }

    return next(action);
  };
}
