const display = [];
let operator = '';

function calc(input){
    
        switch(input){
            case '0':
                display.push(0);
                break;
            case '1':
                display.push(1);
                break;
            case 'C':
                display.length = 0;
                break; 
            case '=':
                switch(operator){
                    case '+':
                        document.getElementById('res').innerHTML = add(display.join('').split("+"));
                        var ans1 = add(display.join('').split("+"));
                        display.length = 0;
                        display.push(ans1);
                        return 0;
                    case '-':
                        document.getElementById('res').innerHTML =  sub(display.join('').split("-"));
                        var ans2 = sub(display.join('').split("-"));
                        display.length = 0;
                        display.push(ans2);
                        return 0;
                    case '*':
                        document.getElementById('res').innerHTML =  multiply(display.join('').split("*"));
                        var ans3 = multiply(display.join('').split("*"));
                        display.length = 0;
                        display.push(ans3);
                        return 0;
                    case '/':
                        document.getElementById('res').innerHTML =  divide(display.join('').split("/"));
                        var ans4 = divide(display.join('').split("/"));
                        display.length = 0;
                        display.push(ans4);
                        return 0;
                }
                break;
            case '+':
                display.push('+');
                operator = '+';
                break;
            case '-':
                display.push('-');
                operator = '-';
                break;
            case '*':
                display.push('*');
                operator = '*';
                break;
            case '/':
                display.push('/');
                operator = '/';
                break;
        }

    document.getElementById('res').innerHTML = display.join('');  
}

function add(operands){
    return (parseInt(operands[0],2) + parseInt(operands[1],2)).toString(2);
}

function sub(operands){
    return (parseInt(operands[0],2) - parseInt(operands[1],2)).toString(2);
}

function multiply(operands){
    return (parseInt(operands[0],2) * parseInt(operands[1],2)).toString(2);
}

function divide(operands){
    return (Math.floor(parseInt(operands[0],2) / parseInt(operands[1],2))).toString(2);
}

