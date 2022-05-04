const inputs = document.querySelectorAll('.input');

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});