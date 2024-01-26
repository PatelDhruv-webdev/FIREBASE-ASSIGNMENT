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