import logo from "../assets/images/logo.png";
import { useState } from "react";
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
const Header = () => {
	const [toggle,setToggle]=useState(false);
	const menu = [
		{
			name: "HOME",
			icon: HiHome,
		},
		{
			name: "SEARCH",
			icon: HiMagnifyingGlass,
		},
		{
			name: "WATCH LIST",
			icon: HiPlus,
		},
		{
			name: "ORIGINALS",
			icon: HiStar,
		},
		{
			name: "MOVIES",
			icon: HiPlayCircle,
		},
		{
			name: "SERIES",
			icon: HiTv,
		},
	];
	return (
		<div className="flex justify-between p-5">
			<div className="flex gap-8 items-center">
				<img
					src={logo}
					alt="logo"
					className="w-[80px]  md:w-[115px] object-cover"
				/>
				<div className="hidden lg:flex gap-10">
					{menu.map((item) => {
					 return	<HeaderItem name={item.name} Icon={item.icon} />;
					})}
				</div>
				<div className="flex lg:hidden gap-8">
					{menu.map((item,index) => index < 3 && (
						 <HeaderItem name={''} Icon={item.icon} />
					))}
                    <div onClick={()=>setToggle(!toggle)} className="lg:hidden">
                        <HeaderItem name={''} Icon = {HiDotsVertical}/>
                       {toggle ? <div className="absolute mt-5 bg-[#212121] border-[1px] p-3 border-gray-700 px-5 pb-4">
                        {menu.map((item,index)=>index>2&&(
                            <HeaderItem name={item.name} Icon={item.icon}/>
                        ))}
                        </div> :null}
                    </div>
				</div>
			</div>
			<img
				src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
				className="w-[40px] rounded-full"
				alt="image"
			/>
		</div>
	);
};

export default Header;
