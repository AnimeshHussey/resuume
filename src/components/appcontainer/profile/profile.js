import react from "react";
import "./profile.scss";
import ProfileDetails from "./profileDetails";

const profile = ({
  name,
  imageurl,
  dob,
  address,
  phone,
  email,
  website,
  designation,
  desc,
  site,
}) => {
  return (
    <div className="profilelayout">
      <ProfileDetails />
      <span>details</span>
      <span>desc</span>
    </div>
  );
};

export default profile;
