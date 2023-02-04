import { useContext } from "react";
import Header from "../components/Header";
import Context from "../context/Context";

function CatsList() {
	const { catsData } = useContext(Context);

  return (
		<div>
			<Header />
			{
				catsData.map((cat, index) => {
					return <span key={index}>{cat}</span>
				})
			}
		</div>
	);
}

export default CatsList;