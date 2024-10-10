
import { TiShoppingCart } from "react-icons/ti";
export const Navbar = ({cartLenght ,setShowItem }) => {

    return (
        <div className="bg-white shadow-md h-16 p-5  w-screen flex justify-center  fixed ">
            <ul className="flex justify-around   w-2/4 text-black text-lg relative">
                <li>Home</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <span className="absolute bottom-0 right-14 text-2xl font-bold text-orange-700">{cartLenght}</span>
                <li className="cursor-pointer">
                    <TiShoppingCart  className="w-20 h-10 text-slate-900"
                        onClick={()=>setShowItem(true)}
                    />
                </li>
               
            </ul>
        </div>
    )
}
