import React from 'react';
import img1 from '../../../assets/assets/images/banner/1.jpg'
import img2 from '../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../assets/assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px] sm:relative">
                    <img
                        src={img1}
                        className="w-full " />
                    <div className="absolute left-0 bottom-0 space-y-6  flex top-0 bg-gradient-to-r from-[#151515] to-transparent h-full w-full  ">
                        <div className='text-white absolute top-1/4 left-14 right-5'>
                            <div className='s'>
                                <h2 className='text-[40px] mb-10'> Affordable Price For Car Servicing</h2>
                            </div>
                            <div>
                                <p className='text-[20px] mb-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div>
                                <button className="btn btn-active btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-2  flex -translate-y-1/2 transform justify-end sm:absolute sm:left-0 sm:bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img
                        src={img2}
                        className="w-full" />

                    <div className="absolute left-0 bottom-0 space-y-6  flex top-0 bg-gradient-to-r from-[#151515] to-transparent h-full w-full  ">
                        <div className='text-white absolute top-1/4 left-14 right-5'>
                            <div className='s'>
                                <h2 className='text-[40px] mb-10'> Affordable Price For Car Servicing</h2>
                            </div>
                            <div>
                                <p className='text-[20px] mb-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div>
                                <button className="btn btn-active btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>

                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 bottom-2  flex -translate-y-1/2 transform justify-end">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img
                        src={img3}
                        className="w-full" />
                    <div className="absolute left-0 bottom-0 space-y-6  flex top-0 bg-gradient-to-r from-[#151515] to-transparent h-full w-full  ">
                        <div className='text-white absolute top-1/4 left-14 right-5'>
                            <div className='s'>
                                <h2 className='text-[40px] mb-10'> Affordable Price For Car Servicing</h2>
                            </div>
                            <div>
                                <p className='text-[20px] mb-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div>
                                <button className="btn btn-active btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-2  flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img
                        src={img4}
                        className="w-full" />
                    <div className="absolute left-0 bottom-0 space-y-6  flex top-0 bg-gradient-to-r from-[#151515] to-transparent h-full w-full  ">
                        <div className='text-white absolute top-1/4 left-14 right-5'>
                            <div className='s'>
                                <h2 className='text-[40px] mb-10'> Affordable Price For Car Servicing</h2>
                            </div>
                            <div>
                                <p className='text-[20px] mb-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div>
                                <button className="btn btn-active btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-2  flex -translate-y-1/2 transform justify-end">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;