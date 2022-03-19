import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import questionsReducer from './reducers/questionsReducer';
import submitReducer from './reducers/submitReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'quiz',
    storage,
}

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: submitReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store);
export default store;