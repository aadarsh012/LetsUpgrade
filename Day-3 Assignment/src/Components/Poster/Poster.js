import "./Poster.css";

const poster = (props) => {
  return (
    <div className="Container">
      <img alt="poster" src={props.image} />
    </div>
  );
};

export default poster;
