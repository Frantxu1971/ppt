input.onButtonPressed(Button.A, function () {
    jugador += 1
    if (jugador > 3) {
        jugador = 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cpu = randint(1, 3)
    if (cpu == 1) {
        basic.showLeds(`
            . # # # .
            # # # . #
            # . # # #
            # # # . #
            . # # # .
            `)
    } else if (cpu == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
    basic.clearScreen()
    if (jugador == 1 && cpu == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (jugador == 2 && cpu == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (jugador == 3 && cpu == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (jugador == cpu) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
})
let cpu = 0
let jugador = 0
jugador = 1
basic.forever(function () {
    if (jugador == 1) {
        basic.showLeds(`
            . # # # .
            # # # . #
            # . # # #
            # # # . #
            . # # # .
            `)
    } else if (jugador == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
