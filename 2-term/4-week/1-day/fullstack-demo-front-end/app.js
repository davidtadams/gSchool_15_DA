$(document).ready(function(){
    getStudentData().then(function(studentData){
        var studentList = buildStudentList(studentData);
        renderStudentList(studentList);
    }).catch(function(error){
        console.error("Couldn't get student data", error);
    });
    attachNewStudentHandler();
});

function buildStudentList(studentData){
    return studentData.students.map(function(student, index){
        return convertStudentObjectToListItem(student);
    });
}

function convertStudentObjectToListItem(student){
    var studentNameContainer = document.createElement("p");
    var studentName = document.createTextNode([student.first_name, student.last_name].join(" "));
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

function renderStudentList(studentList){
    $(".student-list").append(studentList);
}

function getStudentData(){
    return new Promise(function(resolve, reject){
        $.ajax({
            method: "GET",
            url: "https://regly-test.herokuapp.com/students",
            success: resolve,
            error: reject
        });
    });
}

function attachNewStudentHandler(){
    $(".new-student-form").submit(function(event){
        event.preventDefault();
        
        var formData = getNewStudentData($(this));
        createNewStudent(formData).then(function(newStudent){
            addNewStudentToList(newStudent);
            flashCreationMessage();
        }).catch(function(error){
            console.error("Unable to add student", error);
        });
    });    
}

function getNewStudentData(form){
    var formValues = form.serializeArray();
    return formValues.reduce(function(formattedStudent, student){
        formattedStudent[student.name] = student.value;
        return formattedStudent;
    }, {});
}

function createNewStudent(formData){
    return new Promise(function(resolve, reject){
        $.ajax({
            method: "POST",
            url: "https://regly-test.herokuapp.com/students",
            data: formData,
            success: resolve,
            error: reject
        });
    });
}

function addNewStudentToList(student){
    var studentListItem = convertStudentObjectToListItem(student);
    $(".student-list").append(studentListItem);
}

function flashCreationMessage(){
    $(".creation-message").fadeIn(300).delay(2000).fadeOut(300);
}
