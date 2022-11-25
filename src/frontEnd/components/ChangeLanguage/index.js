import { useTranslation } from "react-i18next";

const ChangeLanduage = () => {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();
  
    return (
      <div>
        <select
          style={{
            background: "#121519",
            cursor: "pointer",
            color: "rgba(255, 255, 255, .9)",
            fontSize:'25px',
            padding:'5px'
          }}
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}>
          <option value="fa">فارسی</option>
          <option value="en">English</option>
        </select>
      </div>
    );
}

export default ChangeLanduage