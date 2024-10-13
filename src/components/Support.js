const Support = () => {
  return (
    <div className="bg-[#006699]   w-full  absolute">
      <h1 className="text-3xl mx-10 p-10 text-white">
        Help & Support
        <p className="text-sm">Let's take a step and help you better</p>
      </h1>
      <div className=" mx-36 p-10 w-9/12 bg-white h-full flex ">
        <div>
          <ul className="bg-gray-100 w-full m-4 p-4">
            <li className="m-4 p-4 bg-white  hover:text-orange-500">Help With Oders</li>
            <li className="m-4 p-4 bg-white  hover:text-orange-500">FAQs</li>
            <li className="m-4 p-4 bg-white  hover:text-orange-500">General Issues</li>
            <li className="m-4 p-4 bg-white  hover:text-orange-500">Partner Onboarding</li>
          </ul>
        </div>
        <div className="p-4 ">
           <div className="ml-12 text-2xl font-bold">FAQs</div> 
        </div>
      </div>
    </div>
  );
};
export default Support;
