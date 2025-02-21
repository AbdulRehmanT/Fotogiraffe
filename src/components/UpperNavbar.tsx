import Link from "next/link";

const UpperNavbar = () => {
    return ( 
        <div className="bg-black w-full p-2 flex itmes-center justify-center text-white">
            <Link href='/' className="underline"><span>Our big sale is on. Save 20% on your first order when you create an account!</span></Link>
        </div>
    );
}
 
export default UpperNavbar;