module.exports = (name, love, stat) => {
    if(name.split('').reverse().join('') == love) {
        return name.length == stat
    }

    return stat > name.length
}
