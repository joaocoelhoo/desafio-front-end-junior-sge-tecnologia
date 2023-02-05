import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import "./CatCard.css"
import useCollapse from 'react-collapsed';

function CatCard(props) {
  const { tag } = props;
  const { catsData } = useContext(Context);
  const [cats, setCats] = useState([]);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const filterCats = () => {
    const cats = catsData.filter((cat) => cat.tags && cat.tags.includes(tag));
    setCats(cats);
  } 

  useEffect(() => {
		filterCats();
	}, []);

  return (
    <div className="cat-card collapsible"> 
      {
        tag && 
        <div>
          <div className="header" {...getToggleProps()}>
            { tag }
          </div>
          { catsData.length > 0 && 
          <div {...getCollapseProps()}>
            <div className="content">
            { cats.map((cat, index) => <p key={`cat-${index}`}>id: {cat._id}</p>) }
            </div>
          </div> }
        </div>
      }
    </div>
  )
}

export default CatCard;