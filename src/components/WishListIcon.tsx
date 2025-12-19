import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

type WishListIconProps = {
  count: number;
}
export const WishListIcon = ({count}:WishListIconProps) => {
    if (count <=0){
        return null;
    }
  return (
          <Link to="/wishlist" className="text-white relative ">
            <Heart className=" "/>
            <div className="rounded-full absolute w-5 h-5 flex bg-red-500 items-center justify-center -top-2 -right-2">{count}</div>
          </Link>
  )
}
