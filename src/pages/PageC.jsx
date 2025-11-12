import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navbariot from "../components/Navbariot";

export default function PageC() {
  return (
    <div>
      <Navbariot />
      <div>
      <Headeriot />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto">
      <h1 className="text-3xl font-bold text-center ">BMR Calculator</h1>
      <h6 className="text-center text-gray-500">คำนวณ BMR</h6>
      <img src="https://t4.ftcdn.net/jpg/07/15/39/93/360_F_715399351_Kif0nZZSImJ6eaFGF1aUFS2x2nrqzUXV.jpg" alt="BMR" className="mx-auto my-5 w-1/2"/>
      <h3>ป้อนนำหนัก (กิโลกรัม)</h3>
      <input type="number" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
      <h3>ป้อนส่วนสูง (เซนติเมตร)</h3>
      <input type="number" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
      <h3>ป้อนอายุ (ปี)</h3>
      <input type="number" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
      <h3>เพศ</h3>
      <input type="radio" checked  />     ชาย <br></br>
      <input type="radio" />     หญิง <br></br>
      <div className="flex mt-5">
          <button className="bg-blue-600 text-white p-3 rounded w-full mr-2 hover:bg-blue-800 cursor-pointer">
            คำนวณ BMR
            </button>
          <button className="bg-red-600 text-white p-3 rounded w-full mr-2 hover:bg-red-800 cursor-pointer">
            รีเซ็ต
            </button> 
        </div>          
            <div className="flex mt-5 gap-5 justify-center items-center" >
            ค่า BMR ที่คำนวณได้คือ
            <span className="text-3xl text-blue-500 font-bold">
                0.00
            </span>
            

        </div>
        <div className="flex mt-5">
          <button className="bg-gray-200 text-black p-3 rounded w-full mr-2 hover:bg-gray-500 cursor-pointer">
            กลับหน้าหลัก
            </button>
            </div>
        </div>
      </div>
      <Footeriot />
    </div>
  );
}
