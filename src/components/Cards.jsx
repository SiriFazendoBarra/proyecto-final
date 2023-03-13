import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards({ item, params }) {

  const navigate = useNavigate()


  const handleHome = () => {
    if (params.id == null) {
      navigate(`home/${item.id}`)
      console.log(1)
    } else {
      console.log(2)
      navigate(`/${item.id}`)
    }
  }
  

  return (
    <Card className='m-auto w-100 bg-dark' onClick={handleHome}>
      <Card.Img className='CardImg' variant="top" src={item.img} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className=' h6'>{item.title}</Card.Title>
        <div className='d-flex justify-content-between'>
          <h4>${item.price}</h4>
          <Button variant="light">Buy</Button>
        </div>


      </Card.Body>
    </Card>
  )
}