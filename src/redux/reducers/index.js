import {combineReducers} from 'redux';
import auth from './auth';
import home from './home'
import admin from './admin';
import book from './book';
import genre from './genre';
import author from './author';
import history from './history';

export default combineReducers({auth,
home,
admin,
book,
genre,
author,
history
})