import { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import NavHover from "./NavHover";
import models from '../../models.json'
import HoverDiscover from "./HoverDiscover";
import HoverShop from "./HoverShop";

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    const isHovered = hoveredItem !== null;
    const isHomePage = location.pathname === "/";

    const { vehicles, energys, charging, vehiclelist, energylist, charginglist, shop } = models;

    const cardContent = {
        Vehicles: (
            <div key={1}><NavHover items={vehicles} listitems={vehiclelist} /></div>
        ),
        Energy: (
            <div key={2}><NavHover items={energys} listitems={energylist} /></div>
        ),
        Charging: (
            <div key={3}><NavHover items={charging} listitems={charginglist} /></div>
        ),
        Discover: (
            <div key={4}><HoverDiscover /></div>
        ),
        Shop: (
            <div key={5}><HoverShop items={shop} /></div>
        )
    }
    return (
        <div className="relative">
            <div className={`absolute top-0 left-0 right-0 flex justify-between p-4 transition-colors duration-200 ${
                isHovered || !isHomePage ? 'bg-white text-black' : 'bg-transparent text-white'
            }`}>
                <div className="ml-12">
                    <svg className="w-32 h-6" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path></svg>
                </div>  
                <div className="flex text-[13px] font-montserrat font-semibold tracking-wider">
                    {Object.keys(cardContent).map((item) => (
                        <div className="relative cursor-pointer hover:bg-gray-200 rounded transition-colors duration-200 px-3 py-1" key={item} onMouseEnter={() => handleMouseEnter(item)}  >{item}</div>
                    ))}
                </div>
                <div className="flex space-x-3 mr-14 mt-[-4px]">
                    <div className="p-1 hover:bg-[#3e3f3f2c] rounded transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div className="p-1 hover:bg-[#3e3f3f2c] rounded transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <Link className="p-1 hover:bg-[#3e3f3f2c] rounded transition-colors duration-300" to={`/sign`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </div>
                <div className={`absolute left-0 right-0 top-[59px] bg-white transition-all duration-1000 overflow-hidden ${
                    isHovered ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`} onMouseLeave={handleMouseLeave}>{hoveredItem && cardContent[hoveredItem]}</div>
            </div>
        </div>
    )
}

export default Navbar