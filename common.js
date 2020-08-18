const log = function(level, logInfo) {
    if (level >= D_LEVEL) {
        console.log(logInfo);
    }
}
const debug = function(logInfo) {
    log( D_LEVEL_DEBUG , logInfo);
}
const info = function(logInfo) {
    log( D_LEVEL_INFO , logInfo);
}