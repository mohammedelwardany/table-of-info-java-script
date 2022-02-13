var number_of_persons = prompt("tell me number of persons!");
if (isFinite(number_of_persons)) {
    var persons = Number(number_of_persons);
    document.write("<table>");
    document.write("<tr><th>name</th><th>age</th></tr>");
    for (var n = 1; n <= persons; n++) {
        do { var person_name = prompt("tell me name of person!"); }
        while (isNaN(person_name) && person_name.length < 2 || person_name.length > 11);
        do { var person_age = prompt("tell me age of person!"); }
        while (!isFinite(person_age) && person_age < 10 || person_age > 60);
        document.write("<tr><td>", person_name, "</td><td>", person_age, "</td></tr>");
    }
    document.write("</table>");
}



