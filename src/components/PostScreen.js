import React, { useState } from "react";
import { History, Favorite, NavigateNext } from "@material-ui/icons";
import { ContactModal } from "./ContactModal";

export const PostScreen = ({
  posting_picture,
  title,
  posting_description,
  posting_location,
  posting_prices,
  publication_plan,
  publish_date,
  posting_id,
}) => {
  //Estado para alternar el boton de like de la publicación.
  const [like, setLike] = useState();
  const handleSetLike = () => setLike(!like);

  //Estado que maneja el shoy y hide del modal de contacto.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Calculo la diferencia de dias entre la fecha de publicación y el dia de la fecha.
  const getDiffDate = (publish) => {
    var dateParts = publish.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    const diffDays = Math.trunc((new Date() - dateObject) / (1000 * 3600 * 24));
    return diffDays;
  };

  var plan = "";
  switch (publication_plan) {
    case "SIMPLE":
      plan = "Simple";
      break;
    case "HIGHLIGHTED":
      plan = "Destacado";
      break;
    case "SUPERHIGHLIGHTED":
      plan = "Super destacado";
      break;
    default:
      break;
  }

  return (
    <div
      className={`card card__post ${
        publication_plan === "SUPERHIGHLIGHTED"
          ? "border__violet"
          : publication_plan === "HIGHLIGHTED" && "border__green"
      } `}
    >
      <div className="row">
        <div className="col-4">
          <div className="position-relative">
            <img
              className="card-img-top d-block"
              src={posting_picture}
              alt="Imagen de muestra"
            />
            <span className="position-absolute post__plan">{plan}</span>
            <button
              id={posting_id}
              onClick={() => handleSetLike(posting_id)}
              className={`position-absolute btn__like ${like && "btn__liked"}`}
            >
              <Favorite />
            </button>
            <div className="position-absolute post__navigate"><NavigateNext/></div>
          </div>
          {posting_prices.map((post, i) => (
            <div key={i} className="ml-2 mt-2 div__price">
              <div
                className={`post__price ${
                  post.expenses !== null ? "mb-0" : null
                }`}
              >{`$ ${post.price.amount.toLocaleString("de-DE")}`}</div>
              <div className="post__expenses mb-1">
                {post.expenses !== null
                  ? `+ $ ${post.expenses.amount.toLocaleString(
                      "de-DE"
                    )} Expensas`
                  : `Sin expensas`}
              </div>
            </div>
          ))}
        </div>
        <div className="col-8 pl-0">
          <div className="post__title mt-2">{title}</div>
          <div className="post__location">
            {posting_location.address}, {posting_location.zone},{" "}
            {posting_location.city}
          </div>
          <p className="post__descr py-3">{posting_description}</p>
          <div className="d-flex justify-content-between align-items-center pb-3">
            <div className="d-flex align-center">
              <History className="history__icon" />
              <span className="history__text">{`Publicado hace ${getDiffDate(
                publish_date
              )} días`}</span>
            </div>
            <button
              className="btn btn-sm btn__contactar mr-3"
              onClick={handleShow}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
      <ContactModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};
