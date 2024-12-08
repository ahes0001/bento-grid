// py-[5%] px-[10%]

function App() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 w-full h-screen sm:grid-rows-[40vh_23vh_55vh_30vh_20vh_35vh] gap-[4%] px-[4%] py-[4vh] lg:grid-cols-4 lg:grid-rows-[repeat(24,_minmax(0,_1fr))] lg:py-[5%] lg:px-[10%] lg:gap-5">

      <div className="bg-purple500 rounded-lg sm:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-11 p-[8%] flex flex-col justify-center items-center justify-center">
        <h1 className="text-white text-center">
          Social Media <span className="text-yellow500">10x</span> Faster with AI
        </h1>
        <img className = "my-[5%] w-[200px]" src="\images\illustration-five-stars.webp" alt="" />
        <h4 className="text-white">
          Over 4,000 5-star reviews
        </h4>
      </div>

      <div className="bg-white rounded-lg lg:col-start-2 lg:col-end-3 lg:row-start-11 lg:row-end-18 p-[5%] flex flex-col justify-center items-center justify- ">
      <img src="\images\illustration-multiple-platforms.webp" alt="" />
      <h3>
      Manage multiple accounts and platforms.
      </h3>
        
      </div>
      <div className="h-[23vh] overflow-hidden bg-yellow500 rounded-lg lg:col-start-3 lg:col-end-4 lg:row-start-11 lg:row-end-18 p-[5%] flex flex-col lg:items-center">
        <h3 className=" mb-[5%]">
          Maintain a consistent posting schedule.
        </h3>
        
        <img className="w-[80%] sm:w-[85%] lg:w-[100%]" src="\images\illustration-consistent-schedule.webp" alt="" />
      </div>
      <div className="bg-purple100 rounded-lg sm:col-span-2 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-18 p-[5%] flex flex-col justify-center items-center text-center">
        <h3 className="mb-[5%]">
          Schedule to social media.
        </h3> 
        <img className="relative lg:inset-x-7 sm:h-[75%] lg:my-[5%] lg:h-[30vh] h-fit w-fit" src="\images\illustration-schedule-posts.webp" alt="" />
        <h4 className="mt-[5%] px-4 lg:text-left">
          Optimize post timings to publish content at
          the perfect time for your audience.
        </h4>
      </div>
      <div className="bg-purple500 rounded-lg sm:col-span-2 lg:row-span-7 lg: p-[5%] flex flex-col justify-around items-center text-center sm:flex-row ">
      <img className=" max-h-[20vh]" src="\images\illustration-grow-followers.webp" alt="" />
      <h2 className="object-contain max-w-80">
        Grow followers with non-stop content.
      </h2>
      </div>
      <div className="bg-white rounded-lg sm:col-span-2  lg:col-start-2 lg:col-end-3 lg:row-start-18 lg:row-end-25 p-[5%] flex flex-col justify-between lg:justify-around sm:flex-row lg:flex-col">
        <div>
        <h1>&gt;56%</h1>
        <h4 className="my-[2%]">faster audience growth</h4>
        </div>
        
         
        <img className="w-52 h-20" src="\images\illustration-audience-growth.webp" alt="" />
      </div>
      <div className="bg-yellow100 rounded-lg lg:row-start-1 lg:row-end-13 p-[5%] flex flex-col justify-center">
        <h3 className="mb-[5%]">
          Create and schedule content <span className="text-purple500 italic">quicker</span>.
        </h3>
        
        <img className="w-[150px]" src="\images\illustration-create-post.webp" alt="" />
      </div>

      <div className="bg-yellow500 rounded-lg  p-[5%] lg:col-start-1 lg:col-end-2 lg:row-start-13 lg:row-end-25 flex flex-col justify-around">
        <h3 className="pb-[5%]">
          Write your content using AI.
        </h3>
        
        <img className="w-fit h-fit object-contain overflow-hidden" src="\images\illustration-ai-content.webp" alt="" />
      </div>
    </div>
  );
}

export default App;
