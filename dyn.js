let students = [
    {name:"Sofie", age:25, course: "Webudvikler"},
    {name:"Lukas", age:22, course: "Mediegrafiker"},
    {name:"Emil", age:28, course: "Teknisk designer"},   
];

let studentListDiv = document.querySelector(".student-list");

students.forEach(s => 
{
    const studentDiv = document.createElement("div");
    studentDiv.textContent = s.name + ", Alder:" + s.age + ", Uddannelse:" + s.course;
    studentListDiv.appendChild(studentDiv);
}


)