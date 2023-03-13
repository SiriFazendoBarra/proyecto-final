import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import { useFavoritesContext } from '../context/FavoritesContext';

export default function Cards({ item }) {
  const { addFavorites } = useFavoritesContext()
  const navigate = useNavigate()

  const handleHome = () => {

    navigate(`home/${item.id}`)
  }

  return (
    <Card className='m-auto w-100 bg-dark' role="button">
      <Card.Img className='CardImg cursor-pointer' variant="top" onClick={handleHome} src={item.img} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className=' h6'>{item.title}</Card.Title>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='h3 m-0 z-2' role="button" onClick={()=> addFavorites(item)}>❤️</p>
          <h4 className='m-0'>${item.price}</h4>
        </div>
      </Card.Body>
    </Card>
  )
}