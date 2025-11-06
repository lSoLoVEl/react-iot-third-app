import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navbariot from "../components/Navbariot";
import marketShare from "../assets/marketShare.png";

export default function PageA() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า A xD" />
      {/*  */}
      <div className="w-7/10 border border-gray-300 p-7 mx-auto">
        <h1 className="text-center text-2xl text-green-600 font-bold">
          Money Shared
        </h1>
        <img src={marketShare} alt="รูปเงิน" className="w-30 mx-auto mt-5" />
        <h3 className="font-bold mt-5">ป้อนเงิน</h3>
        <input type="number" placeholder="Input money ......" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
        <input type="number" placeholder="Input person ......" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
        <div className="flex mt-5">
          <button className="bg-green-600 text-white p-3 rounded w-full mr-2 hover:bg-green-800 cursor-pointer">
            คำนวณ
            </button>
          <button className="bg-red-600 text-white p-3 rounded w-full mr-2 hover:bg-red-800 cursor-pointer">
            ยกเลิก
            </button>
        </div>
        <div className="flex mt-5 gap-5 justify-center items-center" >
            หารกันคนละ
            <span className="text-3xl text-red-500 font-bold">
                0.00
            </span>
            บาท

        </div>
      </div>

      {/*  */}
      <Footeriot />
    </div>
  );
}
