let myArray = ["Kunle", "Sola", "Fola", "Kunle"]
let myArray2 = [
    { name: "Kunle", age: 300, school: "SQI" },
    { name: "Opeyemi", age: 700, school: "LAUTECH" },
    { name: "Kunle", age: 400, school: "LAUTECH" },
]
// myArray.map((item,index,arr)=>{
//     console.log(arr)
// })
let filteredArray = myArray2.filter((item) => item.name == "tolu")
// console.log(filteredArray)
// if(filteredArray){
//     console.log("Hello")
// }else{
//     console.log("yola")
// }
// let foundArray = myArray2.find((item)=>item.name=="Kunle")
// console.log(foundArray)



const showDetails = () => {
    myArray2.map((item, index) => {
        disp.innerHTML += `<div>${index + 1} ${item.name} ${item.age} ${item.school} <button onclick="deleteItem(${index})">Delete</button> <button onclick="editItem(${index})">Edit</button> </div>`
    })
}
const deleteItem = (index) => {
    console.log(index)
    let filteredArray = myArray2.filter((item, ind) => index != ind)
    myArray2 = filteredArray
    disp.innerHTML = ""
    showDetails()
}
const editItem = (index) => {
    myArray2[index] = { name: "sade", age: 1000, school: "Emilokan High School" }
    disp.innerHTML = ""
    showDetails()
}

let lastArray = [
    { name: "sola", age: 300, note: [] }
]