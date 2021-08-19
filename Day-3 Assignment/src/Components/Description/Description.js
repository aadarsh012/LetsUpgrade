import "./Description.css";

const description = (props) => {
  return (
    <div className="Description">
      <p>
        <strong>{props.title}</strong>
      </p>
      <p>
        <strong>Director : {props.director}</strong>
      </p>
      <p>
        <strong>Actors : {props.actors}</strong>
      </p>
      <p>
        <strong>BoxOffice : {props.boxoffice}</strong>
      </p>
      <p>
        <strong>Languages : {props.languages}</strong>
      </p>
      <p>
        <strong>Plot : {props.plot}</strong>
      </p>
      <p>
        <strong>Production : {props.production}</strong>
      </p>
      <p>
        <strong>Year : {props.year}</strong>
      </p>
      <div>
        {props.ratings?.map((rating, index) => {
          return (
            <p key={index}>
              {rating.Source} : {rating.Value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default description;
