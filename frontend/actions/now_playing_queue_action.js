export const NOW_PLAYING_QUEUE = "NOW_PLAYING_QUEUE"
export const nowPlayingQueue = queue => {
    // debugger
    return {
        type: NOW_PLAYING_QUEUE,
        queue
    };
};