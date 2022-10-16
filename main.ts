input.onButtonPressed(Button.A, function () {
    basic.showNumber(Moisture)
})
let Moisture = 0
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("\"ms0\"", Moisture)
    basic.pause(5000)
})
