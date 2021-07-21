import { combineReducers } from 'redux';
import restaurant from './Restaurant.reducer';
import reviews from './Reviews.reducer';
import pictures from './Pictures.reducer';

const reducer = combineReducers({
    restaurant,
    reviews,
    pictures
});

export default reducer;