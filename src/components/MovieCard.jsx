import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
//
const MovieCard = ({ item }) => {
	return (
		<>
			<img className="w-[110px] md:w-[200px] hover:border-[3px]  border-gray-400 rounded-lg hover:scale-110 transition-all duration-150 ease-in-out" src={`${IMAGE_BASE_URL}${item.poster_path}`} />
		</>
	);
};

export default MovieCard;
