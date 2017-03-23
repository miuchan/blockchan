import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIOMiddleware from '../middlewares/socketIOMiddleware';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();
const socket = io('https://blockexplorer.com');
const socketIOMiddleware = createSocketIOMiddleware(socket);

export default function configureStore(defaultState) {
  return createStore(
    rootReducer,
    defaultState,
    compose(
      applyMiddleware(
        socketIOMiddleware,
        thunkMiddleware,
        loggerMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
