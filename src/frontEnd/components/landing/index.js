import { useTranslation } from "react-i18next";
import Card from "../Card";
import user from "../../images/01.JPG";
import ChangeLanguage from '../ChangeLanguage'

const Landing = () => {
  const {t} = useTranslation()
  return (
    <div
      style={{
        background:  "#121519",
        transition: "all 0.50s linear",
        minHeight: "100vh",
        padding:'20px'
      }}>
      <header> <ChangeLanguage/> </header>
      <Card title={t('moji')} images={user} />
    </div>
  );
};

export default Landing;
