
const HovereItemList = ( { listitems = [] } ) => {
    return (
        <div className="border-l-2">
            <div className="m-20">
                <div className="flex flex-col justify-start space-y-3">
                {listitems.map((listitem) => (
                    <div className='flex flex-col justify-start' key={listitem.id}>
                        <div className="font-semibold text-sm cursor-pointer hover:underline hover:text-slate-800 underline-offset-4">{listitem.name}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default HovereItemList