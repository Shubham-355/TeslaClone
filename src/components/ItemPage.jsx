import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carData from "../../models.json";
import { motion } from 'framer-motion';

const ItemPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedWheels, setSelectedWheels] = useState(null);
    const [selectedInterior, setSelectedInterior] = useState(null);
    const [selectedSteering, setSelectedSteering] = useState(null);
    const [price, setPrice] = useState(0);
    const [currentImageSet, setCurrentImageSet] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const selectedCar = carData.models.find((model) => model.id === id);
        if (selectedCar && selectedCar.configurations) {
            setCar(selectedCar);
            setSelectedColor(selectedCar.configurations.colors[0] || null);
            setSelectedWheels(selectedCar.configurations.wheels[0] || null);
            setSelectedInterior(selectedCar.configurations.interior[0] || null);
            setSelectedSteering(selectedCar.configurations.steering[0] || null);
            setPrice(Number(selectedCar.basePrice));
        }
    }, [id]);

    useEffect(() => {
        if (!car || !selectedColor || !selectedWheels || !selectedInterior || !selectedSteering) return;

        const exteriorImages = selectedColor.images[selectedWheels.name];
        if (!exteriorImages) {
            console.error("No image found for selected color and wheels.");
            return;
        }

        const images = [
            ...exteriorImages,
            ...selectedInterior.images[selectedSteering.name],
        ];

        setCurrentImageSet(images);
        setCurrentIndex(0);

        const totalCost = (selectedColor.price || 0) + (selectedWheels.price || 0) + (selectedInterior.price || 0) + (selectedSteering.price || 0);

        setPrice(Number(car.basePrice) + totalCost);
    }, [car, selectedColor, selectedWheels, selectedInterior, selectedSteering]);

    const handleColorChange = (color) => setSelectedColor(color);
    const handleWheelsChange = (wheel) => setSelectedWheels(wheel);
    const handleInteriorChange = (interior) => setSelectedInterior(interior);
    const handleSteeringChange = (steering) => setSelectedSteering(steering);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImageSet.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? currentImageSet.length - 1 : prevIndex - 1);
    };

    return (
        <div className="">
            {car && (
                <div className="flex relative h-screen">
                    <div className="fixed basis-3/4">
                        <div className="fixed left-0 top-0 w-3/4 h-screen overflow-hidden mt-10">
                            <motion.div className="flex" initial={{x:0}} animate={{x: `-${currentIndex * 100}%`}} transition={{duration: 0.5}}>
                                {currentImageSet.map((image, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
                                    </div>
                                ))}
                            </motion.div>
                            <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-1 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="fixed right-0 top-0 w-1/4 h-screen overflow-y-auto bg-white mt-20 scrollbar-hide p-4 pb-96">
                        <div className="">
                            <div className="text-center font-montserrat text-4xl font-semibold">{car.name}</div>
                            <div className="flex justify-around">
                                <div className="flex flex-col">
                                    <div className="">{car.range} ml</div>
                                    <div className="">Range (EPA est.)</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="">{car.topspeed}</div>
                                    <div className="">11</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="">2</div>
                                    <div className="">22</div>
                                </div>
                            </div>
                            <div className="">div</div>
                        </div>
                        <div className="">
                            <div className="">
                                <div>{selectedColor.price}</div>
                                <div>{selectedColor.name}</div>
                                <div>
                                    {car.configurations.colors.map((color) => (
                                        <button key={color.name} onClick={() => handleColorChange(color)} className="">
                                            <img src={color.previewImage} alt={color.name} className="" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="">{selectedWheels.price}</div>
                                    <div className="">{selectedWheels.name}</div>
                                    <div className="">
                                        {car.configurations.wheels.map((wheel) => (
                                            <button key={wheel.name} onClick={() => handleWheelsChange(wheel)} className="">
                                                <img src={wheel.previewImage} alt={wheel.name} className="" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="">{selectedInterior.price}</div>
                                    <div className="">{selectedInterior.name}</div>
                                    <div className="">
                                        {car.configurations.interior.map((interior) => (
                                            <button key={interior.name} onClick={() => handleInteriorChange(interior)} className="">
                                                <img src={interior.previewImage} alt={interior.name} className="" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="">{selectedSteering.price}</div>
                                    <div className="">{selectedSteering.name}</div>
                                    <div className="">
                                        {car.configurations.steering.map((steering) => (
                                            <button key={steering.name} onClick={() => handleSteeringChange(steering)} className="">
                                                <img src={steering.previewImage} alt={steering.name} className="" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    Total price: ${price.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemPage