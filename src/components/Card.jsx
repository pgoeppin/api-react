import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  /* sort methods to render */
  const sortMethods = {
    none: { method: (a, b) => null },
    "name-az": { method: (a, b) => (a.name > b.name ? 1 : -1) },
    "name-za": { method: (a, b) => (a.name > b.name ? -1 : 1) },
    "height-desc": {
      method: (a, b) =>
        a.height.metric
          .match(/\d+/g)
          .reduce((s, t) => parseInt(s) + parseInt(t), 0) /
          a.height.metric.match(/\d+/g).length >
        b.height.metric
          .match(/\d+/g)
          .reduce((s, t) => parseInt(s) + parseInt(t), 0) /
          b.height.metric.match(/\d+/g).length
          ? -1
          : 1,
    },
    "height-asc": {
      method: (a, b) =>
        a.height.metric
          .match(/\d+/g)
          .reduce((s, t) => parseInt(s) + parseInt(t), 0) /
          a.height.metric.match(/\d+/g).length >
        b.height.metric
          .match(/\d+/g)
          .reduce((s, t) => parseInt(s) + parseInt(t), 0) /
          b.height.metric.match(/\d+/g).length
          ? 1
          : -1,
    },
  };
  return (
    <div
      className="gallery d-flex flex-wrap justify-content-center p-3 bg-light"
      style={{ gap: "0.5em" }}
    >
      {props.error ? <h1 className="text-danger">{props.error}</h1> : null}
      {props.inputSearch.length !== 0
        ? props.filteredInfo
            .sort(sortMethods[props.sortState].method)
            .map((element) => (
              <Card key={element.id}>
                <Card.Img src={element.image.url} className="text-center" />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Breed Group: {element.breed_group}
                  </Card.Subtitle>
                  <Card.Text>{element.bred_for}</Card.Text>
                  <Card.Text>Temperament: {element.temperament}</Card.Text>
                  <Card.Text>Life Span: {element.life_span}</Card.Text>
                  <Card.Text>Weight: {element.weight.metric} Kg</Card.Text>
                  <Card.Text>Height: {element.height.metric} cm</Card.Text>
                </Card.Body>
              </Card>
            ))
        : props.info
            .sort(sortMethods[props.sortState].method)
            .map((element) => (
              <Card key={element.id}>
                <Card.Img src={element.image.url} className="text-center" />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Breed Group: {element.breed_group}
                  </Card.Subtitle>
                  <Card.Text>{element.bred_for}</Card.Text>
                  <Card.Text>Temperament: {element.temperament}</Card.Text>
                  <Card.Text>Life Span: {element.life_span}</Card.Text>
                  <Card.Text>Weight: {element.weight.metric} Kg</Card.Text>
                  <Card.Text>Height: {element.height.metric} cm</Card.Text>
                </Card.Body>
              </Card>
            ))}
    </div>
  );
};
export default Cards;
