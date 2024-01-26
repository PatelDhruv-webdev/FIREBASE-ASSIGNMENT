function   readStudentInfoOnce(){
    console.log("In Read Student info once");
    //Write the code for reading the database
    //and populating the read page here
    firebase.database().ref('toms').child('studentInfo')
        .once('value',function (snapshot){
            if (snapshot.exists()) {
                var student = snapshot.val();
                console.log('KEY: ' + snapshot.key);
                console.log('VAL: ' + snapshot.val());

                console.log('VAL: ' + JSON.stringify(snapshot.val()));
                $("#txtStudentIdOnce").val(student.studentId);
               // $("#txtStudentIdOnce").val(snapshot.val().studentId);
                $("#txtFirstnameOnce").val(student.firstName);
                $("#txtLastnameOnce").val(student.lastName);
            }
        });
}
function   readStudentInfoOn(){
    console.log("In Read Student info on");
    firebase.database().ref('toms').child('studentInfo')
        .on('value',function (snapshot){
            if (snapshot.exists()) {
                var student = snapshot.val();
                $("#txtStudentIdOn").val(student.studentId);
                $("#txtFirstnameOn").val(student.firstName);
                $("#txtLastnameOn").val(student.lastName);
            }
        });
}
function writeFirstName(){
    //console.log("Clicked Save");
    //We are using set() here to set the FirstName with a new value
    var newFirstName= $("#txtFirstNameSet").val();
    firebase.database().ref('toms/studentInfo')
        .set({firstName: null}, (errs)=>{
            if(errs){
                console.error(errs);
            }
            else
            {
                console.log('Successfully set first name');
            }
        });
}

function updateAndroidExp(){
   // console.log("Clicked Update Android");
    //We are using update() here to update the Android experience with a new value
    var updatedAndroidExp= $("#txtAndroidExp").val();
    firebase.database().ref('toms/experience')
        .update({androidDev: updatedAndroidExp}, (errs)=>{
            if(errs){
                console.error(errs);
             }
            else
            {
                console.log('Successfully updated Android experience');
            }
        });
}

function updateFirebaseExp(){
    //console.log("Clicked Update Firebase");
    //We are using update() here to update the Firebase experience with a new value
    var updatedFirebaseExp= $("#txtFirebaseExp").val();
    var updatedAndroidExp= $("#txtAndroidExp").val();
    firebase.database().ref('toms/experience')
        .update({firebase: updatedFirebaseExp,androidDev:updatedAndroidExp}, (errs)=>{
            if(errs){
                console.error(errs);
            }
            else
            {
                console.log('Successfully updated Android & Firebase experience');
            }
        });
}

function   deleteData(){
    //console.log("Clicked Delete");
    firebase.database().ref('toms/goals/course')
        .remove((err)=>{
            if(err){
                console.error(err);
            }
            else
            {
                console.log('Successfully deleted course');
            }
        });
}

function   setNullData(){
   // console.log("Clicked Set Null");
    firebase.database().ref('toms/goals')
        .update({goals: null},(err)=>{
            if(err){
                console.error(err);
            }
            else
            {
                console.log('Successfully deleted program');
            }
        });
}


function   createFaculty(){
   //Create a faulty object with the data entered on the Add Faculty page
    var facultyFName = $("#txtFacultyFName").val();
    var facultyLName = $("#txtFacultyLName").val();
    var courseCode = $("#txtCourseCode").val();
    var courseName = $("#txtCourseName").val();
    var programCode = $("#txtProgramCode").val();
    var campus = $("#txtCampus").val();
    var phoneNumber = $("#txtPhone").val();
    var faculty = new Faculty(facultyFName,facultyLName,courseCode,courseName,programCode,campus,phoneNumber);
    listExamples.addFaculty(faculty);
}

function Faculty(facultyFName,facultyLName,courseCode,courseName,programCode,campus,phoneNumber)
{
    this.firstName=facultyFName;
    this.lastName=facultyLName;
    this.courseCode=courseCode;
    this.courseName=ourseName;
    this.programCode=programCode;
    this.campus=campus;
    this.phoneNumber=phoneNumber;
}

var listExamples={
    addFaculty: function (faculty){
        firebase.database().ref('toms/week03/faculty')
            .push(faculty,(err)=>{
                if(err){
                    console.error(errs);
                }
                else
                {
                    console.log('Successfully added a faculty using push');
                }
            });
        },
    readAllFaculties: function (){
        firebase.database().ref('toms/week03/faculty')
            .orderByValue()
            .on('value',(snapshot)=> {
                if(snapshot.exists())
                {
                    listExamples.listFaculties(snapshot);
                }
                else
                {
                    console.log('There are no faculties in the list');
                }
            } );
    },

    listFaculties: function (snapshot)
    {
        var lstFaculties = $("#lstViewFaculties");
        var htmlCode = "";

        snapshot.forEach((childSnapshot) => {
            var faculty = childSnapshot.val();
            htmlCode += `
                <li>
                    <h2>Faculty Id: ${childSnapshot.key}</h2>
                    <p>First Name: ${faculty.firstName}</p>
                    <p>Last Name: ${faculty.lastName}</p>
                    <p>Course Code: ${faculty.courseCode}</p>
                    <p>Course Name: ${faculty.courseName}</p>
                    <p>Program Code: ${faculty.programCode}</p>
                    <p>Campus: ${faculty.campus}</p>
                    <p>Phone Number: ${faculty.phoneNumber}</p>
                    </a>
                </li>
                `;
        });
        lstFaculties.html(htmlCode).listview("refresh");
    }
}


function listenforFacultyAdded()
{
    var facultyRef =  firebase.database().ref('toms/week03/faculty')
    facultyRef.orderByKey().limitToLast(1).on("child_added", function(snapshot) {
        var faculty = snapshot.val();
        console.log('Faculty added'+ snapshot.key);
        console.log(faculty);
    });
}

function listenforFacultyRemoved()
{
    var facultyRef =  firebase.database().ref('toms/week03/faculty')
    facultyRef.on("child_removed", function(snapshot) {
        var removedFaculty = snapshot.val();
        console.log('Faculty removed with the key:' + snapshot.key);
        console.log(removedFaculty);
    });
}












































