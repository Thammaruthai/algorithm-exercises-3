function findBookIndex(books, searchBook) {
  // Start coding here
  
  let start = 0;  
  let end = books.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (books[mid].title === searchBook) {
      return mid;
    }
    if (books[mid].title < searchBook) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  ตอบ Binary Search 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  ตอบ เพราะข้อมูลเรียงลำดับ
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ตอบ Log n เพราะ ตัดข้อมูลออกทีละครึ่ง
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
