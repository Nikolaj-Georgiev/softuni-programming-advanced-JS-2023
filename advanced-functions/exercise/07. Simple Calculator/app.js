function calculator() {
    const dictionary = {
        selector1:  '',
        selector2: '',
        resultSelector: ''
    }

    return {
        init(s1, s2, r){
            dictionary.selector1 = document.querySelector(s1);
            dictionary.selector2 = document.querySelector(s2);
            dictionary.resultSelector = document.querySelector(r);
        },
        add(){
            dictionary.resultSelector.value = Number(dictionary.selector1.value) + Number(dictionary.selector2.value);
        },
        subtract(){
            dictionary.resultSelector.value = Number(dictionary.selector1.value) - Number(dictionary.selector2.value);

        },
    }
}




const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
