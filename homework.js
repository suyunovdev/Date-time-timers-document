// 1. Yil qabul qiladigan va u togri keladigan asrni qaytaradigan function yarating: 

//   centuryFromYear(2005) ➞ 21

//   centuryFromYear(1950) ➞ 20

//   centuryFromYear(1900) ➞ 19


                        // function centuryFromYear(year) {
                        //     return Math.ceil(year / 100);
                        // }

                        // console.log(centuryFromYear(2005)); 
                        // console.log(centuryFromYear(1950)); 
                        // console.log(centuryFromYear(1900)); 


// 2. Raqamni (1 dan 12 gacha) oladigan va unga mos keladigan oy nomini string sifatida qaytaradigan funksiya yarating. Misol uchun, agar sizga kirish sifatida 3 berilgan bo'lsa, funktsiyangiz "mart"ni qaytarishi kerak, chunki mart 3-oydir.

// monthName(3) ➞ "March"

// monthName(12) ➞ "December"

// monthName(6) ➞ "June"


                            // function monthName(month) {
                            //     const months = [
                            //         "January",
                            //         "February",
                            //         "March", 
                            //         "April", 
                            //         "May", 
                            //         "June",
                            //         "July",
                            //         "August",
                            //         "September",
                            //         "October",
                            //         "November",
                            //         "December"
                            //     ];
                            //     return months[month - 1];
                            // }


                            // console.log(monthName(3));  
                            // console.log(monthName(12)); 
                            // console.log(monthName(6));  





// 3. Argument sifatida yil va oylarni oladigan funktsiya yarating, so'ngra n-oy o'tgandan keyin qaysi yil bo'lishini qaytaring:

// afterNMonths(2020, 24) ➞ 2022 // 24 oy == 2 yil. 2020 + 2 yil = 2022

// afterNMonths(1832, 2) ➞ 1832

// afterNMonths(1444, 60) ➞ 1449



                            // function months(year, months) {
                            //     const totalYears = Math.floor(months / 12);
                            //     const finalYear = year + totalYears;
                            //     return finalYear;
                            // }

                            // console.log(months(2020, 24)); 
                            // console.log(months(1832, 2));   
                            // console.log(months(1444, 60));  



// 4. 00/SS/YYYY sifatida formatlangan sanani YYYYSSOO ga aylantiruvchi funksiya yarating(O - oy. S - sana. Y - yil):

// formatDate("11/12/2019") ➞ "20191211"

// formatDate("12/31/2019") ➞ "20193112"

// formatDate("01/15/2019") ➞ "20191501"



                            // function formatDate(date) {
                            //     const parts = date.split("/");
                            //     const formattedDate = parts[2] + parts[0] + parts[1];
                            //     return formattedDate;
                            // }

                            // console.log(formatDate("11/12/2019")); 
                            // console.log(formatDate("12/31/2019")); 
                            // console.log(formatDate("01/15/2019"));






// 5. Uchta qiymatni oladigan funksiya yarating:
// h: soat
// m: daqiqa
// s: soniya

// Orasida eng uzun vaqtni topib qaytaradigan function yarating:
// longestTime(1, 59, 3598) ➞ 1; // 1 = soat. 59 = daqiqa. 3598 = sekun. Orasida eng uzun vaqt 1 soat. Qolganlari 1 soatdan kam. Shu sabab function 1 qaytargan.

// longestTime(2, 300, 15000) ➞ 300

// longestTime(15, 955, 59400) ➞ 59400




                            // function longestTime(h, m, s) {
                            //     const seconds = h * 3600 + m * 60 + s;
                            //     const maxTime = Math.max(h, m, s);
                            //     return maxTime;
                            // }
                            
                            // console.log(longestTime(1, 59, 3598));
                            // console.log(longestTime(2, 300, 15000));
                            // console.log(longestTime(15, 955, 59400));
                            