input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    Vuelta_derecha += 1
    basic.showNumber(Vuelta_derecha)
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
    basic.showNumber(Pasos)
})
input.onButtonPressed(Button.AB, function () {
    Pasos = 0
    Vuelta_derecha = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
	
})
let Vuelta_derecha = 0
let Pasos = 0
Pasos = 0
Vuelta_derecha = 0
basic.forever(function () {
	
})
