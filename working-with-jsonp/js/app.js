body = document.querySelector(`body`);
studentOneFirstName = document.getElementById(`student1-first-name`);
studentOneLastName = document.getElementById(`student1-last-name`);
studentTwoFirstName = document.getElementById(`student2-first-name`);
studentTwoLastName = document.getElementById(`student2-last-name`);
// footer = document.createElement(`footer`);
// textNode = document.createTextNode(`I am a footer`);
// footer.appendChild(textNode);
// body.appendChild(footer);

function grades(data) {
    studentOneFirstName.textContent = data.student[0].name.first;
    studentOneLastName.textContent = data.student[0].name.last;
    studentTwoFirstName.textContent = data.student[1].name.first;
    studentTwoLastName.textContent = data.student[1].name.last;
    console.log(`By the way, there are ${data.student.length} students in the file`);
}

script = document.createElement(`script`);
script.setAttribute(`src`, `data/data.json`);

body.appendChild(script);
