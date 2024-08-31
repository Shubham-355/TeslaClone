import HoverItemCard from "./HoverItemCard"
import HovereItemList from "./HoverItemList"

const NavHover = ( { items = [], listitems = [] }) => {
    return (
        <div className="grid grid-cols-3 justify-center">
            <div className="col-span-2"><HoverItemCard items={items} /></div>
            <div><HovereItemList listitems={listitems} /></div>
        </div>
    )
}

export default NavHover