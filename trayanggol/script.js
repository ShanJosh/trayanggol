function determineTriangle(a, b, c) {
    if (a === b && b === c) {
        return "EQUILATERAL";
    } else if (a === b || b === c || a === c) {
        return "ISOSCELES";
    } else {
        return "SCALENE";
    }
}

function checkTriangle() {
    var a = parseFloat(document.getElementById("sideA").value);
    var b = parseFloat(document.getElementById("sideB").value);
    var c = parseFloat(document.getElementById("sideC").value);
    var resultParagraph = document.getElementById("result");

    if (a + b > c && a + c > b && b + c > a) {
        var triangleType = determineTriangle(a, b, c);
        resultParagraph.innerHTML = "The triangle is " + triangleType + ".";
    } else {
        resultParagraph.innerHTML = "These side lengths cannot form a valid triangle.";
    }
}

function resetForm() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    document.getElementById("result").innerHTML = "";
}
