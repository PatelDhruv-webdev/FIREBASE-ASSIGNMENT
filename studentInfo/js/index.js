$(document).ready(function () {
   init();
});

function init() {
    readStudentInfoOnce();
    readStudentInfoOn();
    $("#btnSave").on("click", btnSave_click );
    $("#btnUpdateAndroid").on("click", btnUpdateAndroid_click );
    $("#btnUpdateFirebase").on("click", btnUpdateFirebase_click );
    $("#btnDelete").on("click", btnDelete_click );
    $("#btnSetNull").on("click", btnSetNull_click );
    $("#btnCreateFaculty").on("click", btnCreateFaculty_click );
    $("#viewFaculties").on("pageshow", viewFaculties_pageshow);
    listenforFacultyAdded();
}

function btnSave_click() {
   writeFirstName();
}

function btnUpdateAndroid_click() {
    updateAndroidExp();
}

function btnUpdateFirebase_click() {
    updateFirebaseExp();
}

function btnDelete_click() {
    deleteData();
}

function btnSetNull_click() {
    setNullData();
}

function btnCreateFaculty_click() {
    createFaculty();

}

function viewFaculties_pageshow() {
    listExamples.readAllFaculties();
}





















