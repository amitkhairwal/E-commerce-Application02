import './Product.css';
import Tilt from "react-parallax-tilt"

const Product = ({_id,title,thumbnail,price,discountPercentage,rating, }) => {
  return (  
    <>
    
      <div className="d-flex flex-wrap justify-center">
        <Tilt 
         className="parallax-effect-glare-scale   "
         perspective={500}
         glareColor="#fed7aa"
         glareEnable={true}
         glareMaxOpacity={0.50}
         scale={1.02}
         gyroscope={true}
        >
        
        <div className='column'>
           <div className='card'>
              <div className="image-container">
                <div className="first">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="discount">-{discountPercentage}%</span>
                    <span className="wishlist">
                      <i className="fa fa-heart-o" />
                    </span>
                  </div>
                </div>
                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image "
                  alt={title}
                />
              </div>
              <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{title}</h5>
                  <div className="d-flex flex-column mb-2">
                    <span className="new-price">$ {Math.round(price-discountPercentage*price/100)}</span>
                    <small className="old-price text-right">$ {price}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star" />
                    <span className="rating-number">{rating}</span>
                  </div>
                  <span className="buy">BUY +</span>
                </div>
              </div>
              </div>
              </div >
              </Tilt>
          
          
        
      
      </div>
    </>
  );
};

export default Product;