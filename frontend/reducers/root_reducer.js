import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import ui from './ui_reducer';
import playNowReducer from './play_now_reducer';
import nowPlayingQueueReducer from './now_playing_queue_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui,
    now_playing: playNowReducer,
    now_playing_queue: nowPlayingQueueReducer
});

export default rootReducer;