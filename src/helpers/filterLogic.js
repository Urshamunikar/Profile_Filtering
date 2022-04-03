import { signalValue } from "./functions"

const filterLogic = (data, allData) => {
    let searchFiltered = [];
    let statusFiltered = [];
    let signalFiltered = [];
    let sourceFiltered = [];

    // if nothing is checked or choosed
    if (
        data.search === "" &&
        data.status === "" &&
        data.signal.length === 3 &&
        data.source.length === 0
    ) {
        return allData;
    } else {
        allData.forEach((profile) => {
            if (
                profile?.firstName?.toLowerCase().indexOf(data.search?.toLowerCase()) >= 0

            ) {
                searchFiltered.push(profile);
            }

        });
        searchFiltered.forEach((profile) => {
            if (profile.status.toLowerCase() === data.status.toLowerCase()) {
                statusFiltered.push(profile);
            } else if (data.status === "") {
                statusFiltered = searchFiltered;
            }
        });

        statusFiltered.forEach((profile) => {
            if (data.signal.length === 3) {
                signalFiltered = statusFiltered;
            } else {
                data.signal.forEach((signal) => {
                    if (signal === signalValue(profile.signal)) {
                        signalFiltered.push(profile);
                    }
                });
            }
        });

        signalFiltered.forEach((profile) => {
            if (data.source.length === 0) {
                sourceFiltered = signalFiltered;
            } else {
                let tempData = [];

                profile.photos?.forEach((image) => {
                    if (data.source?.label?.toLowerCase() === image.source?.toLowerCase()) {
                        tempData.push(image);
                    }
                });

                if (tempData.length !== 0) {
                    sourceFiltered.push({ ...profile, photos: tempData });
                }
            };

        });



        return sourceFiltered;

    }
}

export default filterLogic;