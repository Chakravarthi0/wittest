import { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import { useAuth } from "../../hooks";
import { getUser } from "../../utils";
import { Loader } from "../";
import "./profile-card.css";

const ProfileCard = () => {
  const {
    signOut,
    authState: {
      userDetails: { token },
    },
  } = useAuth();

  useEffect(() => {
    (async () => {
      setIsProfileLoading(true);
      const res = await getUser(token);
      setUserData(res);
      setIsProfileLoading(false);
    })();
  }, []);

  const [userData, setUserData] = useState<undefined | DocumentData>({});
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  return (
    <div>
      {isProfileLoading ? (
        <Loader isFullScreen={true} />
      ) : (
        <div className="sign-x-form-container">
          <div className="sign-x-form user-profile">
            <h2 className="text-center">My Profile</h2>
            <p className="avatar avatar-md avatar-initial bg-secondary">
              {userData?.firstName?.[0].toUpperCase()}
              {userData?.lastName?.[0].toUpperCase()}
            </p>
            <p className="user-name">
              {userData?.firstName} {userData?.lastName}
            </p>
            <p className="mail">{userData?.email}</p>
            <button className="btn btn-primary log-out-btn" onClick={signOut}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfileCard };
