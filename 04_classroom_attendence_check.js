// ### **4. Classroom Attendance Check**

// A class records names of students present for each period:

// ```
// ["Asha", "Ravi", "Neel"]
// ["Ravi"]
// ["Asha", "Meera"]
// ```

// Determine which distinct students attended at least once.

const findAttendedStudent = (inputArray) => {
  const flatArray = inputArray.flat();
  return flatArray.filter((element, index) => flatArray.indexOf(element) === index);
}

console.log(findAttendedStudent([["pradip", "rani", "sayan"], ['pradip', 'rakesh'], ["rani", 'shivaji']]));
