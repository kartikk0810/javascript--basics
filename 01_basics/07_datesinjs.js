// let myDate = new Date;

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2025 , 6 , 10);
// let myCreatedDate = new Date(2025 , 6 , 10 , 16 , 30);
let myCreatedDate = new Date("07-10-2025");

// console.log(myCreatedDate.toLocaleString());


let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);

// `${newDate.getDate()} and the time is ${newDate.getTime()} `;

 newDate.toLocaleString('default',{
        weekday: 'long'
    
    })
    console.log(newDate);
    




