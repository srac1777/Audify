// export const PLAY_NOW = "PLAY_NOW"
// export const playNow = song => {
//     // debugger
//     return {
//         type: PLAY_NOW,
//         song
//     };
// };

export const PLAY_NOW = "PLAY_NOW"
export const playNow = idx => {
    // debugger
    return {
        type: PLAY_NOW,
        idx
    };
};