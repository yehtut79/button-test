input.onButtonPressed(Button.A, function () {
    digit += 1
})
input.onButtonPressed(Button.B, function () {
    PIN = "" + PIN + convertToText(digit)
    digit = 0
    if (PIN.length == 4) {
        if (PIN == "3344") {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
        PIN = ""
        digit = 0
        basic.pause(2000)
        basic.clearScreen()
    }
})
let digit = 0
let PIN = ""
PIN = ""
digit = 0
