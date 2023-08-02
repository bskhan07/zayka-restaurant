import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
const Logic = () => {

  const[menuData , setMenuData] = useState(Menu);
  const[mealType,setMealType] = useState(Menu);

  const uniMealType = [...new Set(Menu.map((e)=>{
      return e.category;
  })),"All"]

const fillterMealType = (mealType) =>{

  if (mealType === "All") {
    return setMenuData(Menu)
  }

  const updatList = Menu.filter((e)=>{
    return e.category === mealType;
  })
  setMenuData(updatList)
}

  return (
    <>
      <Navbar uniMealType = {uniMealType} fillterMealType={fillterMealType}/>
      <MenuCard menuData = {menuData} />
    </>
  );
};

export default Logic;
