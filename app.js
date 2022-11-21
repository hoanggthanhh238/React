
//Bài 4
// import {logger2} from './logger/index.js';

// import * as constants from './constants.js'

// logger2('luuthanhhoang',constants.TYPE_WARN);

////////////////////////////////////////////////////////////////////////

//Bài 5
// var name = 'LuuThanhHonag';
// var price = 1000;
// //Tạo object với 2 thuộc tính trên
// var course = {
//     name,  // <=> name: name,
//     price , // <=> price: price
//     getName() {
//         return name;
//     }
// };
// console.log(course);

//Dùng giá trị của biến làm tên của 1 trường trong object
// var fieldName = 'This_is_name: ';
// var fieldPrice = 'This_is_price: ';

// const course = {
//     [fieldName]: 'Lưu Thanh Hoàng',
//     [fieldPrice]: 1000
// };

// console.log(course);

///////////////////////////////////////////////////////////////////////////

//Bài 6
// "...paramas" là lấy những phần từ còn lại khi được truyền vào hàm
// function logger(a, b, c, ...paramas) {
//     console.log(paramas);
// };
// logger(1,2,3,4,5,6);

// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest.agre);
// };
// logger({
//     name: 'Lưu Thanh Hoàng',
//     price: 1000,
//     description: 'abc',
//     agre: '21'
// });

// Spread
// Nối mảng và object bằng spread
// var mang1 = ['Hoàng', 'Thắng', 'Nam', 'H', 'O', 'A', 'N', 'G'];
// var mang2 = ['Thụ', 'Ngọc'];

// var mang3 = [...mang1, ...mang2];
//console.log(mang3);

// function logger([a, ...bien]) {
//     console.log(a);
//     //console.log(bien);
//     for( var i=0; i<bien.length; i++)
//     {
//         console.log(bien[i]);
//     }
// }
// // function logger(a,b) {
// //     console.log(a, b);
// // }
// logger(mang1);


// var obj1 = ({
//     ten_dem: 'Thanh',
//     ten: 'Hoàng'
// });

// var obj2 = ({
//     ho: 'Lưu'
// });

// var obj3 = ({
//     ...obj1,
//     ...obj2
// })

// console.log(obj3);

///////////////////////////////////////////////////////////////////////////

//Bài 7

//Lấy ra một phần từ từ bảng hoặc obj
// var mang1 = ['Hoàng', 'Thắng', 'Nam', 'H', 'O', 'A', 'N', 'G'];
// var mang2 = ['Thụ', 'Ngọc'];

// var [a, , , b, , ...c] = mang1;
// console.log(a, b, c);

var obj1 = ({
    ho: 'Lưu',
    ten_dem: 'Thanh',
    ten: 'Hoàng',
    nganh: {
        ten: 'CNTT',
        lop: 'CT2301M'
    },
    description: 'Có'
});
// biến lấy ra phải cùng tên với thuộc tính, nếu khác -> undefine
var {ten: tennguoi/*Đổi tên để tránh bị trùng tên biến*/, nganh: {ten},description = 'Không'} = obj1;
console.log(tennguoi,ten);
console.log(description);

