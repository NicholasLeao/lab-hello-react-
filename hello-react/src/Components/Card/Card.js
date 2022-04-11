import "./Card.modules.css";

function Card({ title, imgSource, text }) {
  return (
    <div className="card">
      <img alt="Icon" src={imgSource} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
