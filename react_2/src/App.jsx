import React from "react";

function App() {
  return (
    <div className="w-[100%] bg-[#0A0C1C] h-[100%]">
      <div className="flex justify-center pt-[177px] pb-[177px] m-[25px] flex-wrap">
        <div className="w-[555px] h-[446px] bg-[#1B1937]">
          <div className="text-white text-4xl max-w-[450px] pl-[72px] pt-[71px]">
            Get <span className="text-[#AB5CDB]">insights</span> that help your
            business grow.
          </div>
          <p className="text-[#C6C5CD] pl-[72px] pt-[25px] max-w-[430px]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="pl-[72px] pt-[70px] flex">
            <div>
              <p className="text-3xl text-white">10k+</p>
              <p className="text-[#C6C5CD]">Companies</p>
            </div>
            <div className="pl-[60px]">
              <p className="text-3xl text-white">314</p>
              <p className="text-[#C6C5CD]">Templates</p>
            </div>
            <div className="pl-[60px]">
              <p className="text-3xl text-white">12M+</p>
              <p className="text-[#C6C5CD]">Queries</p>
            </div>
          </div>
        </div>
        <img className="w-[555px] h-[446px]" src="./Bitmap.png" alt="" />
      </div>
    </div>
  );
}

export default App;
