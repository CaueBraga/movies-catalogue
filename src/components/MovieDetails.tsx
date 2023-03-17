import Image from "next/image";
import dp from "../assets/dp.svg";

export function MovieDetails() {



    return (

<div className="bg-purple-900 text-white flex pt-8 md:pt-20 pb-4 px-4 lg:px-28 md:px-12">
      <div className="flex gap-8 pb-8 flex-col md:flex-row">
        <div className="md:mb-[-70px] m-auto">
          <Image
            loading="lazy"
            className="rounded-lg drop-shadow-2xl h-72 w-44 md:min-h-[576px] md:min-w-[384px]"
            width={383}
            height={474}
            src={dp}
            alt=""
          />
        </div>
        <div className="max-w-2xl">
          <strong className="text-2xl"> oi alberto •</strong>
          <span className="text-2xl">
            12/12/23
          </span>
          <div>
            <div>
              
                <span>
                 terror
                </span>
              
            3 horas
            </div>
            <div className="flex items-baseline gap-3">
              <div
                className="mt-4  radial-progress bg-violet-900 text-[#14FF00]"
                
              >
                55%
              </div>
              <span>Users Ratings</span>
            </div>
            <div>
              <h2 className="font-bold text-xl mt-8">Synopsis</h2>
              <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quam amet debitis itaque accusantium cupiditate, reprehenderit facere nemo sapiente odit aliquam blanditiis quia nesciunt, corrupti omnis odio tempora? Cupiditate, molestias.</p>
            </div>
            <div className="flex flex-wrap gap-6 gap-x-14 mt-6">
              
                <div className="w-40">
                  <strong className="block">roberto</strong>
                  <span>diretor</span>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )


}