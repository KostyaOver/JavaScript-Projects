let textview = document.querySelector('.textview');


function insert(num) {
    textview.value += num;
    textview.focus();
}

function equal() {
    if(textview.value) {
        textview.value = eval(textview.value);
    }
    
}

function clean() {
    textview.value = '';
}