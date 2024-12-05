// py-[5%] px-[10%]

function App() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 w-screen h-screen grid-rows-[40vh_23vh_23vh_80vh_60vh_25vh_25vh_60vh] sm:grid-rows-[40vh_23vh_60vh_30vh_20vh_35vh] overflow-x-hidden gap-[4%] px-[4%] py-[4vh] lg:grid-cols-4 lg:grid-rows-[repeat(24,_minmax(0,_1fr))] lg:py-[5%] lg:px-[10%] lg:gap-5">
      <div className="bg-purple500 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-12 p-[8%] flex flex-col justify-center items-center justify-between">
        <h1 className="text-white text-center">
          Social Media <span className="text-yellow500">10x</span> Faster with AI
        </h1>
        <img className = "w-[200px]" src="\images\illustration-five-stars.webp" alt="" />
        <h4 className="text-white">
          Over 4,000 5-star reviews
        </h4>
      </div>
      <div className="bg-white rounded-lg lg:col-span-2 lg:row-span-10 p-[8%]">
      <img src="\images\illustration-multiple-platforms.webp" alt="" />
      <h3>
      Manage multiple accounts and platforms.
      </h3>
        
      </div>
      <div className="bg-yellow500 rounded-lg lg:row-span-17 p-[8%]">
        <h3>
          Maintain a consistent posting schedule.
        </h3>
        
        <img src="\images\illustration-consistent-schedule.webp" alt="" />
      </div>
      <div className="bg-purple100 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-7 p-[8%]">
        <h3>
          Schedule to social media.
        </h3> 
        <img src="\images\illustration-schedule-posts.webp" alt="" />
        <h4>
          Optimize post timings to publish content at
          the perfect time for your audience.
        </h4>
      </div>
      <div className="bg-purple500 rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-7 p-[10%]">
      <img src="\images\illustration-grow-followers.webp" alt="" />
      <h2>
        Grow followers with non-stop content.
      </h2>
      </div>
      <div className="bg-white rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-12 p-[10%]">
        <h1>56%</h1>
        <h4>faster audience growth</h4>
         
        <img src="\images\illustration-audience-growth.webp" alt="" />
      </div>
      <div className="bg-yellow100 rounded-lg lg:row-span-7 p-[10%]">
        <h3>
          Create and schedule content quicker.
        </h3>
        
        <img src="\images\illustration-create-post.webp" alt="" />
      </div>
      <div className="bg-yellow500 rounded-lg lg:row-span-7 lg:col-span-2 p-[10%]">
        <h3>
          Write your content using AI.
        </h3>
        
        <img src="\images\illustration-ai-content.webp" alt="" />
      </div>
    </div>
  );
}

export default App;
