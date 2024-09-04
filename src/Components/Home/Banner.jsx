import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                banner.map((b, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={b.image}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`${b.next}`} className="btn btn-circle">❮</a>
                            <a href={`${b.prev}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Banner;

const banner = [
    {
        title: 'Affordable Price For Car Servicing',
        subtitle: "There are many variations of passages of available, but the majority have suffered alteration in some form",
        image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        next: '#slide2',
        prev: '#slide4',
    },
    {
        title: 'Quality Parts & Accessories',
        subtitle: "Find the best quality parts and accessories to keep your car running smoothly",
        image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        next: '#slide3',
        prev: '#slide1',
    },
    {
        title: 'Expert Technicians',
        subtitle: "Our technicians are certified and have years of experience in car servicing",
        image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        next: '#slide4',
        prev: '#slide2',
    },
    {
        title: 'Customer Satisfaction',
        subtitle: "We prioritize customer satisfaction with top-notch service and support",
        image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        next: '#slide1',
        prev: '#slide3',
    },
];
