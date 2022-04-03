// function for signalValue
export const signalValue = (signal) => {
    if (signal === 1 || signal === 2) {
        return "Ok"
    } else if (signal === 3) {
        return "Solid"
    } else {
        return "Good"

    }

}

// for status
export const statusValue = (status) => {
    if (status === "active") {
        return "#5FDBA7"
    } else {
        return "#A8A9A8"
    }
}
