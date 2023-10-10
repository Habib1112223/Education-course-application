import './banner.css';

const Banner = () => {
      return (
            <div className={`px-2 lg:px-0 banner`}>
                  <div className="pt-[120px] pb-[200px] flex justify-center items-center flex-col" data-aos="fade-right">
                        <h1 className="text-amber-600 lg:text-5xl text-3xl text-center font-semibold mb-2">Your Education, Your Training</h1>
                        <div className='text-white text-center'>
                        <p>Training is mostly short-term with a concrete goal; it focuses more on the role  as it aims <br />
                               at a specific job or requirement and revolves around present or immediate worker needs.</p>
                        </div>
                        <div className="mt-[30px]">
                              <form className="pl-4 border-[#DEDEDE] border-2 rounded-lg bg-white">
                                    <input className='lg:w-[360px] outline-none' name="category" type="text" placeholder='Search here' />
                                    <button className='bg-amber-600 text-white py-4 px-7 rounded-r-lg text-base font-semibold' type="submit">Search</button>
                              </form>
                        </div>
                  </div>

            </div>
      );
};

export default Banner;