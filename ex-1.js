function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let index = 0; index < students.length; index++) {
    if (students[index] === searchStudent) {
      return index;
    }
  
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  ตอบ Linear Search
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  ตอบ เพราะ ข้อมูลไม่เรียงลำดับ 
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ตอบ O(n) เพราะ มีการวนลูปตามจำนวนข้อมูล
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
