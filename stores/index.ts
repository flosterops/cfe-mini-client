import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from 'stores/reducers';

const middleWares = [thunk];

export interface IStore {}

const store = createStore<IStore, any, any, any>(reducers, composeWithDevTools(applyMiddleware(...middleWares)));

const makeStore: MakeStore<IStore> = () => store;

const wrapper = createWrapper<IStore>(makeStore);

export { wrapper, store };
