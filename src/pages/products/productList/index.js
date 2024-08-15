import React from 'react'
import { useInView } from 'react-intersection-observer';

const dataArr = [
    {
        title: 'Non-Perishable Food Items:',
        items: [
            {
                title1: 'Packaged snacks',
            },
            {
                title1: 'Canned goods',
            },
            {
                title1: 'Dried fruits and nuts',
            },
        ]
    },
    {
        title: 'Clothing and Textiles:',
        items: [
            {
                title1: 'Apparel',
            },
            {
                title1: 'Shoes',
            },
            {
                title1: 'Fabrics',
            },
        ]
    },
    {
        title: 'Books and Printed Materials:',
        items: [
            {
                title1: 'Books',
            },
            {
                title1: 'Magazines',
            },
            {
                title1: 'Posters',
            },
        ]
    },
    {
        title: 'Electronics:',
        items: [
            {
                title1: 'Mobile phones (without batteries or with special packaging)',
            },
            {
                title1: 'Laptops',
            },
            {
                title1: 'Accessories (chargers, earphones)',
            },
        ]
    },
    {
        title: 'Household Goods:',
        items: [
            {
                title1: 'Kitchenware',
            },
            {
                title1: 'Home decor',
            },
            {
                title1: 'Linens',
            },
        ]
    },
    {
        title: 'Toys and Games:',
        items: [
            {
                title1: 'Board games',
            },
            {
                title1: 'Action figures',
            },
            {
                title1: 'Educational toys',
            },
        ]
    },
    {
        title: 'Beauty Products:',
        items: [
            {
                title1: 'Non-flammable cosmetics',
            },
            {
                title1: 'Skincare products',
            },
            {
                title1: 'Haircare products',
            },
        ]
    },
    {
        title: 'Jewelry and Accessories:',
        items: [
            {
                title1: 'Watches',
            },
            {
                title1: 'Necklaces',
            },
            {
                title1: 'Handbags',
            },
        ]
    },
]
const dataArr2 = [
    {
        title: 'Hazardous Materials:',
        items: [
            {
                title1: 'Explosives (fireworks, flares)',
            },
            {
                title1: 'Flammable liquids (gasoline, paint thinners)',
            },
            {
                title1: 'Toxic substances (pesticides, certain chemicals)',
            },
        ]
    },
    {
        title: 'Perishable Goods:',
        items: [
            {
                title1: 'Fresh fruits and vegetables',
            },
            {
                title1: 'Meat and dairy products',
            },
            {
                title1: 'Seafood',
            },
        ]
    },
    {
        title: 'Restricted or Controlled Items:',
        items: [
            {
                title1: 'Firearms and ammunition',
            },
            {
                title1: 'Knives and sharp objects',
            },
            {
                title1: 'Alcohol (without proper licensing)',
            },
            {
                title1: 'Tobacco products',
            },
        ]
    },
    {
        title: 'Illegal Substances:',
        items: [
            {
                title1: 'Drugs and narcotics',
            },
            {
                title1: 'Counterfeit goods',
            },
            {
                title1: 'Items violating intellectual property laws',
            },
        ]
    },
    {
        title: 'Live Animals:',
        items: [
            {
                title1: 'Pets (unless through specialized services)',
            },
            {
                title1: 'Insects',
            },
            {
                title1: 'Reptiles',
            },
        ]
    },
]
const ProductList = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className='pt100'>
            <div className="container" ref={ref}>
                <h2 className='fs50 animate__animated animate__backInLeft'>
                    Product List: <span style={{ color: '#f0b913' }}>What you can and can't ship with YES EXPRESS SERVICES</span>
                </h2>
                <p className='text-center fs20 mt-2 mb-6 animate__animated animate__backInRight'>
                    We offer a seamless shipping experience for a wide range of products. However, certain items are allowed, while others are prohibited for shipment. Please review the guidelines below to ensure your items comply with our shipping policies.
                </p>
                <h3 className='fs30 font-semibold animate__animated animate__backInLeft'>Allowed Products:</h3>
                <ol className='md:ps-4 ps-2 mt-2 flex justify-between flex-wrap md:gap-3 gap-2 font-medium' style={{ listStyle: 'decimal' }}>
                    {
                        dataArr.map((data, index) => (
                            <div key={index} className='md:w-[49.3%] w-full'>
                                <li className='fs20 animate__animated animate__backInUp'>
                                    {data.title}
                                </li>
                                <ul className='ps-6 font-normal' style={{ listStyle: 'disc' }}>
                                    {
                                        data.items.map((subData) => (
                                            <li className='fs16 animate__animated animate__backInUp'>
                                                {subData.title1}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </ol>
                <h3 className='fs30 font-semibold mt-4 animate__animated animate__backInLeft'>Prohibited Products:</h3>
                <ol className='ps-4 mt-2 flex flex-wrap justify-between gap-3 font-medium' style={{ listStyle: 'decimal' }}>
                    {
                        dataArr2.map((data, index) => (
                            <div key={index} className='md:w-[49.3%] w-full'>
                                <li className='fs20 animate__animated animate__backInUp'>
                                    {data.title}
                                </li>
                                <ul className='ps-6 font-normal' style={{ listStyle: 'disc' }}>
                                    {
                                        data.items.map((subData) => (
                                            <li className='fs16 animate__animated animate__backInUp'>
                                                {subData.title1}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default ProductList
