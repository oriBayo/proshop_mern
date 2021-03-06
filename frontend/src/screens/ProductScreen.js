import {React, useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import Rating from '../components/Rating'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import axios from 'axios'

const ProductScreen = () => {
    const params = useParams()
    
    const [product,setProduct] = useState({})
    useEffect(()=>
    {
        const fetchProduct = async()=>
        {
            const {data} = await axios.get('/api/products/' + params.id)
            setProduct(data)
        }
        fetchProduct();
    },[])
    
    return (
        <>
          <Link className='btn btn-light my-3' to='/'>Go Back</Link> 
          <Row>
            <Col md={6}>
               <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price : ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description : {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col> 
            <Col md={3}>
                <Card >
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock':'Out Of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className='div-add-to-cart'>
                            <Button className='btn-block add-to-cart' type='button' disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>  
          </Row> 
        </>
    )
}

export default ProductScreen