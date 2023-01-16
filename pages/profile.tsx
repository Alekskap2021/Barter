import { MobileFooter } from "../src/components/footer/mobile-footer";
import { ProfilePage } from "../src/views/profile";

const Profile = () => {
  return (
    <>
      <ProfilePage />
      <MobileFooter isActive={"Профиль"} />
    </>
  );
};

export default Profile;
