const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, "data.json")
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
})

const newData = {
    "id": 1024,
    "isActive": true,
    "username": "johndoe87",
    "email": "john.doe@example.com",
}

fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
    if(err) throw err
    console.log("changed")
})