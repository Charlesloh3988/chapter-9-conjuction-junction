let junction = 0
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.ReadUltrasonic() <= 15) {
        reromicro.Brake()
    } else {
        if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            junction += 1
            basic.pause(100)
            reromicro.Brake()
            basic.showNumber(junction)
            while (junction >= 5) {
                for (let index = 0; index < 1; index++) {
                    reromicro.Brake()
                    music.setVolume(183)
                    music.setTempo(165)
                    music.playTone(196, music.beat(BeatFraction.Half))
                    music.playTone(262, music.beat(BeatFraction.Half))
                    music.playTone(330, music.beat(BeatFraction.Half))
                    music.playTone(392, music.beat(BeatFraction.Half))
                    music.playTone(523, music.beat(BeatFraction.Half))
                    music.playTone(659, music.beat(BeatFraction.Half))
                    music.playTone(784, music.beat(BeatFraction.Whole))
                    music.playTone(659, music.beat(BeatFraction.Whole))
                    for (let index = 0; index < 1; index++) {
                        music.playTone(208, music.beat(BeatFraction.Half))
                        music.playTone(262, music.beat(BeatFraction.Half))
                        music.playTone(311, music.beat(BeatFraction.Half))
                        music.playTone(415, music.beat(BeatFraction.Half))
                        music.playTone(523, music.beat(BeatFraction.Half))
                        music.playTone(622, music.beat(BeatFraction.Half))
                        music.playTone(831, music.beat(BeatFraction.Whole))
                        music.playTone(622, music.beat(BeatFraction.Whole))
                    }
                    for (let index = 0; index < 1; index++) {
                        music.playTone(233, music.beat(BeatFraction.Half))
                        music.playTone(294, music.beat(BeatFraction.Half))
                        music.playTone(349, music.beat(BeatFraction.Half))
                        music.playTone(466, music.beat(BeatFraction.Half))
                        music.playTone(587, music.beat(BeatFraction.Half))
                        music.playTone(698, music.beat(BeatFraction.Half))
                        music.playTone(932, music.beat(BeatFraction.Whole))
                        music.playTone(932, music.beat(BeatFraction.Half))
                        music.playTone(932, music.beat(BeatFraction.Half))
                        music.playTone(932, music.beat(BeatFraction.Half))
                        music.playTone(1046, music.beat(BeatFraction.Double))
                    }
                }
            }
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.RunMotor(Motors.Left, 0)
            reromicro.RunMotor(Motors.Right, 35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.RunMotor(Motors.Left, 35)
            reromicro.RunMotor(Motors.Right, 0)
        }
    }
})
