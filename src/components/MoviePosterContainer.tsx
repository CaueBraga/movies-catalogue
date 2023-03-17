import Image from "next/image";
import Link from "next/link";
import example from "../assets/example.png";



export function MoviePosterContainer() {
    return (

        <div className="mt-8 px-2 sm:px-28 flex justify-center gap-4 mb-10 sm:gap-8 flex-wrap">

       <Link href={{pathname: `/movie/[route]`,
              query: {route:12} ,}}> <Image src={example} alt="" /> </Link>
        
        
        
        
        
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
        <Image src={example} alt="" />
     
         </div>
    )
}