import { useContext } from "react";
import Header from "../components/Header";
import Context from "../context/Context";
import CatCard from "../components/CatCard";
import "./CatsList.css";

function CatsList() {
	const { tagsData } = useContext(Context);

  return (
		<div>
			<Header />
			<div className="cats-list">
				{
					tagsData.map((tag, index) => (
						<CatCard 
							key={`tag-${index}`}
							tag={tag}
						/>
					))
				}
			</div>
		</div>
	);
}

export default CatsList;