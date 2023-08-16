const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('.input1');
console.log(buttons)
let operation = 0


buttons[18].addEventListener('click', function() {
    const resultValue = eval(operation);
    result.textContent = resultValue;
})

buttons[17].addEventListener('click', function() {
    operation += '.'
    return result.textContent += '.'
})

buttons[16].addEventListener('click', function() {
    operation += '0'
    return result.textContent += '0'
})

buttons[15].addEventListener('click', function() {
    operation += '+'
    return result.textContent += ' + '
})

buttons[14].addEventListener('click', function() {
    operation += '3'
    return result.textContent += '3'
})

buttons[13].addEventListener('click', function() {
    operation += '2'
    return result.textContent += '2'
})

buttons[12].addEventListener('click', function() {
    operation += '1'
    return result.textContent += '1'
})

buttons[11].addEventListener('click', function() {
    operation += '-'
    return result.textContent += ' - '
})

buttons[10].addEventListener('click', function() {
    operation += '6'
    return result.textContent += '6'
})

buttons[9].addEventListener('click', function() {
    operation += '5'
    return result.textContent += '5'
})

buttons[8].addEventListener('click', function() {
    operation += '4'
    return result.textContent += '4'
})

buttons[7].addEventListener('click', function() {
    operation += '*'
    return result.textContent += ' × '
})

buttons[6].addEventListener('click', function() {
    operation += '9'
    return result.textContent += '9'
})

buttons[5].addEventListener('click', function() {
    operation += '8'
    return result.textContent += '8'
})
buttons[4].addEventListener('click', function() {
    operation += '7'
    return result.textContent += '7'
})

buttons[3].addEventListener('click', function() {
    operation += '/'
    return result.textContent += ' / '
})

buttons[2].addEventListener('click', function() {
    operation += '%'
    return result.textContent += ' % '
})

buttons[0].addEventListener('click', function() {
    operation = '0'
    return result.textContent = ''
})




