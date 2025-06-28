import './styles/Products.css'
import berry from '../assets/products/berry.png'
import { useState } from 'react';
import ViewMore from './viewmore.jsx'

const Products= (
    {content, clicked,
        name=  "Juice Smoothie", flavour = "Apple Flavour", back,   
        img = berry, price = '79', maxprice = '91', number = '01',
        about = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae accusantium ad ducimus nemo blanditiis recusandae! Asperiores adipisci veritatis animi!",
        backgroundclr = 'orange', expand, expandValue, }) => {
  

    function propWidth(x){
        switch(x){
            case '01':
                return(expandValue.width1)
                break;
            case '02':
                return(expandValue.width2)
                break;
            case '03':
                return(expandValue.width3)
                break;
            case '04':
                return(expandValue.width4)
                break;
        }
    }

    const [increaseWidth, setIncreaseWidth] = useState({})
    const [backButtonAnimation, setBackButtonAnimation] = useState({filter: 'opacity(0)', width: '0' })
    const [productInfoAnimation, setProductInfoAnimation] = useState({ paddingLeft: '0px', width: '1vw'})
    const [imgAnimation, setImgAnimation] = useState({width: ' '})
    const [backTextAnimation, setBackTextAnimation] = useState({transform: 'translateX(200px)', filter: 'opacity(0)',  transitionDelay: ' 1.5s'})


    let changeUi = (content.width =='0px' );
    let bottomPrice = ((Math.round (price) + 0.00).toPrecision(2));
    return(
        <section id='productContainer' onClick={ () => {clicked();}}
        className="productContainer"
        style={
            {
                ...increaseWidth,
                color: (content.width == '0px') ? 'black' : 'white',
                background: changeUi ? 'white' : backgroundclr,
                width: propWidth(number),


                 opacity: (propWidth(number) == '0px') ? '1' : '1'
        }}>

            <article>
                <div style={{...backButtonAnimation}} className="backBtnContainer">
                    <button  role='BackButton'
                        className='back'
                        onClick={
                            () => {
                                    back();
                                    setBackButtonAnimation({filter: 'opacity(0)', width: '0' });
                                    setProductInfoAnimation({ paddingLeft: '0px', width: '0vw'});
                                    setImgAnimation({width: ' '});
                                    setBackTextAnimation({transform: 'translateX(200px)', filter: 'opacity(0)', transition: 'all .5s'});
                                  }
                                 }>Back</button>
                </div>
                <div className='productImgContainer' style={{...imgAnimation }}>
                    <img style={{width: content.width}} src={img} alt="productimg" />
                </div>
                <h1 role='name' style={{...backTextAnimation}} className='backText'>{name.substring( 0, name.indexOf(' '))}</h1>
                <div role='Info' style={{...productInfoAnimation}}  className='productInfo'>
                    <small>{number}</small>
                    <h3>{name}</h3>
                    <small>{flavour} </small> <br /><br />
                    <span style={{maxWidth: 'max-content', maxHeight: 'max-content'}} onClick={
                        () => {
                            if(!changeUi) {
                                setIncreaseWidth( { height: '100vh', zIndex: '100'});
                                expand();
                                setBackButtonAnimation({filter: 'opacity(1)', width: 'max-content' });
                                setProductInfoAnimation({ paddingLeft: '50px', width: '100vw'});
                                setImgAnimation({width: '100vw'});
                                setBackTextAnimation({transform: 'translateX(0px)', filter: 'opacity(0.5)', transition: 'all 1.5s',});
                            }
                        }
                    }>
                    <ViewMore clr={(changeUi) ? 'black' : 'white'} />
                </span>
                </div>
            </article>

            <p role='price' className='bottomPrice'>{Number(bottomPrice).toFixed(2)} SOL</p>
        </section>
    )
}



export default Products;