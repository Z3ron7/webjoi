import React from "react"
import FlashCard from "./FlashCard"
import "./style1.css"

const FlashDeals = () => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            
            <h1 className="text-black fw-bolder text-center">SERVICES</h1>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
