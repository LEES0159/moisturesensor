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
    if (Moisture <= 200) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            `)
    } else {
        if (Moisture <= 300) {
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
        basic.pause(2500)
    }
})
