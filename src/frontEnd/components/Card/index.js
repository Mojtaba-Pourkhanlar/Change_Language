
const Card = ({ title, images }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "Space-between",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "#212121",
          transition: "all 0.50s linear",
          borderRadius: "10px",
          overflow: "hidden",
          width: "700px",
        }}>
        <img src={images} width="300px" alt={title} />
        <h1 style={{ margin: "40px" }}>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
