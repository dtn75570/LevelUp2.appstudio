//Define the variables.
let userFirstName = prompt("Enter your first name")
let userName = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1)
let userState = prompt("Enter the state in 2 letters")
let string = userState
let stateUpperCase = string.toUpperCase()
let userTemperature = prompt("Enter temperature in Fahrenheit")
let userMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won’t need a hat, scarf, or gloves", "wear a less heavy coat .", "wear a light jacket and smile!"]

//Using if to identify the message
// Case: the state is NE and the temperature is under 32 degrees. 
if (userState == "NE" && userTemperature < 32) {
  NSB.MsgBox(`${userFirstName}, ${userMessages[0]}`)
//Case: the state is NE and the temperature is under 32 degrees and 50 degrees.
} else if (userState == "NE" && 32 > userTemperature < 50) {
  NSB.MsgBox(`${userFirstName}, ${userMessages[1]}`)
//Case: the state is FL and the temperature is between 32 and 50 degrees.
} else if (userState == "FL" && 32 > userTemperature <= 50) {
  NSB.MsgBox(`${userFirstName}, ${userMessages[2]}`)
//Case: the state is FL and the temperature is between 32 and 50 degrees.
} else if (userState == "FL" && 50 >= userTemperature <= 70) {
  NSB.MsgBox(`${userFirstName}, ${userMessages[3]}`);
}
