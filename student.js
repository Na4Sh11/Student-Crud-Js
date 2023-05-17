let StudentData = [];

document.querySelector(".click").addEventListener("click", function () {
  let studentID = document.querySelector(".sid").value;
  let firstName = document.querySelector(".fname").value;
  let lastName = document.querySelector(".lname").value;
  let dob = document.querySelector(".dob").value;
  let email = document.querySelector(".mail").value;
  let grade = document.querySelector("#standard").value;
  let division = document.querySelector("#division").value;
  if (
    !studentID ||
    !firstName ||
    !lastName ||
    !dob ||
    !email ||
    !grade ||
    !division
  ) {
    alert("Please Fill All The Fields...");
  } else {
    let ExistingData = localStorage.getItem("StudentData");

    if (ExistingData) {
      StudentData = JSON.parse(ExistingData);
    }
    let NewStudent = {
      id: studentID,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      grade: grade,
      division: division,
    };
    StudentData.push(NewStudent);
    localStorage.setItem("StudentData", JSON.stringify(StudentData));
    alert("Student created!!!");
  }
});

/*StudentData = JSON.parse(localStorage.getItem("StudentData"));
for (let i = 0; i < StudentData.length; i++) {
  console.log(StudentData[i].id);
}*/
///////////////////////////////////////////////
const container = document.querySelector("#section--2");
var selectedstudent;

document.querySelector(".find").addEventListener("click", function () {
  let NoStudent = {
    id: 0,
    firstName: "NO RECORDS",
    lastName: "NO RECORDS",
    dob: "NO RECORDS",
    email: "NO RECORDS",
    grade: "NO RECORDS",
    division: "NO RECORDS",
  };
  var flag = 0;
  var j = 0;
  var iid = document.querySelector(".s").value;
  StudentData = JSON.parse(localStorage.getItem("StudentData"));
  for (let i = 0; i < StudentData.length; i++) {
    if (StudentData[i].id == iid) {
      flag++;
      localStorage.setItem("Fdata", JSON.stringify(StudentData[i]));
      localStorage.setItem("sindex", j);
    }
    j++;
  }
  console.log(flag);
  if (flag == 0) {
    localStorage.setItem("Fdata", JSON.stringify(NoStudent));
  }
});

var FindStudent = JSON.parse(localStorage.getItem("Fdata"));
if (FindStudent.id == 0) {
  var html = '<br><div class="dip2">' + "No Records Found" + "</div>";
  container.insertAdjacentHTML("beforeend", html);
} else {
  var disptext =
    "<br>Student ID : " +
    FindStudent.id +
    "<br>FirstName : " +
    FindStudent.firstName +
    "<br>LastName : " +
    FindStudent.lastName +
    "<br>DOB : " +
    FindStudent.dob +
    "<br>Email : " +
    FindStudent.email +
    "<br>class : " +
    FindStudent.grade +
    "<br>Section : " +
    FindStudent.division;
  var html =
    '<div class="dip1">Record Found</div><br><div class="dip">' + disptext;
  container.insertAdjacentHTML("beforeend", html);
  var element1 = document.getElementById("update");
  element1.style.opacity = 1;
  var element2 = document.getElementById("delete");
  element2.style.opacity = 1;
  var element3 = document.getElementById("upddiv");
  element3.style.opacity = 1;
}

function updateStudent() {
  var newdata = JSON.parse(localStorage.getItem("UpdateData"));
  StudentData = JSON.parse(localStorage.getItem("StudentData"));
  var ind = localStorage.getItem("sindex");
  StudentData[ind] = newdata;
  localStorage.setItem("StudentData", JSON.stringify(StudentData));
  alert("Record Updated!!!");
}

document.querySelector(".upd").addEventListener("click", function () {
  let firstName = document.querySelector(".ufname").value;
  let lastName = document.querySelector(".ulname").value;
  let dob = document.querySelector(".udob").value;
  let email = document.querySelector(".umail").value;
  let grade = document.querySelector("#ustandard").value;
  let division = document.querySelector("#udivision").value;
  if (!firstName || !lastName || !dob || !email || !grade || !division) {
    alert("Please Fill All The Fields...");
  } else {
    StudentData = JSON.parse(localStorage.getItem("StudentData"));
    var ind = localStorage.getItem("sindex");
    let udata = {
      id: StudentData[ind].id,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      grade: grade,
      division: division,
    };
    localStorage.setItem("UpdateData", JSON.stringify(udata));
    updateStudent();
  }
});

// Deleting the Record...

function deleterecord() {}
document.querySelector(".del").addEventListener("click", function () {
  StudentData = JSON.parse(localStorage.getItem("StudentData"));
  var ind = localStorage.getItem("sindex");
  var choice = confirm("Are you sure deleting the record?");
  if (choice == 1) {
    StudentData[ind].id = 0;
    StudentData.splice(ind, 1);
    localStorage.setItem("StudentData", JSON.stringify(StudentData));
    alert("Student Record Deleted !!!");
  }
});

var place = document.querySelector("#section--4");
StudentData = JSON.parse(localStorage.getItem("StudentData"));
for (let i = 0; i < StudentData.length; i++) {
  var html =
    "<div id='disp'>" +
    StudentData[i].id +
    "\t" +
    StudentData[i].firstName +
    "\t" +
    StudentData[i].lastName +
    "\t" +
    StudentData[i].dob +
    "\t" +
    StudentData[i].email +
    "\t" +
    StudentData[i].grade +
    "\t" +
    StudentData[i].division +
    "</div>";
  place.insertAdjacentHTML("beforeend", html);
}
