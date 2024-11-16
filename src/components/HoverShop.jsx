
const HoverShop = ( { items = [] } ) => {
    return (
        <div className="m-14">
            <div className="grid grid-cols-4 mx-44">
            {items.map((item) => (
                <div className='text-center' key={item.id}>
                    <img className='cursor-pointer' src={item.defaulDisplaytImage}></img>
                    <div>
                        <div className="font-semibold">{item.name}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HoverShop