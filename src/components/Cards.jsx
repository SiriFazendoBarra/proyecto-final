import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import { useFavoritesContext } from '../context/FavoritesContext';
import { useCartContext } from "../context/CartContext";

export default function Cards({ item }) {
  const { favorites, handleFavorites } = useFavoritesContext()
  const { cart, handleCart } = useCartContext()
  const navigate = useNavigate()

  const handleHome = () => {
    navigate(`../market/${item.id}`)
  }

  return (
    <Card className='m-auto w-100 animation-zoom-card' role="button">
      <Card.Img className='CardImg cursor-pointer' variant="top" onClick={() => handleHome()} src={item.img} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className=' h6'>{item.title}</Card.Title>
        <div className='d-flex justify-content-between align-items-center'>
          {
            !favorites.some((ele) => ele == item.id) ?
              <FaRegHeart className='h3 m-0 z-2' role="button" onClick={() => handleFavorites(item.id)} />
              :
              <FaHeart className='h3 m-0 z-2' role="button" onClick={() => handleFavorites(item.id)} />
          }

          <h4 className='m-0'>${item.price}</h4>
          {/* <button className="btn btn-light" onClick={() => handleCart(item.id)}>Buy</button> */}
          {/* <button className="btn btn-light" onClick={() => removeCart(item.id)}>-</button> */}
          {/* <button className={!cart.some(ele => ele.id == item.id) ? "btn btn-light" : "btn btn-disable"} disabled={!cart.some(ele => ele.id == item.id) ? false : true} onClick={() => handleCart(item.id)}>add</button> */}
        </div>

      </Card.Body>
    </Card >
  )
}