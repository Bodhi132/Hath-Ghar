import { FaSearch, FaBars } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';


export default function Header() {
    return (
        <div className="bg-[#76795B] text-white">
            {/* Top nav */}
            <div className="flex items-center justify-between px-4">
                {/* Left: Logo and Home Icon */}
                <div className="flex items-center w-[15rem]">
                    <div className="">
                        <Image src='/homeAssets/logoOnly.png' width={100} height={50} alt='logo'/>
                    </div>
                    <div>
                        <Image src='/homeAssets/wrtLOgo.png' width={200} height={100} alt='hathghar'/>
                    </div>
                </div>

                {/* Middle: Search */}
                <div className="flex items-center bg-gray-200 rounded overflow-hidden">
                    <select className="bg-white text-black px-2 py-1">
                        <option>All</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 w-64 text-black"
                    />
                    <button className="bg-[#b4b965] px-3 py-2">
                        <FaSearch className="text-black" />
                    </button>
                </div>

                {/* Right: Auth & Cart */}
                <div className="flex items-center gap-7">
                    <div>
                        <button className="bg-gray-300 text-black px-3 py-1 rounded">Sign in</button>
                    </div>
                    <div>
                        <button className="bg-black text-white px-3 py-1 rounded">Register</button>
                    </div>
                    <div className="text-[#c6cb8a]">Return & Order</div>
                    <div className=' bg-[#E7D9C0] px-2.5 py-2.5 rounded-xl'>
                        <FiShoppingCart className=" text-3xl text-black" />
                    </div>
                </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-around space-x-2 px-4 py-2 bg-[#5f5f3d] overflow-x-auto text-black">
                <div>
                    <FaBars className="text-[#f2dbc1] text-3xl cursor-pointer" />
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Bestseller</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Sell</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Today's deal</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">New releases</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Label</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">premium segment</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Label</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Label</button>
                </div>
                <div>
                    <button className="bg-[#f2dbc1] px-3 py-1 rounded cursor-pointer">Label</button>
                </div>
            </div>
        </div>
    );
}
