'use strict'
// // // *****  Kintamųjų inicijavimas  ************************************************
// // console.log('*****  Kintamųjų inicijavimas  **************************');
// // // 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
// // const a1 = 123;
// //     console.log(a1);
// // const a2 = 456;
// //     console.log(a2);
// // const a3 = 789;
// //     console.log(a3);
// // const a4 = 123;
// //     console.log(a4);

// // // 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
// // const b1 = 'abcd';
// //     console.log(b1);
// // const b2 = 'qwertyuiop[]';
// //     console.log(b2);
// // const b3 = 'uvwxyz';
// //     console.log(b3);
// // const b4 = 'klmn';
// //     console.log(b4);


// // // 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
// const c1 = [1,2,3,4,5];
//     console.log(c1);
// const c2 = [6,7,8,9,0];
//     console.log(c2);
// const c3 = [10,11,12,13,14];
//     console.log(c3);

// // 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
// const d1 = ['a','b','c','d','e'];
//     console.log(d1);
// const d2 = ['fp','gr','hs','it','ju'];
//     console.log(d2);
// const d3 = ['kkk','llll','mmmmm','nnnnnnn','oooooooooo'];
//     console.log(d3);
// console.log('');


// // *****  Veiksmai su kintamaisiais  ************************************************
// console.log('*****  Veiksmai su kintamaisiais  **************************');
// // 5. Susumuoti visus skaičiaus tipo kintamuosius Rezultatą išvesti į console
// const sum1 = a1 + a2 + a3;
//     console.log(sum1);
// // 6. Susumuoti visus skaičiaus tipo kintamuosius 
// const sum2 = b1+' '+b2+' '+b3;
//     console.log(sum2);
// // 7. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5  
// const sum3 = c1[0]-c1[1]+c1[2]-c1[3]+c1[4];
//     console.log(sum3);
// // 8. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
// const sum4 = d1[4]+' '+d1[3]+' '+ d1[2]+' '+d1[1]+' '+d1[0];
//     console.log(sum4);
// console.log('');


// // *****  Skaičiaus tipo kintamųjų palyginimas  ************************************** 
// console.log('*****  Kintamųjų palyginimas  **************************');
// // Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “true”,
// //           jei sąlyga nėra tenkinama, išvesti sakinį “false”.
// // a. kuris didesnis?
// if (a1 > a2)   {console.log("true "+a1+' > '+a2)} else {console.log("false "+a1+' > '+a2)};
// // b. kuris mazesnis?
// if (a1 < a2)   {console.log("true "+a1+' < '+a2)} else {console.log("false "+a1+' < '+a2)};
// // c. ar jie lygus?
// if (a1 === a2) {console.log("true "+a1+' = '+a2)} else {console.log("false "+a1+' = '+a2)};
// // d. ar jie nelygus?
// if (a1 !== a2) {console.log("true "+a1+' =/= '+a2)} else {console.log("false "+a1+' =/= '+a2)};
// // e. kuris didesnis arba lygus
// if (a1 >= a2)   {console.log("true "+a1+' >= '+a2)} else {console.log("false "+a1+' >= '+a2)};
// // f. kuris mažesnis arba lygus
// if (a1 <= a2)   {console.log("true "+a1+' <= '+a2)} else {console.log("false "+a1+' <= '+a2)};
// console.log('');

// // *****  Išvesti teksto tipo kintamųjų ilgius  ***********************
// console.log('*****  Išvesti teksto tipo kintamųjų ilgius  ***************');
// console.log('kintamoojo b1 = "'+b1+'" ilgis '+b1.length+' simboliai');
// console.log('kintamoojo b2 = "'+b2+'" ilgis '+b2.length+' simboliai');
// console.log('kintamoojo b3 = "'+b3+'" ilgis '+b3.length+' simboliai');
// console.log('');

// // *****  Tarpusavyje palyginti teksto tipo kintamųjų ilgius  ***********************
// console.log('*****  Tarpusavyje palyginti teksto tipo kintamųjų ilgius  *****');
// // sukuriamos konstantas, kuriu reiksmes yra teksto tipo kintamųjų ilgiai
// const b1len=b1.length;
// const b2len=b2.length;
// const b3len=b3.length;
// const b4len=b4.length;
// console.log('Ar pirmas kintamasis turi daugiau simbolių už antrąjį?');
// if (b1len > b2len) 
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau simboliu uz b2 = "'+b2+'" ilgis '+b2len)}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b2 = "'+b2+'" ilgis '+b2len)};
// if (b2len > b3len) 
//     {console.log('Tiesa, b2 = "'+b2+'" ilgis '+b2len+' turi daugiau simboliu uz b2 = "'+b3+'" ilgis '+b3len)}
//         else 
//     {console.log('Klaida, b2 = "'+b2+'" ilgis '+b2len+' turi maziau simboliu uz b2 = "'+b3+'" ilgis '+b3len)};
// if (b1len > b3len) 
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau simboliu uz b3 = "'+b3+'" ilgis '+b3len)} 
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b3 = "'+b3+'" ilgis '+b3len)};
// console.log('');

// console.log('Ar pirmas kintamasis turi mažiau simbolių už antrąjį?');
// if (b1len < b2len)
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b2 = "'+b2+'" ilgis '+b2len)}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau simboliu uz b2 = "'+b2+'" ilgis '+b2len)};
// if (b2len < b3len) 
//     {console.log('Tiesa, b2 = "'+b2+'" ilgis '+b2len+' turi maziau simboliu uz b2 = "'+b3+'" ilgis '+b3len)}
//         else 
//     {console.log('Klaida, b2 = "'+b2+'" ilgis '+b2len+' turi daugiau simboliu uz b2 = "'+b3+'" ilgis '+b3len)};
// if (b1len < b3len) 
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b3 = "'+b3+'" ilgis '+b3len)}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau simboliu uz b3 = "'+b3+'" ilgis '+b3len)} 
// console.log('');

// console.log('Ar kintamieji lygūs?');
// if (b1len === b2len)
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' ir b2 = "'+b2+'" ilgis '+b2len+' turi vienoda simboliu kieki')}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' ir b2 = "'+b2+'" ilgis '+b2len+' turi skirtinga simboliu kieki')};
// if (b1len === b4len)
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' ir b4 = "'+b4+'" ilgis '+b4len+' turi vienoda simboliu kieki')}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' ir b4 = "'+b4+'" ilgis '+b4len+' turi skirtinga simboliu kieki')};
// console.log('');

// console.log('Ar kintamieji nelygūs?');
// if (b1len !== b2len)
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' ir b2 = "'+b2+'" ilgis '+b2len+' turi skirtinga simboliu kieki')}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' ir b2 = "'+b2+'" ilgis '+b2len+' turi vienoda simboliu kieki')};
// if (b1len !== b4len)
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' ir b4 = "'+b4+'" ilgis '+b4len+' turi skirtinga simboliu kieki')}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' ir b4 = "'+b4+'" ilgis '+b4len+' turi vienoda simboliu kieki')}
// console.log('');

// console.log('Ar pirmas kintamasis turi daugiau arba lygiai simbolių su antruoju?');
// if (b1len >= b2len) 
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau arba lygiai simboliu su b2 = "'+b2+'" ilgis '+b2len)}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b2 = "'+b2+'" ilgis '+b2len)};
// if (b1len >= b4len) 
//     {console.log('Tiesa, b1 = "'+b1+'" ilgis '+b1len+' turi daugiau arba lygiai simboliu su b4 = "'+b4+'" ilgis '+b4len)}
//         else 
//     {console.log('Klaida, b1 = "'+b1+'" ilgis '+b1len+' turi maziau simboliu uz b4 = "'+b4+'" ilgis '+b4len)};
// console.log('');

// *****  Išvesti sąrašo tipo kintamųjų ilgius ****************************************************************




// CIKLAS *************************************************************************************


// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// // intervalas nuo -18 iki 18
// const nuo = -18;
// const iki = 18;
// const dalikliai = [3, 5, 7, 99];
// const dalLen = dalikliai.length;
// // // console.log (dalLen);
// // let kiekis = 0;
// // console.log("dalikliu masyvas")
// // for (let i=0; i<dalLen; i++){ console.log(dalikliai[i]) }

// // // Mano variantas   *****   NEEFEKTYVIAUSIAS metodas   **********************************

// // for(let i=0; i<dalLen; i++ ){
// //     let sk1 = 0;
// //     for(let j=nuo; j<=iki; j++ ){
// //         let dl1 = j / dalikliai[i]
// //         let dl2 = Math.floor(dl1)
// //         // let dl2 = j % i  //  % duoda dalybos liekana:  8 % 3 = 2
// //         // console.log(i+' '+j+'    '+dl1+'  '+dl2+' '+sk1);
// //         if (dl1 === dl2) kiekis++
// //     console.log('Skaičiai intervale nuo '+nuo+' iki '+iki+' iš '+dalikliai[i]+" be liekanos dalinasi "+sk1+" skaičių")
// //     }
// // }
// // **********************NEEFEKTYVIAUSIO metodo pabaiga   **********************************

// console.log('')
// console.log('')
// console.log('')

// // Rimanto variantas   *****   NEEFEKTYVIAUSIAS metodas   **********************************
// const daliklis = 3;
// console.log('NEEFEKTYVIAUSIAS metodas')
// for (let i=nuo; i<=iki; i++){
//         if ( i % daliklis === 0)
//             kiekis++
//     // console.log('i = '+i+ '   kiekis = '+kiekis)
// }
// console.log ('Skaiciu intervale tarp '+nuo+' ir '+iki+' is '+daliklis+' be liekanos dalinasi '+kiekis+' skaiciu');

// // **********************NEEFEKTYVIAUSIO metodo pabaiga   **********************************


// function sumavimas( pirmas, antras ){
//     return pirmas+antras
// }
// console.log(sumavimas (7,5))
// console.log(sumavimas (8,6,99))
// console.log(sumavimas (486,321))
// console.log(sumavimas (9))

// function sveikinu (name){
//     return name + ', buk sveikas'
// }
// console.log(sveikinu('Jonai'))
// console.log(sveikinu('Petrai'))
// console.log(sveikinu('Rimantai'))
// console.log(sveikinu('Vidai'))

// // ****************************************************
// // 
// // function dalikliuKiekis (nuo, iki, daliklis){
//     // let kiekis = 0  
//     // const galas = match.floor(iki / daliklis) + 1
//     // const pradzia = match.floor (nuo / daliklis) + 1
//     // kiekis = galas - pradzia;
//     // if ( nuo % daliklis === 0){
//         // kiekis++
//     // }
//     // const ats = console.log ('Skaiciu intervale tarp '+nuo+' ir '+iki+' is '+daliklis+' be liekanos dalinasi '+kiekis+' skaiciu');
//     // return ats;
// // }
// // console.log( dalikliuKiekis(0, 12, 3) );

// // ************************************************
// // funkciju tipai

// // function
// // 5
// // 'asdsdf'
// // []
// // true
// // false
// // null

// function tusciaFunkcija (){
//     return false;
// }
// console.log( tusciaFunkcija ())

// // *******************************************************************************************
// //  gavus kintamuosius funkcijai, atlikti visus imanomus patikrinimus su gautais kintamaisiais
// //  uzduoties logika
//     // jei ne - grazinti klaidos pranesimus
// // grazinti rezultata

// function daugyba(pirmas, antras){
//     if (typeof(pirmas) !== 'number')
//         return 'ERROR: pirma reiksme ne normalus skaicius'
//     if (typeof(antras) !== 'number')
//         return 'ERROR: antra reiksme ne normallus skaicius'
//     // if (isFinite(pirmas)) === false || typeof(pirmas) !== 'number'{
//         // return 'ERROR: pirmas kintamasis ne normalus skaicius'
//     // }

//     return pirmas * antras
// }
// // console.log(daugyba (9,9))
// // console.log(daugyba ('abc','def'))
// // console.log(daugyba ('10',10))
// // console.log(daugyba ('10','15'))
// // console.log(daugyba ([58],'4'))
// // console.log(daugyba (true, false ))
// // console.log(daugyba (true, 99 ))
// // console.log(daugyba (true, 88 ))
// // console.log(daugyba (5, null ))
// // console.log(daugyba ('abc', null ))
// // console.log(daugyba (none, null )) duoda sistemine klaida

// console.log("***************************************************")
// console.log("***     skaitmenu kiekis skaiciuje  (done)      ***")
// console.log("***************************************************")

// function skaitmenuKiekisSkaiciuje(number){
//     if(typeof(number)!== 'number'||
//         isFinite(number)=== false){
//         return "Pateikta netinkamo tipo reikšmė.";
//     }
//         return (''+number).length;
// }
// console.log (skaitmenuKiekisSkaiciuje(true))
// console.log (skaitmenuKiekisSkaiciuje('asddfg'))
// console.log (skaitmenuKiekisSkaiciuje(NaN))
// console.log (skaitmenuKiekisSkaiciuje(5))
// console.log (skaitmenuKiekisSkaiciuje(781))
// console.log (skaitmenuKiekisSkaiciuje(987654321))
// console.log("****   pabaiga   ****")


// console.log("***************************************************")
// console.log("***     didziausias skaicius sarase     nebaigtas        ***")
// console.log("***************************************************")

// function didziausiasSkaiciusSarase(number){
//         if(typeof(number)!== 'number'|| isFinite(number)=== false){
//         return "Pateikta netinkamo tipo reikšmė.";
//     }

//     for( let i=0; i < sarasoIlgis; i++)
 
//     return ;
// }

// console.log (didziausiasSkaiciusSarase([1]),' - ', 1)

// console.log("********      !!! nebaigtas !!!             ********")


















// console.log('');
// console.log('');
console.log('');
console.log('Pabaiga');