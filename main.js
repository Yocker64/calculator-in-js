function add(first, second) {
    return parseFloat(first) + parseInt(second);
}
function subtract(first, second) {
    return parseFloat(first) -parseFloat(second);
}
function multiply(first, second) {
    return parseFloat(first) * parseFloat(second);
}
function divide(first, second) {
    if (second == 0) {
        return 'Error'
    }else{
        return parseFloat(first) / parseFloat(second);
    }
}

let calc = document.querySelector('.calculator');
let blank = document.querySelector('#input');
blank.value = '';
let num1 = 0;
let num2 = null;
let operation = '';
let result = 0;
calc.addEventListener('click', (event)=>{
    let target = event.target;
    switch (target.id) {
        case '1':
            blank.value += '1'
            break;
        case '2':
            blank.value += '2'
            break;
        case '3':
            blank.value += '3'
            break;
        case '4':
            blank.value += '4'
            break;
        case '5':
            blank.value += '5'
            break;
        case '6':
            blank.value += '6'
            
            break;
        case '7':
            blank.value += '7'
            break;
        case '8':
            blank.value += '8'
            break;
        case '9':
            blank.value += '9'
            break;
        case '0':
            blank.value += '0'
            break;
        case 'equal':
            num2 = blank.value
            switch (operation) {
                case '':
                    result = first;
                    break;
                case 'x':
                    result = multiply(num1, num2)
                    break;
                case '-':
                    result = subtract(num1, num2)
                    break;
                case '/':
                    result = divide(num1, num2)
                    break;
                case '+':
                    result = add(num1, num2)
                    break;
                default:
                    break;
            }
            blank.value = result;
            break;
        case 'delete':
            first = 0
            second = null;
            operation = '';
            result = 0;
            blank.value = '';
            break;
        
        default:
            num1 = blank.value;
            blank.value = ''
            switch (target.id) {
                case 'multi':
                    operation = 'x'
                    break;
                case 'div':
                    operation = '/'
                    break;
                case 'minus':
                    operation = '-'
                    break;
                case 'plus':
                    operation = '+'
                    break;
                default:
                    break;
            }
            break;
    }
    
})

