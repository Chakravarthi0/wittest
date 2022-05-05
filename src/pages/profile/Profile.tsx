import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProfileCard, Loader, KnowledgeBoard } from "../../components";
import { useAuth } from "../../hooks";
import { getUser } from "../../utils";
import "./profile.css";

const Profile = () => {
  const {
    signOut,
    authState: {
      userDetails: { token },
    },
  } = useAuth();

  useEffect(() => {
    (async () => {
      setProfileLoading(true);
      const res = await getUser(token);
      setUserData(res);
      setProfileLoading(false);
    })();
  }, [token]);

  const [userData, setUserData] = useState<undefined | DocumentData>({});
  const [profileLoading, setProfileLoading] = useState(false);
  return (
    <>
      {profileLoading ? (
        <Loader isFullScreen={true} />
      ) : (
        <div>
          <ProfileCard
            firstName={userData?.firstName}
            lastName={userData?.lastName}
            email={userData?.email}
            signOut={signOut}
          />
          <KnowledgeBoard
            totalScore={userData?.totalScore}
            quizzesAttempted={userData?.quizzesAttempted}
          />
        </div>
      )}
    </>
  );
};

export { Profile };
