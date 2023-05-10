// Trim all properties of an object
export const trimObjProperties = (obj) => {
    const trimmedObj = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string') {
            trimmedObj[key] = obj[key].trim();
        } else {
            trimmedObj[key] = obj[key];
        }
    });

    return trimmedObj;
};

// filter object falsy values
export function filterObjectFalsyValues (obj) {
    return Object.keys(obj).reduce((acc, key) => {
        if (obj[key].toString()) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

export function isObjectIsEmpty (obj) {
    return Object.keys(obj).length === 0;
}

/**
 * Creates query params string
 * Example:
 * input: {var1: "value",var2: "value2",arr: "foo",};
 * output: "var1=value&var2=value2&arr=foo"
 * @param  {obj} paramObj
 * @return {string}
 */
export function getQueryParamsString (paramsObj = null) {
    const filteredObject = filterObjectFalsyValues(paramsObj);
    if (isObjectIsEmpty(filteredObject)) return '';
    const params = new URLSearchParams(filteredObject || {});
    return params?.toString();
}