export const ADD_CLICKED_SONG = "ADD_CLICKED_SONG"
export const songClick = song => {
    // debugger
    return {
        type: ADD_CLICKED_SONG,
        song
    };
};