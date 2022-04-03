import Card from "./card";

const ProfileDetail = ({ profiles }) => {
    return (
        <div className="profile_detail">
            {/* {console.log(profiles)} */}
            {profiles.map((profile, index) => (


                <Card profile={profile} key={index} />
            )

            )}
        </div>
    )

}

export default ProfileDetail;