let student = { name: "", lastName: "" };
let table = {};

student.name = prompt("Введіть ім'я");
student.lastName = prompt("Введіть прізвище");

let subject, mark;

while (true) {
  subject = prompt("Введіть назву предмету");
  if (subject === null || subject.toLowerCase() === "cancel") {
    break;
  }
  mark = prompt(`Введіть оцінку за предмет ${subject}:`);
  table[subject] = parseInt(mark);
}

let badMarks = 0;
let totalMarks = 0;
let numSubjects = 0;
for (let subject in table) {
  numSubjects++;
  totalMarks += table[subject];
  if (table[subject] < 4) {
    badMarks++;
  }
}
let averageMark = totalMarks / numSubjects;

// Вивід результатів
if (badMarks > 0) {
  console.log(
    `Студент має ${badMarks} поганих оцінок і не переведений на наступний курс.`
  );
} else {
  console.log("Студент переведено на наступний курс.");
}

if (averageMark > 7) {
  console.log("Студенту призначено стипендію.");
}
