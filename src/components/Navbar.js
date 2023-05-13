import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

function Navbar({cart, removeFromcart, addTocart, clearCart,}) {
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = { useRef };

  return (
    <div>
        {//==========================
        // this is Navbar section
        // ===========================
        }
      <div className="flex sm:justify-between justify-center items-center px-4 shadow-md">
        <div className="logo flex items-center flex-col sm:flex-row relative z-10">
          <Link
            href={"/"}
            className="mr-2 text-2xl font-bold bg-red-100 p-1 my-1"
          >
            <span>Codeswear</span>
          </Link>
          <div className="nav"></div>
          <ul className="flex space-x-2 font-bold">
            <Link href={"/tshirt"} legacyBehavior>
              <li className="cursor-pointer">T-shirts</li>
            </Link>
            <Link href={"/hoodies"} legacyBehavior>
              <li className="cursor-pointer">Hoodies</li>
            </Link>
            <Link href={"/sticker"} legacyBehavior>
              <li className="cursor-pointer">Stickers</li>
            </Link>
            <Link href={"/mugs"} legacyBehavior>
              <li className="cursor-pointer">Mugs</li>
            </Link>
          </ul>
        </div>

        {//==========================
        // this is Cart section
        // ===========================
        }
        <div
          onClick={togglecart}
          className="cart absolute right-3 top-3 cursor-pointer"
        >
          <AiOutlineShoppingCart className="text-2xl sm:text-3xl" />
        </div>
      </div>

        {//==========================
        // this is Cart section
        // ===========================
        }
      <div
        ref={ref}
        className="slidcart absolute top-0 right-0 bg-red-100 p-10 transform transition-tansform translate-x-full transition h-full z-20"
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          onClick={togglecart}
          className="absolute top-4 right-2 cursor-pointer text-xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-deciaml font-semibold">
          {Object.keys(cart).length==0 && <div className="my-4 font-normal text-center">Add items on cart</div>}
        {Object.keys(cart).map((k)=>{ return <li key={k}>
        <div className="flex item-center space-x-8 mt-2 justify-center">
          <div className="font-semibold">{cart[k].name}</div>
          <div className="flex items-center gap-1 text-lg">
            <AiOutlineMinusCircle className="text-xs cursor-pointer" onClick={()=>
              {removeFromcart(k, cart[k].price, 1, cart[k].size, cart[k].name, cart[k].color)}}/>{cart[k].qty}
            <AiOutlinePlusCircle className="text-xs cursor-pointer" onClick={()=>
              {addTocart(k, cart[k].price, 1+1, cart[k].size, cart[k].name, cart[k].color)}} />
          </div>
        </div>
        </li>})}
        </ol>
        <div className="flex space-x-2">
          <button className="flex mx-auto mt-4 text-black bg-red-200 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded text-sm md:text-base  items-center">
            <BsFillBagCheckFill className="mb-1" />
            Checkout
          </button>
          <button className="flex mx-auto mt-4 text-black bg-red-200 border-0 py-2 px-2 focus:outline-none hover:bg-red-300 rounded text-sm md:text-base items-center" onClick={()=>{}}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
