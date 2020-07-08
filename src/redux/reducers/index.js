import {combineReducers} from 'redux';
import auth from './auth';
import home from './home'
import admin from './admin';
import book from './book';

export default combineReducers({auth,
home,
admin,
book
})