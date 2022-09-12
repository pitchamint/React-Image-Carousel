import ImageData from "../ImageData" //นำ imageData เข้ามาทำงาน
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";


const ImageSlider = () => {
    //สร้าง state เพื่อเก็บลำดับภาพ ซ้ายลด state /ขวาเพิ่ม state
    const [ current,setCurrent ] = useState(0)

    //สร้างตัวแปรเพื่อแสดงสมาชิกลำดับสุดท้าย
    const length = ImageData.length

    //สร้างฟังก์ชั่นในการเพิ่ม/ลดค่า แต่ไม่ใช่เพิ่มค่าไปเรื่อยๆ เพราะเรามีแค่ 3 รูป =>ต้องกำหนดขอบเขตการสไลด์
    const prevSlide = () =>{
        // if(current === 0){
        //     setCurrent(length-1) // วิ่งไปที่ภาพสุดท้าย
        // }else{
        //     setCurrent(current-1) //ลบค่า stateทีละ 1
        // }
        current === 0 ? setCurrent(length-1) :  setCurrent(current-1) //ลดรูป
    }
    const nextSlide = () =>{
        // if(current === length-1){
        //     setCurrent(0) //ความหมายคือ length-1 เช่น เรามี index 0 1 2 แต่ length จะ =3 ก็เลยต้องลบ 1 ถาไปถึงรูปสุดท้ายให้กลับมา index แรก
        // }else{
        //     setCurrent(current+1) //เพิ่มค่า stateทีละ 1
        // }
        current === length-1 ? setCurrent(0) : setCurrent(current+1) 
    }
    return(
       //ทำการวนลูปข้อมูลที่เป็นอาร์เรย์เพื่อจะนำมาใช้งาน การ map จะได้ข้อมูลมา 2 ชุด คือ เลขindex กับ data สาเหตุที่ต้องระบุ index เพราะเราต้องมีการกำหนด key
       <section className="slider">
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
            {ImageData.map((data,index)=>{
                //ใน classname ความหมาย = index =current มั้ย ถ้าเท่าให้ใส่ class active 
                return(
                    <div className={index === current ? "slide active" : "slide"} key={index}> 
                        <div>
                            {index === current &&
                            (
                                <div>
                                    <img src={data.image} alt={data.title} className="image"/>
                                    <p>{data.title}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
       </section>

    )
}

export default ImageSlider