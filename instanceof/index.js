function myInstanceof(current, target) {
    let proto = current.__proto__
    while (proto) {
        if (proto === target.prototype) {
            return true
        } else {
            proto = proto.__proto__
        }
    }
    return false
}

module.exports = myInstanceof