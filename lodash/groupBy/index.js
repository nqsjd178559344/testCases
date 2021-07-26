function groupBy(collection, iteratee) {
    if (!collection || !iteratee || typeof collection !== 'object') {
        return
    }
    if (Array.isArray(collection)) { // Array
        let res = reducer(collection, iteratee)
        return res
    } else { // Object

    }
}

function reducer(collection, iteratee) {
    return collection.reduce((pre, cur) => {
        let key
        if (typeof iteratee === 'function') {
            key = iteratee(cur)
        } else if (typeof iteratee === 'string') {
            key = cur[iteratee]
        } else if (iteratee && typeof iteratee === 'object') {
            if (Array.isArray(iteratee)) { // Array

            } else { // Object

            }
        }
        return reduceItem(key, pre, cur)
    }, {})
}

function reduceItem(key, pre, cur) {
    let value = pre[key] || []
    let newObj = { [key]: [...value, cur] }
    return { ...pre, ...newObj }
}

module.exports = groupBy