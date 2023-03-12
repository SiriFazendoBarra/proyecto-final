import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards({ item }) {
  return (
    <Card className='m-auto w-100 bg-dark'>
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