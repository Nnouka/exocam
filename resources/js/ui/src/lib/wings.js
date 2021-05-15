
const postHandleRegistry = [];
const preHandleRegistry = [];
const errorHandleRegistry = [];
export const wings = {
    registry: {
        preHandlers: {add: (callback) => handlePreHandleSubscription(callback)} ,
        postHandlers: {add: (callback) => handlePostHandleSubscription(callback)},
        errorHandlers: {add: (callback) => handleErrorSubscription(callback)}
    },
    get: (url, options = {}) => flapper(url, {method: 'GET', ...options}),
    post: (url, data, options = {}) => flapper(url, {method: 'POST', body: JSON.stringify(data), ...options})
}

function flapper(url, {headers, ...options}) {
    return new Promise((resolve, reject) => {
        handlePreCallbacks({url, options: {headers, ...options}}).then(
            (prepared) => {
                fetch(prepared.url, prepared.options)
                    .then(res => {
                        if(res.status > 200 && res.status < 300) {
                            handleCallbacks().then(
                                () => resolve()
                            );
                        }
                        else if(res.ok) {
                            res.json().then(
                                data => {
                                    handleCallbacks(data).then(
                                        (modified) => {
                                            resolve(modified);
                                        }
                                    );
                                }
                            ).catch(
                                error => {
                                    reject({message: 'JSON parse error', error})
                                }
                            );
                        } else {
                            res.json().then(
                                data => {
                                    handleErrors(data).then(
                                        (errs) => {
                                            reject(errs);
                                        }
                                    )
                                }
                            ).catch(
                                error => {
                                    reject({message: 'JSON parse error', error})
                                }
                            );
                        }
                    }, error => reject({code: 'CONNECTION_TIMEOUT', error}));
            }
        )
    });
}

function handlePostHandleSubscription(callback) {
 postHandleRegistry.push(callback);
 const start = postHandleRegistry.length - 1;
 return function () {
    postHandleRegistry.splice(start, 1);
 }
}
function handlePreHandleSubscription(callback) {
    preHandleRegistry.push(callback);
    const start = postHandleRegistry.length - 1;
    return function () {
        preHandleRegistry.splice(start, 1);
    }
}
function handleErrorSubscription(callback) {
    errorHandleRegistry.push(callback);
    const start = errorHandleRegistry.length - 1;
    return function () {
        errorHandleRegistry.splice(start, 1);
    }
}
function handleErrors(error) {
    return new Promise(resolve => {
        let result = error;
        try {
            if (errorHandleRegistry.length > 0) {
                errorHandleRegistry.forEach(
                    callback => {
                        try {
                            if (error) {
                                result = callback(error);

                            } else {
                                callback();
                            }
                        } catch (e) {

                        }
                    }
                );
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            } else {
                if (error) {
                    resolve(error);
                } else {
                    resolve()
                }
            }
        } catch (e) {
            if (error) {
                resolve(error);
            } else {
                resolve();
            }
        }
    })
}
function handleCallbacks(data) {
    return new Promise(resolve => {
        let result = data;
        try {
            if (postHandleRegistry.length > 0) {
                postHandleRegistry.forEach(
                    callback => {
                        try {
                            if (data) {
                                result = callback(data);

                            } else {
                                callback();
                            }
                        } catch (e) {

                        }
                    }
                );
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            } else {
                if (data) {
                    resolve(data);
                } else {
                    resolve()
                }
            }
        } catch (e) {
            if (data) {
                resolve(data);
            } else {
                resolve();
            }
        }
    })
}

function handlePreCallbacks({url, options}) {
    return new Promise(resolve => {
        try {
            let result = {url, options};
            if (preHandleRegistry.length > 0) {
                preHandleRegistry.forEach(
                    callback => {
                        try {
                            result = callback(result);
                            console.log("result", result);
                        } catch (e) {

                        }
                    }
                );
                resolve(result);
            } else {
                resolve(result)
            }
        } catch (e) {
            resolve({url, options})
        }

    })
}
