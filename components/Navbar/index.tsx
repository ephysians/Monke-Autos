// import Link from "next/link";
// import Image from "next/image";

// import CustomButton from "../CustomButton";

// const NavBar = () => (
//   <header className='w-full  absolute z-10'>
//     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
//       <Link href='/' className='flex justify-center items-center'>
//         <Image
//           src='/logoo.svg'
//           alt='logo'
//           width={118}
//           height={18}
//           className='object-contain'
//         />
//       </Link>

//       <CustomButton
//         title='Sign in'
//         btnType='button'
//         containerStyles='text-primary-blue rounded-md bg-white min-w-[130px]'
//       />
//     </nav>
//   </header>
// );

// export default NavBar;
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";

const NavBar = () => (
  <>
    {/* Top Navigation Bar */}
    <div className="bg-[#4a71ff] text-white w-full px-[20px] py-3">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center">
        <ul className="flex gap-6 flex-wrap text-sm font-open-sans">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/online-booking" className="hover:underline">
              Online Booking
            </Link>
          </li>
          <li>
            <Link href="/photo-gallery" className="hover:underline">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:underline">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/request-estimate" className="hover:underline">
              Request An Estimate
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Main Navigation Bar */}
    <header className="w-full absolute z-10">
      <nav className=" bg-white mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logoo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="rounded-md bg-primary-blue text-white min-w-[150px]"
        />
      </nav>
    </header>
  </>
);

export default NavBar;
