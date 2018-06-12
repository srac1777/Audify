export const PLAY_NOW = "PLAY_NOW"
export const playNow = song => {
    // debugger
    return {
        type: PLAY_NOW,
        song
    };
};