import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="Menucard">
        {menuData.map((e, i) => {
          return (
            <div key={i} className="card">
              <div className="image">
                <img src={e.image} alt="" />
              </div>
              <div className="content">
                <h3 className="category">{e.category}</h3>
                <a href="">
                  <span className="title">{e.name}</span>
                </a>

                <p className="desc">{e.description}</p>
                <a className="action" href="">
                  Find out more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
