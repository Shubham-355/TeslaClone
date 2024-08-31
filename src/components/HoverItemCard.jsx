

const HoverItemCard = ({ items = [] }) => {
    return (
        <div className="m-20 ml-[200px]">
            <div className="grid grid-cols-4 w-full">
            {items.map((item) => (
                <div className='text-center' key={item.id}>
                    <img className='w-80 cursor-pointer' src={item.defaulDisplaytImage}></img>
                    <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="flex justify-center space-x-4 text-slate-600 text-sm">
                            <div className="underline cursor-pointer hover:decoration-2 hover:text-black duration-300">Learn</div>
                            <div className="underline cursor-pointer hover:decoration-2 hover:text-black duration-300">Order</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HoverItemCard