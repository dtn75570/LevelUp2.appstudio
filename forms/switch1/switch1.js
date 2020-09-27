//Using switch to identify the message
// Case: the state is NE and the temperature is under 32 degrees
switch(true){
  case (stateUpperCase == 'NE' && userTemperature < 32):
    NSB.MsgBox(`${userName}, ${userMessages[0]}`)
    break
//Case: the state is NE and the temperature is under 32 degrees and 50 degrees.
  case (stateUpperCase == 'NE' && userTemperature > 32 && userTemperature <= 50):
    NSB.MsgBox(`${userName}, ${userMessages[1]}`)
    break
//Case: the state is FL and the temperature is between 32 and 50 degrees.
  case (stateUpperCase == 'FL' && userTemperature >= 32 && userTemperature <= 50):
    NSB.MsgBox(`${userName}, ${userMessages[2]}`)
    break
//Case: the state is FL and the temperature is between 32 and 50 degrees.
  case (stateUpperCase == 'FL' && userTemperature >= 50 && userTemperature <= 70):
    NSB.MsgBox(`${userName}, ${userMessages[3]}`)
    break
  default:
    NSB.MsgBox(`${userName}, ${userMessages[4]}`)
}