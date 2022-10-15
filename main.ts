let Moisture = 0
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P1)
    if (Moisture <= 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else {
        if (Moisture <= 300) {
            basic.showLeds(`
                . . . . .
                . . . . .
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
