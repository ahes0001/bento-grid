// py-[5%] px-[10%]

function App() {

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 w-screen h-screen grid-rows-[40vh_23vh_23vh_80vh_60vh_25vh_25vh_60vh] sm:grid-rows-[40vh_23vh_60vh_30vh_20vh_35vh] overflow-x-hidden gap-[4%] px-[2%] py-[4vh] lg:grid-cols-4 lg:grid-rows-[repeat(24,_minmax(0,_1fr))] lg:py-[5%] lg:px-[10%] lg:gap-5">
  <div className="bg-amber-600 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-12">01</div>
  <div className="bg-amber-600 rounded-lg lg:col-span-2 lg:row-span-10">02</div>
  <div className="bg-amber-600 rounded-lg lg:row-span-17">03</div>
  <div className="bg-amber-600 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-7">04</div>
  <div className="bg-amber-600 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-7 ">05</div>
  <div className="bg-amber-500 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-12 ">06</div>
  <div className="bg-amber-500 rounded-lg lg:row-span-7">07</div>
  <div className="bg-amber-500 rounded-lg lg:row-span-7 lg:col-span-2">08</div>
  
</div>
  )
{/* <div className=" grid grid-cols-4 grid-rows-[repeat(24,_minmax(0,_1fr))] w-screen py-[5%] px-[10%] gap-8">
  <div className=" bg-amber-600 row-span-12 rounded-lg">01</div>
  <div className=" bg-amber-600 col-span-2 row-span-10 rounded-lg">02</div>
  <div className="bg-amber-600 row-span-17 rounded-lg">03</div>
  <div className="bg-amber-600 row-span-7 rounded-lg">04</div>

  <div className="bg-amber-600 row-span-7 rounded-lg">05</div>
 
  <div className="bg-amber-500 rounded-lg row-span-12 ">06</div>
  <div className="bg-amber-500 rounded-lg row-span-7 ">07</div>
  <div className="bg-amber-500 rounded-lg row-span-7 col-span-2">08</div>
</div> */}

}

export default App
