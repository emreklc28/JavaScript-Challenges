/**  Yaş Hesaplama */
function calculateAge(date) {
    const birthDate = new Date(date);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Eğer doğum günü henüz gelmediyse yaşı bir azalt
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log(calculateAge("1990-06-15"));
console.log(calculateAge("2000-12-25"));
console.log(calculateAge("1985-03-10"));

/**Bir Tarihin Hafta Sonu Olup Olmadığını Kontrol Etme */

function isWeekend(date) {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
  }
  
  console.log(isWeekend("2020-01-18")); // true (Cumartesi)
  console.log(isWeekend("2020-01-19")); // true (Pazar)
  console.log(isWeekend("2020-01-20")); // false (Pazartesi)
  console.log(isWeekend("March 16, 2025")); // true (Pazar)
  console.log(isWeekend("2025/03/17")); // false (Pazartesi)
  

