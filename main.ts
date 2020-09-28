let Hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Hungryness += 1
        basic.showString("" + (Hungryness))
    } else if (input.buttonIsPressed(Button.B)) {
        Hungryness += -1
        basic.showString("" + (Hungryness))
    }
})
