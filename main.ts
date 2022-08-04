let junction = 0
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        junction += 1
        basic.pause(100)
        reromicro.Brake()
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.showNumber(junction)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 0)
    } else {
        reromicro.Brake()
    }
})
