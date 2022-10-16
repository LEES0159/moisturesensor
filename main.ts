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
    datalogger.log(datalogger.createCV("Moisture", Moisture))
    if (Moisture <= 300) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            `)
    } else {
        if (Moisture > 300 && Moisture <= 600) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
    basic.pause(2500)
})
