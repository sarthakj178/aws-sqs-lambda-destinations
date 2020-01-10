exports.ping = async event => {
    console.log('Event received', event);
    if (event.x) {
        return 'Success';
    } else {
        throw new Error("Parameter 'x' is missing");
    }
};
