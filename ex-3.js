function sortByRating(shops) {
  // Start coding here


  // ลูปซ้อนลูป
  //เอาค่าน้อยไปไว้ทางขวาทุดก่อน อันต่อมาค่อยไปวาง ขวาสุด -j
  for (let j = 0; j < shops.length - 1; j++) {
    for (let i = 0; i < shops.length - j - 1; i++) {
      //console.log(j, i);
      if (shops[i].rating < shops[i + 1].rating) {
        let temp = shops[i];
        shops[i] = shops[i + 1];
        shops[i + 1] = temp;
        //console.log(shops);
      }
    }
  }
  return shops;
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  ตอบ Bubble Sort
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  ตอบ น่าจะเรียงข้อมูลง่ายที่สุด
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  ตอบ n^2 เพราะเป็น nested loop  
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
