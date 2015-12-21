$(document).ready(function() {
  getStudentData().then(function(studentData) {
    var studentList = buildStudentList(studentData);
    renderStudentList(studentList);
  }).catch(function(error) {
    console.log("Couldn't get student data", error);
  });
});

function buildStudentList(studentData) {
  return studentData.students.map(function(student, index) {
    return convertStudentObjectToListItem(student);
  });
}

function convertStudentObjectToListItem(student) {
  var studentNameContainer = document.createElement("p");
  var studentName = document.createTextNode([student.first_name, student.last_name].join(' '));
  studentNameContainer.appendChild(studentName);

  var studentDOBContainer = document.createElement("p");
  var studentDOB = document.createTextNode(student.date_of_birth);
  studentDOBContainer.appendChild(studentDOB);

  var studentEmailContainer = document.createElement("p");
  var studentEmail = document.createTextNode(student.email);
  studentEmailContainer.appendChild(studentEmail);

  var studentListItem = document.createElement("li");
  studentListItem.appendChild(studentNameContainer);
  studentListItem.appendChild(studentDOBContainer);
  studentListItem.appendChild(studentEmailContainer);

  return studentListItem;
}

function renderStudentList(studentList) {
  $('.student-list').append(studentList);
}

function getStudentData() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      method: "GET",
      url: "http://localhost:8000/students",
      success: resolve,
      error: reject
    });
  });
}
