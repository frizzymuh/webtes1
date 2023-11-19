import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-auto bg-black min-h-screen'>
      <div className='px-2 py-3 text-xl font-bold border-b-[1px] border-white mb-5 w-full'></div>
      <div className="mx-10 grid grid-cols-4 gap-4 content-evenly">
        <div className='text-[31px] text-white font-extrabold text-left inline-block w-52 h-[51px]'>
          Syllogism
          <div className='w-[37.73%] text-xl text-left font-normal'>
            <p className='mb-2 whitespace-nowrap'>Fakultas Ilmu Komputer,</p>
            <p className='mb-2 whitespace-nowrap'>Universitas Indonesia,</p>
            <p className='mb-2 whitespace-nowrap'>Depok</p>
            <p className='whitespace-nowrap'>16424</p>
          </div>
        </div>
        
        <div className='text-[30px] text-white font-semibold text-left inline-block w-52 h-[51px]'>Tentang Kami
          <div className='w-[37.73%] text-xl text-left font-normal'>
            <p className='mb-2 whitespace-nowrap'>Company</p>
            <p className='mb-2 whitespace-nowrap'>Our Team</p>
            <p className='mb-2 whitespace-nowrap'>Partner With Us</p>
            <p className='whitespace-nowrap'>Pusat Bantuan</p>
          </div>
        </div>
        
        <div className='text-[30px] text-white font-semibold text-left inline-block w-12 h-[51px]'>Kelas  
          <div className='w-[37.73%] text-xl text-left font-normal'>
            <p className='mb-2 whitespace-nowrap'>Try Out</p>
            <p className='mb-2 whitespace-nowrap'>Penawaran</p>
            <p className='mb-2 whitespace-nowrap'>Testimoni</p>
          </div>
        </div>

        <div className='text-[30px] text-white font-semibold text-left inline-block w-10 h-[51px]' >Contact
          <div className='w-[37.73%] text-xl text-left font-normal'>
            <p className='mb-2 whitespace-nowrap'>
              <img src="/ig.svg" className="gambar" alt="icon" /> @bemfasilkomui
            </p>
            <p className='mb-2 whitespace-nowrap'>
              <img src="/telp.svg" className="gambar" alt="icon" />
              (021) 20921334
            </p>
            <p className='whitespace-nowrap'>
              <img src="/linkedin.svg" className="gambar" alt="icon" />
              bemfasilkomui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
