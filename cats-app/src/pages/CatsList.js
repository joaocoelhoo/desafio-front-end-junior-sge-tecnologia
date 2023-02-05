import { useContext } from "react";
import Header from "../components/Header";
import Context from "../context/Context";
import CatCard from "../components/CatCard"

function CatsList() {
	const { tagsData } = useContext(Context);

  return (
		<div>
			<Header />
			{
				tagsData.map((tag, index) => (
					<CatCard 
						key={`tag-${index}`}
						tag={tag}
					/>
				))
			}
		</div>
	);
}

export default CatsList;