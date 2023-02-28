import React from "react";

const Breadcrumbs = ({ page, onGoMain}) => {
  const isMainPage = page.id === "main";
  const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Главная</li>
        {!isMainPage && (
          <li className="breadcrumb-item active" aria-current="page">
            {page.text}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
