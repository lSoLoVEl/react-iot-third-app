import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navbariot from "../components/Navbariot";
import marketShare from "../assets/marketShare.png";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function PageA() {
  // สร้างตัวแปร state
  const [moneyPay, setMoneyPay] = useState('');
  const[person,setPerson] = useState('');
  const [moneyShare,setMoneyShare] = useState('0.00');

// สร้างฟังก์ชันคำนวณ
  const handleCalMoneyShareClick = () => {
    // Validate UI
    if(moneyPay ==''){
      // alert('กรุณาป้อนเงิน')
      Swal.fire({
        title:'คำเตือน',
        text:'กรุณาป้อนเงิน',
        icon:'warning',
        iconColor:'red',
        confirmButtonText:"ตกลง",
        confirmButtonColor:'green',
      })
      return;
    }
    if(person ==''){
     // alert('กรุณาป้อนเงิน')
      Swal.fire({
        title:'คำเตือน',
        text:'กรุณาป้อนคน',
        icon:'warning',
        iconColor:'red',
        confirmButtonText:"ตกลง",
        confirmButtonColor:'green',
      })
      return;
    }
    // คํานวณ
    let result=parseFloat(moneyPay)/parseInt(person);
    setMoneyShare(result.toLocaleString('th-TH'),{minimumFractionDigits:2,
      maximumFractionDigits:2
    });
  }
// สร้างฟังก์ชันยกเลิก
  const handleCancelClick = () => {
    setMoneyPay('');
    setPerson('');
    setMoneyShare('0.00');
  }
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
        <input value={moneyPay} onChange={(e)=>(setMoneyPay(e.target.value))}
        type="number" placeholder="Input money ......" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
        <input value={person} onChange={(e)=>(setPerson(e.target.value))}
        type="number" placeholder="Input person ......" className="p-2 border boder-gray-300 rounded w-full mt-2"/>
        <div className="flex mt-5">
          <button onClick={handleCalMoneyShareClick}
          className="bg-green-600 text-white p-3 rounded w-full mr-2 hover:bg-green-800 cursor-pointer">
            คำนวณ
            </button>
          <button onClick={handleCancelClick}
          className="bg-red-600 text-white p-3 rounded w-full mr-2 hover:bg-red-800 cursor-pointer">
            ยกเลิก
            </button>
        </div>
        <div className="flex mt-5 gap-5 justify-center items-center" >
            หารกันคนละ
            <span className="text-3xl text-red-500 font-bold">
            {moneyShare}
            </span>
            บาท

        </div>
      </div>

      {/*  */}
      <Footeriot />
    </div>
  );
}
