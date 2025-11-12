import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navbariot from "../components/Navbariot";

export default function PageB() {
  return (
    <div>
      <Navbariot />
      <Headeriot />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-x1">
        <h1 className="text-center text-3xl font-bold">BMI Calculator</h1>
        <h3 className="text-center mt-2 text-gray-400">คำนวณ BMI</h3>
        <img src="https://media.discordapp.net/attachments/1034834475571490927/1438129943614722179/bmi.png?ex=6915c261&is=691470e1&hm=5e674d6c98f76b508aaf7fc8686466279ef5eb1716ae4660f5b04c7c78fa7b66&=&format=webp&quality=lossless" alt="รูปBMI" className="w-30 mx-auto mt-5" />
        <h3 className="mt-5 ">ป้อนน้ำหนัก(กิโลกรัม)</h3>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <h3 className="mt-5 ">ป้อนส่วนสูง(เซนติเมตร)</h3>
        <input
          type="number"
          placeholder="เช่น 170"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <button
          className="p-3 bg-blue-500 hover:bg-blue-700 mr-2
            rounded-lg w-full text-white font-bold cursor-pointer mt-5"
        >
          คำนวณ BMI
        </button>
        <button
          className="p-3 bg-gray-300 hover:bg-gray-500 mr-2
            rounded-lg w-full text-black cursor-pointer mt-5"
        >
          รีเซ็ต
        </button>
        <div className="flex justify-center items-center gap-2 mt-5 text-2xl">
          ค่า BMI ที่คำนวณได้:
          <span className="text-5x1 text-blue-600 font-bold">0.00</span>
        </div>
        <button
          className="p-3 bg-gray-300 hover:bg-gray-500 mr-2
            rounded-lg w-full text-black cursor-pointer mt-5"
        >
          กลับหน้าหลัก
        </button>
      </div>
      <Footeriot />
    </div>
  );
}
