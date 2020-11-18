let x = 0;
let array = [];
let e = "<hr/>";
function add_element_to_array() {
    // array[x] = document.getElementById("txtValue").value;
    // x++;
    array.push(document.getElementById("txtValue").value);
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
    e = "<hr/>";
    document.getElementById("txtValue ").value = '';
}

function deleteItem () {
    array.pop();
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
    e = "<hr/>";
    // x--;
}
