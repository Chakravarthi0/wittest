import { profileCardType } from "../../types";
import "./profile-card.css";

const ProfileCard = ({
  firstName,
  lastName,
  email,
  signOut,
}: profileCardType) => {
  return (
    <div className="sign-x-form-container">
      <div className="sign-x-form user-profile">
        <h2 className="text-center">My Profile</h2>
        <p className="avatar avatar-md avatar-initial bg-secondary">
          {firstName?.[0].toUpperCase()}
          {lastName?.[0].toUpperCase()}
        </p>
        <p className="user-name">
          {firstName} {lastName}
        </p>
        <p className="mail">{email}</p>
        <button className="btn btn-primary log-out-btn" onClick={signOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export { ProfileCard };
