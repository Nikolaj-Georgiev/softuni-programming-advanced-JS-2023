function add(n){
    let sum = 0;
    sum += n;
    function func(num){
        sum += num;
        return func;
    }

    func.toString = () => sum;

    return func;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());