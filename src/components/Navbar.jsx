import React from "react";

const Navbar = ({ uniMealType , fillterMealType }) => {
  return (
    <>
      <div className="navdiv">
        <nav className="navbar">
          {uniMealType.map((e, i) => {
            return (
              <button onClick={()=>fillterMealType(e)} className="button-48" role="button">
                <span className="text">{e}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
