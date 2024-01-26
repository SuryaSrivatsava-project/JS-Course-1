// Object Destructuring

const course = {
    courseName:'JavaScript',
    price:"999",
    instructor:'hitesh'
}
// destructure and rename
const {instructor:ins} = course;
console.log(ins)

// API's
// Now all values come as JSON Format
// Example of JSON

// {
//     "name":'Surya',
//     "courseName":'JavaScript',
//     "courseID":'JS101',
//     "price":'free'
// }

// or

// [
//     {
//             "name":'Surya',
//             "courseName":'JavaScript',
//             "courseID":'JS101',
//             "price":'free'
//     },
//     {
//     "name":'Surya',
//     "courseName":'JavaScript',
//     "courseID":'JS101',
//     "price":'free'
// }     
// ]


// Random User me API

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Oona",
//           "last": "Oja"
//         },
//         "location": {
//           "street": {
//             "number": 9863,
//             "name": "Pirkankatu"
//           },
//           "city": "Juankoski",
//           "state": "Central Ostrobothnia",
//           "country": "Finland",
//           "postcode": 54177,
//           "coordinates": {
//             "latitude": "-23.8398",
//             "longitude": "67.8545"
//           },
//           "timezone": {
//             "offset": "-5:00",
//             "description": "Eastern Time (US & Canada), Bogota, Lima"
//           }
//         },
//         "email": "oona.oja@example.com",
//         "login": {
//           "uuid": "ba04f931-732a-4c5d-928d-0c7eb4207715",
//           "username": "smallbear778",
//           "password": "lucky13",
//           "salt": "mkMYt21j",
//           "md5": "255126c45366a796f8b6abfcad73f52e",
//           "sha1": "502e8e1d38734987c4333b97c574f581d6fbe8df",
//           "sha256": "3c5a47763bb728cdd85c98b697d37a7b0c5ad2b27368c74e435a93b4961f5399"
//         },
//         "dob": {
//           "date": "1972-07-30T20:22:59.704Z",
//           "age": 51
//         },
//         "registered": {
//           "date": "2020-04-15T05:31:18.555Z",
//           "age": 3
//         },
//         "phone": "04-104-403",
//         "cell": "048-741-93-48",
//         "id": {
//           "name": "HETU",
//           "value": "NaNNA472undefined"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/women/68.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
//         },
//         "nat": "FI"
//       }
//     ],
//     "info": {
//       "seed": "2b345dc3821281a4",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }