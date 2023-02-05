import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

function CatCard(props) {
  const { tag } = props;
  const { catsData } = useContext(Context);
  const [cats, setCats] = useState([]);

  const filterCats = () => {
    const cats = catsData.filter((cat) => cat.tags && cat.tags.includes(tag));
    setCats(cats);
  } 

  useEffect(() => {
		filterCats();
	}, []);

  return (
    <div> 
      {
        catsData.length > 0 && 
        <div>
          tag: { tag }
          { cats.map((cat, index) => <span key={`cat-${index}`}>id: {cat._id}</span>) }
        </div>
      }
    </div>
  )
}

export default CatCard;