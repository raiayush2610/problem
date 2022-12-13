import React ,{useState,useEffect} from 'react'
// import axios from 'axios';
import './Cart.css'
import image1 from '../../imgs/pizza.jpg';
import potato_chip from '../../imgs/allo.png';
import colddrink from '../../imgs/colddrink.png'
import cheeseburger from '../../imgs/cheesebuger.png'


const Cart = ()=>{
  const [foodItems, setFoodItems] = useState([]);
  
  const addToCart =async(e)=>{
    try {
      console.log(e);
      
    } catch (error) {console.log(error);}
  }
  return (
    <>
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Feature</h5>
          </div>
          <div className="feature-body">
             {/* card 1 */}
            <div className="card1">
                <img  className="card-img"src={image1} alt="" srcset="" />
              <div className="card-body">
              <div className="card-title">
                <h5 value="burger">Burger</h5>
                </div>
                <div className="list-item">
                 <div className="item1" value='120'>₹120 </div>
                    
                </div>
              </div>
              <button className="card-button"  type="button"onClick={e=>{addToCart(e.target.burger)}}>Added to cart</button>
              
              </div>
              {/* card 2 */}
            <div className="card2">
            <img  className="card-img"src={image1} alt="" srcset="" />
            <div className="card-body">
                <div className="card-title">
                  <h5 >Pizza</h5>
                </div>
                <div className="list-item">
                 <div className="item1"><p>₹ 120</p> </div>
                  
                </div>
              </div>
              <button className="card-button" type="button">Added to cart</button>
            </div>

            {/* card 3 */}
            <div className="card3">
            <img  className="card-img"src={cheeseburger} alt="" srcset="" />
              <div className="card-body">
                <div className="card-title">
                  <h5>Chesse Burger</h5>
                  
                </div> 
                <div className="list-item">
                 <div className="item1"><p>₹145 </p> </div>
                     
                </div>
              </div>
              <button className="card-button" type="button">Added to cart</button>
              </div>
          </div>
          <div className="feature-body">
             {/* card 1 */}
            <div className="card1">
                <img  className="card-img"src={colddrink} alt="" srcset="" />
              <div className="card-body">
              <div className="card-title">
                <h5 >Cold drink</h5>
                </div>
                <div className="list-item">
                 <div className="item1">₹120 </div>
                    
                </div>
              </div>
              <button className="card-button" type="button">Added to cart</button>
              
              </div>
              {/* card 2 */}
            <div className="card2">
            <img  className="card-img"src={potato_chip} alt="" srcset="" />
            <div className="card-body">
                <div className="card-title">
                  <h5 >Potato chip</h5>
                </div>
                <div className="list-item">
                 <div className="item1"><p>₹ 150</p> </div>
                  
                </div>
              </div>
              <button className="card-button" type="button">Added to cart</button>
            </div>

            {/* card 3 */}
            <div className="card3">
            <img  className="card-img"src={image1} alt="" srcset="" />
              <div className="card-body">
                <div className="card-title">
                  <h5>Chesse Burger</h5>
                  
                </div> 
                <div className="list-item">
                 <div className="item1"><p>₹145 </p> </div>
                     
                </div>
              </div>
              <button className="card-button" type="button">Added to cart</button>
              </div>
          </div>

      </div>
    </>
  )
}

export default Cart
