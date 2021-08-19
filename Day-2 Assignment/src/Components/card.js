import "./card.css";

const card = (props) => {
  return (
    <div className="Card">
      <p>
        <strong>{props.title}</strong>
      </p>
      <img src={props.image} alt="image" />
      <p>{props.subtitle} </p>
      <p>{props.description} </p>
      <button>Click</button>
    </div>
  );
};

export default card;
