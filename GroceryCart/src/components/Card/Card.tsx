import React from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({
  thumb,
  cocktail_name,
  ingredients,
  recipe,
  handleAdd,
  handleDetails,
  serving,
  minute,
}) => {
  return (
    <div className="cont_principal">
      <div className="cont_central">
        <div className="cont_modal cont_modal_active">
          <div className="cont_photo">
            <div className="cont_img_back">
              <img src={thumb} alt="" />
            </div>
            <div className="cont_mins">
              <div className="sub_mins">
                <h5 className="min-text">
                  {minute}
                  <div> MINS</div>
                </h5>
              </div>
              <Button
                type="icon"
                iconName="add"
                onClick={handleAdd}
                value={[cocktail_name, thumb]}
              />
            </div>
            <div className="cont_mins">
              <div className="sub_mins">
                <h5 className="serve-text">{serving} SERVINGS</h5>
              </div>
              <Button
                type="icon"
                iconName="details"
                onClick={handleDetails}
                value={[ingredients, recipe]}
              />
            </div>

            <div className="cont_detalles">
              <h3>{cocktail_name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
