import { useEffect, useState } from "react";

import ProfileDetail from "./profileDetail";
import SideBar from "./sidebar";

import filterLogic from "../../helpers/filterLogic";
import { sortImageObject } from "../../helpers/imageLogic"

const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
];

const signalOptions = [
    { label: "Solid", value: "Solid" },
    { label: "Good", value: "Good" },
    { label: "Ok", value: "Ok" },
];

const sourceOptions = [
    { label: "google", value: 0 },
    { label: "linkedin", value: 1 },
    { label: "facebook", value: 2 },
    { label: "twitter", value: 3 },
    { label: "office365", value: 4 },
];

const Home = () => {

    const [data, setData] = useState({
        search: "",
        status: "",
        signal: ["Solid", "Good", "Ok"],
        source: []

    });


    const [isLoading, setIsLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);
    const [allData, setAllData] = useState([]);


    //start: to store the data of the filter

    const handleChange = (e) => {
        let newData = { ...data };
        // for checkbox multiple
        if (e.target.name === "signal") {
            if (newData[e.target.name].indexOf(e.target.value) >= 0) {
                let result = newData[e.target.name].filter(
                    (signal) => signal !== e.target.value
                );
                newData[e.target.name] = result;
            } else {
                newData[e.target.name] = [...newData[e.target.name], e.target.value];
            }
        }
        // for select status and search
        else {
            newData[e.target.name] = e.target.value;
        }

        setData(newData);
    };

    // for select
    const handleChangeSelect = (values) => {
        let newData = { ...data };
        newData["source"] = values;
        setData(newData);
    };

    //end: to store the data of the filter


    // data fetching
    useEffect(() => {
        setIsLoading(true)
        fetch("https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ff6a7b1ab4967595ba38b4f16f88e6cd6175f6e9/users.json")
            .then((res) => res.json())
            .then((profiles) => {
                setProfiles(profiles)
                setAllData(profiles)
            })
        setIsLoading(false);

    }, [])

    // filter data
    useEffect(() => {
        const filteredData = filterLogic(data, allData);
        setProfiles(filteredData);
    }, [data, allData]);

    // image
    useEffect(() => {
        const sortedProfile = allData.map((profile) => {
            const arr = profile.photos.sort(sortImageObject)
            return { ...profile, photos: [...arr] };
        })
        setProfiles(sortedProfile)

    },[allData])

    return (
        <>
            <div>
                {isLoading && <h1>Loading...</h1>}
            </div>
            <div className="profile">
                <SideBar
                    data={data}
                    statusOptions={statusOptions}
                    signalOptions={signalOptions}
                    sourceOptions={sourceOptions}
                    handleChange={handleChange}
                    handleChangeSelect={handleChangeSelect}
                />

                {!isLoading && profiles.length === 0 ? (
                    <h1 style={{margin: "auto"}}>No data</h1>
                ) :
                    <ProfileDetail profiles={profiles} />
                }
            </div>



        </>

    )

}


export default Home;