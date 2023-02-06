function add(numbers) {

    let _array = numbers.split(',');
    var _sum = 0;
    _array.forEach(element => {
        _sum += parseInt(element);
    });
    return _sum;
}
exports.add = add;