import Image from "next/image";
import Link from "next/link";

import logo from '../../public/images/logo.png'
import bgImage from '../../public/images/bg-images.png'
import imageOne from '../../public/images/image-one.png'
import imageTwo from '../../public/images/image-two.png'
import imageThree from '../../public/images/image-three.png'
import whatsappIcon from '../../public/icons/whatsapp.svg'
import mailIcon from '../../public/icons/mail.svg'
import instagramIcon from '../../public/icons/mail.svg'


import './globals.css';

export default function Home() {
  return (
    <main className="max-w-8xl w-full mx-auto">
      <nav className="grid grid-cols-2 gap-5 lg:grid-cols-6 py-5 border-t-4 border-pink px-6 md:px-20 items-center md:justify-items-between">
        <div className='col-span-1 lg:col-span-2 text-left font-heading'>
          <Image
          src={logo}
          alt="Shanis Bakery Logo"
          className="sm:w-3/4 lg:w-1/2"
          />
        </div>
        <div className='hidden lg:block lg:col-span-2 text-center font-body'>
          <ul className="flex justify-center gap-10 text-green">
            <li><Link href='#about'>About Us</Link></li>
            <li><Link href='#product'>What we bake</Link></li>
            <li><Link href='#location'>Location</Link></li>
          </ul>
        </div>
        <div className="hidden lg:block lg:col-span-1"></div>
        <div className='col-span-1 text-center justify-self-end items-end lg:text-right font-body green-button'><Link href='#contact'>Contact</Link></div>
      </nav>

      <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition:"",
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        // margin:"25px"
        }}
      >

        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-10 md:pt-32 p-10 md:p-20">
          <div className="w-full lg:w-1/2" id="about">
            <h1 className="text-[36px] md:text-[72px] font-medium text-brown leading-tight md:leading-[80px]">Welcome to {"Shani's"} Bo-Kaap Delights {"-"} Your favourite local, neighbourhood bakery.</h1>
            <div className="md:pl-24 w-full md:w-2/3">
              <p className="pt-10 font-bold">At {"Shani's"} Bo-Kaap Bakery, we believe in the tradition of home baking.</p>
              <p className="pt-10 font-light">{"–"} a timeless art that transforms simple ingredients into delightful treats. Every bite carries the warmth of our kitchen, a testament to the love and care we infuse into each creation.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={imageOne}
              alt="Pastries"
              className="mx-auto"
              />
          </div>
        </div>

        {/* What our delights include */}

        <section className="w-full lg:w-3/5 p-10 mx-auto" id="product">
          <h1 className="text-orange text-[36px] md:text-[72px] leading-tight md:leading-[80px]">What our delights include</h1>
          <div className="flex flex-col md:flex-row gap-5 pt-10">
            <p className="w-full md:w-1/2 font-bold">Our menu is very diverse. We enjoy being able to bake for all.</p>
            <p className="w-full md:w-1/2 font-light">From freshly baked bread to decadent pastries, each item is crafted with precision and passion. We offer a diverse range of treats that cater to different palates, ensuring {"there's"} something for everyone.</p>
          </div>
        </section>
        <Image
          src={imageTwo}
          alt="Pastries"
          className="w-full md:pt-20 px-10 md:px-20"
        />  

        {/* Location */}
        <section className="pt-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-10 lg:pt-32 lg:p-20">
            <div className="pt-10 md:pt-0 w-full md:w-1/2 order-2 lg:order-1" id="location">
              <Image
                src={imageThree}
                alt="Pastries"
                className="mx-auto w-3/4 md:w-full"
                />
            </div>
            <div className="w-full lg:w-1/2 px-10 order-1 lg:order-2">
              <h1 className="text-[36px] md:text-[72px] font-medium text-green leading-tight md:leading-[80px]">Where can you find us?</h1>
              <div className="md:pl-24 w-full md:w-2/3">
                <p className="pt-10 font-bold">Our charming home bakery is nestled in the vibrant community of Bo-Kaap, Cape Town.</p>
                <p className="pt-10 font-light">Boasting a rich cultural tapestry, our location is not just a bakery but a cornerstone of the neighborhood, contributing to the tapestry of flavors that define this historic area.</p>
                <Link className="flex flex-row gap-5 hover:opacity-80 pt-5 md:pt-0" href="#">
                  <Image
                  src={instagramIcon}
                  alt="Instagram Icon"
                  />
                  <p className="text-[32px] font-medium font-heading text-green leading-tight md:leading-[80px]">Follow us</p>
                </Link>
              </div>
            </div>
          </div>
        </section>  

        {/* Form */}
        <section className="pt-10 md:pt-10 px-10 lg:px-20 pb-10 md:pb-32 border-b-4 border-pink" id="contact">
          <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-200 pb-5 md:pb-10">
            <h1 className="text-[36px] md:text-[72px] font-medium text-brown leading-tight md:leading-[80px] pb-5 md:pb-0">Place your order</h1>
            <Link href="#" className='col-span-2 md:col-span-2 text-center md:text-right font-body green-button'>Order now</Link>
          </div>
          <div className="grid grid-col-1 md:grid-cols-3 gap-5 md:gap-14">
            <div>
              <p className="pt-10 font-bold">We cater for all!</p>
              <p className="pt-10 font-light">Whether {"it’s"} for a special occasion, a big event or just your own treat cupboard, {"we’ve"} got you covered</p>
            </div>
            <div>
              <p className="pt-10 font-bold">Whatsapp preferred</p>
              <ul className="pt-10 font-light">
                <Link href="#" className="hover:opacity-80">
                  <li className="flex gap-3">
                    <Image
                    src={whatsappIcon}
                    alt="Whatsapp Icon"
                    className=""
                    />
                    <p>074 356 7394 {"–"} Rughshana</p>
                  </li>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <li className="flex gap-3 pt-5">
                    <Image
                    src={mailIcon}
                    alt="Mail Icon"
                    />
                    <p>rughshanawilliams@gmail.com</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <p className="pt-10 font-bold">Operating Times</p>
              <ul className="flex flex-col pt-10 font-light font-body gap-3">
                <li>Every Thurs, Fri, Sat & Sun</li>
                <li>Collections always welcomed</li>
                <li>Delivery available at additional cost(T&Cs Apply)</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
