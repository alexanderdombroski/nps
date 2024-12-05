
function getParam(name, defaultValue = null) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(name) || defaultValue;
}


export { getParam }