import React from 'react';
import { services } from '@/lib/services';


const Services = () => {

    return (
        <div className='my-5'>
            <div className='max-w-2xl mx-auto text-center mb-8'>
                <h3 className='text-red-500'>Services</h3>
                <h1 className='text-2xl font-bold mb-4'>Our Service Area</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-3 gap-5 px-5'>
                {
                    services.map((service) => (
                        <div className="card card-compact bg-base-100   shadow-xl">
                            <figure>
                                <img
                                    className='w-full h-56 object-cover'
                                    src= {service.img}
                                    alt= {service.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>$ {service.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn text-white btn-error">Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Services;