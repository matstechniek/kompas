basic.forever(function () {
    if (input.compassHeading() < 135) {
        if (input.compassHeading() > 45) {
            basic.showArrow(ArrowNames.West)
        }
    } else if (input.compassHeading() < 225) {
        if (input.compassHeading() > 135) {
            basic.showArrow(ArrowNames.South)
        }
    } else if (input.compassHeading() < 315) {
        if (input.compassHeading() > 225) {
            basic.showArrow(ArrowNames.East)
        }
    } else {
        if (input.compassHeading() < 315) {
            if (input.compassHeading() > 45) {
                basic.showArrow(ArrowNames.North)
            }
        }
    }
})
