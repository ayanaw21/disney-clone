import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
//
const HrMovieCard = ({ item }) => {
	return (
		<section className="hover:scale-110 transition-all duration-150 ease-in-out">
			<img
				src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
				className="w-[110px] md:w-[260px] hover:border-[3px]  border-gray-400 rounded-lg "
			/>
            <h2 className="w-[110px] md:w-[260px] mt-2  ">{item.title}</h2>
		</section>
	);
};

export default HrMovieCard;