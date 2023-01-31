
function darkmode(klass) {
    let elements = document.getElementsByClassName(klass), c = 'darkmode', element = null;
    //console.log(elements);
    for (let i = (elements.length - 1); i >= 0; --i) {
        element = elements[i];
        if (!element.className.includes(c)) {
            element.classList.add(c);
        } else {
            element.classList.remove(c);
        }
    }
}