const { json } = require("body-parser")
const { readFile, readFileSync } = require("fs")
const path = require("path")
const fs = require("fs").promises

let userInformation = {
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    gender: "Intermediate",
    username: ""
}
function setUserInformation(userdata) {
    userInformation = {
        ...userInformation, ...userdata
    }
}
setUserInformation({
    id: 5,
    firstName: "ankit"


})

async function userExists(username) {

    try {
        let data = readFileSync(path.join("MongoDbFake", "Users.txt")).toLocaleString
        console.log(data)
        let arrayTeam = ""
        let mainArray = []
        for (word in data) {
            console.log(data[word])
            if (data[word] === "\n") {
                mainArray.push(arrayTeam)
                arrayTeam = ""
            }
            else {
                arrayTeam += data[word]
            }
        }
        console.log(mainArray)
    }
    catch (e) {
        console.log("error while reading the file", e)
    }
}

async function createUser() {
    try {
        await fs.appendFile(path.join("MongoDbFake", "Users.txt"),
            JSON.stringify(userInformation)
        )
    }
    catch (e) {
        console.log("Error while appending the user ")
    }
}
// createUser()
userExists()

