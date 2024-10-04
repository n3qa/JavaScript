function calculator() {
    let firstElm;
    let secomdElm;
    let resultElm;

    return {
        init: (selector1, slector2, resultSelector) =>{
         firstElm = document.querySelector(selector1);
         secomdElm = document.querySelector(selector2);
         resultElm = document.querySelector(resultSelector);


        },

        add: ()=>{
            return resultElm.value = Number(firstElm.value)+Number(secomdElm.value);

        },

        substract: ()=>{
            return resultElm.value = Number(firstElm.value)-Number(secomdElm.value);
        }
    }
}

let obj = calculator();
obj.init('#num1','#num2','#result')


