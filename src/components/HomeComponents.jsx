
import { Link } from 'react-router-dom'
import models from '../../models.json'
import FooterHomePage from './FooterHomePage';

const HomeComponent = () => {
    const {models: products} = models;
    return (
        <div>
            {products.map((product) => (
                <div className='bg-cover bg-center w-full h-screen' style={{backgroundImage: `url(${product.defaultImage})`}} key={product.id} name={product.id} >
                    <div className=''>
                        <div className='flex flex-col w-full h-screen justify-between text-center font-montserrat'>
                            <div className='mt-[66px] flex-col'>
                                <div className='text-white font-semibold text-[55px]'>{product.name}</div>
                                <div className='text-white font-normal text-[30px] mt-[-10px] underline underline-offset-8 decoration-1'>{product.topDetails}</div>
                                <div className='text-white font-semibold text-[15px] tracking-wider'>{product.basePrice}</div>
                            </div>
                            <div className='mb-10 font-montserrat text-sm font-medium text-[14px] tracking-wider'>
                                <Link className='text-white bg-[#3e6ae1] mx-2.5 px-24 py-3 rounded' to={`/car/${product.id}`} >Order Now</Link>
                                <Link className='bg-[#ffffff] mx-2.5 px-24 py-3 rounded' to={`/car/${product.id}`} >Demo Drive</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <FooterHomePage />
        </div>
    )
}

export default HomeComponent