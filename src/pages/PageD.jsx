import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navbariot from "../components/Navbariot";

export default function PageD() {
  return (
    <div>
      <Navbariot />
      <Headeriot />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-x1">
        <h1 className="text-center text-3xl font-bold">
          Car Installment Calculator
        </h1>
        <h3 className="text-center mt-2 text-gray-400">
          คำนวณ Car Installment
        </h3>
        <img src="https://cdn-icons-png.freepik.com/512/5566/5566885.png" alt="รูปCar" className="w-30 mx-auto mt-5" />

        <h3 className="mt-5 ">ชื่อผู้คำนวณ</h3>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <h3 className="mt-5 ">ราคารถ(บาท)</h3>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <h3 className="mt-5 ">ดอกเบี้ยต่อปี(%)</h3>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <h3 className="mt-5 ">เงินดาวน์(%)</h3>
        <div className="gap-2 mt-5 ">
          <input type="radio" className="rounded " />
          15% <b className="mr-2"></b>
          <input type="radio" className="rounded " />
          25% <b className="mr-2"></b>
          <input type="radio" className="rounded " />
          30% <b className="mr-2"></b>
          <input type="radio" className="rounded " />
          20% <b className="mr-2"></b>
          <input type="radio" className="rounded " />
          35% <b className="mr-2"></b>
        </div>
        <h3 className="mt-5 ">จำนวนเดือนที่ผ่อน</h3>
        <select
          className="p-2 border border-gray-300 rounded w-full mt-2"
          defaultValue=""
        >
          <option value="" disabled>
            -- กรุณาเลือกจำนวนเดือน --
          </option>
          <option value="12">12 เดือน</option>
          <option value="18">18 เดือน</option>
          <option value="24">24 เดือน</option>
          <option value="30">30 เดือน</option>
          <option value="36">36 เดือน</option>
          <option value="48">48 เดือน</option>
          <option value="60">60 เดือน</option>
        </select>
        <div className="flex mt-5">
          <button
            className="p-3 bg-blue-500 hover:bg-blue-700 mr-2
            rounded-lg w-full text-white cursor-pointer"
          >
            คำนวณ
          </button>
          <button
            className="p-3 bg-gray-300 hover:bg-gray-500 mr-2
            rounded-lg w-full text-black cursor-pointer"
          >
            ล้างข้อมูล
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-5 ">
          ผ่อนเดือนละ:0.00 บาท
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
