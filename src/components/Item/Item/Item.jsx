import React from "react";

const Item = (teclado) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={teclado.img}
              className="img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div className="">
            <h4>{teclado.nombre}</h4>
            <p className="text-muted">{teclado.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;