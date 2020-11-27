import React, { useState } from "react";
import { ExpandLess, Search } from "@material-ui/icons";
import { PostScreen } from "./PostScreen";
import { getPosts } from "../selectors/getPosts";
import { Container, Row } from "react-bootstrap";

export const PostingsScreen = () => {
  const publishType = [
    { id: 2, type: "Comprar" },
    { id: 1, type: "Alquilar" },
    { id: 3, type: "Temporal" },
    { id: 4, type: "Todos" },
  ];

  // Estado que capta el valor que tiene el input de busqueda por dirección.
  const [filter, setFilter] = useState("");

  // Estado que capta el valor que tenga la seleccion de la busqueda por tipo de operación.
  const [radio, setRadio] = useState();

  // Estado para setear el valor de la busqueda por direccion cuando se apreta el boton de busqueda.
  const [busq, setBusq] = useState("");

  // Estado que capta si se busca por dirección o por tipo de operación.
  const [toggle, setToggle] = useState(1);

  // Traigo los posts de acuerdo al filtro utilizado
  const posts = getPosts(toggle, radio, busq);

  //Tomo el cambio en el input de buscar por dirección.
  const handleInputChange = (e) => {
    const text = e.target.value;
    setFilter(text);
  };

  //Seteo al estado del filtro el valor introducido en el input de buscar por dirección.
  const handleClick = () => {
    setBusq(filter);
    setRadio();
    setToggle(1);
  };

  //Seteo al estado del radio el valor seleccionado al cambiar de opción.
  const handleRadioClick = (e) => {
    const value = e.target.id;
    setRadio(value);
    setToggle(2);
  };

  return (
    <Container>
      <Row className="pt-3">
        <div className="col-md-3 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div>
                <span className="filter__title">
                  <strong>Filtrado actual</strong>
                </span>
              </div>
              <hr />
              <div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="filter__address">
                    <strong>Dirección</strong>
                  </span>
                  <span>
                    <ExpandLess />
                  </span>
                </div>
                <div className="input-group mb-3">
                  <div className="w-75 mr-auto input-group-sm">
                    <input
                      type="text"
                      className="form-control mt-0"
                      placeholder="Buscar por dirección"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="">
                    <button
                      className="btn btn-sm btn-outline-primary btn__filter"
                      onClick={() => handleClick()}
                    >
                      <Search className="bg-ligth" />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="filter__type">
                    <strong>Tipo de operación</strong>
                  </span>
                  <span>
                    <ExpandLess />
                  </span>
                </div>

                {publishType.map((item) => (
                  <div key={item.id} className="form-check form__radios">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`radio${item.id}`}
                      id={item.id}
                      value={item.id}
                      checked={Number(radio) === item.id}
                      onChange={handleRadioClick}
                    />
                    <label
                      className="form-check-label lbl__radio"
                      htmlFor={item.id}
                    >
                      {item.type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-sm-12 px-0">
          {posts.map((post) => (
            <PostScreen key={post.posting_id} {...post} />
          ))}
        </div>
      </Row>
    </Container>
  );
};
