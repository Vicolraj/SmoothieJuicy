import './styles/Products.css'
import berry from '../assets/products/berry.png'
import { use, useEffect, useState } from 'react';
import ViewMore from './viewmore.jsx'

const Products = (
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
    const [bottomPriceAnimation, setBottomPriceAnimation] = useState({marginBottom: '-100px', filter: 'opacity(0)', transition: '.7s', transitionDelay: '.6s'})
    const [infoData1, setInfoData1] = useState({opacity: '0', transform: 'translateY(300px)', filter: 'blur(5px)', transition: '2s'});
    const [infoData2, setInfoData2] = useState({opacity: '1', marginBottom: '0px'});

    const [runAnimations, setRunAnimations] = useState(false)


    let changeUi = (content.width =='0px' );
    let bottomPrice = ((Math.round (price) + 0.00).toPrecision(2));

   useEffect(() => {
    let timeout1, timeout2;

    if (runAnimations) {
    timeout1 = setTimeout(() => {
        if (runAnimations) {
        setProductInfoAnimation({ paddingLeft: '50px', width: '100vw', transform: 'translateY(-100px)', transition: '2s' });

        timeout2 = setTimeout(() => {
            setInfoData1({ opacity: '1', transform: 'translateY(-60px)', filter: 'blur(0px)', transition: '2s' });
            setInfoData2({ opacity: '0', filter: 'blur(5px)', transition: '2s' });
        }, 1000);
        }
    }, 2000);
    } else {
    setInfoData1({ opacity: '0', transform: 'translateY(300px)', filter: 'blur(5px)', transition: '.5s' });
    setInfoData2({ opacity: '1', filter: 'blur(0px)', transition: '.5s' });
    }

    return () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    };
}, [runAnimations]);


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
                                    setProductInfoAnimation({ paddingLeft: '0px', width: '0vw', transition: '.5s'});
                                    setImgAnimation({width: ' '});
                                    setBackTextAnimation({transform: 'translateX(500px)', filter: 'opacity(0)', transition: 'all .5s'});
                                    setBottomPriceAnimation({marginBottom: '-100px', filter: 'opacity(0)', transition: '.2s', transitionDelay: '0s'})
                                    setRunAnimations(false)
                                }
                                 }>Back</button>
                </div>
                <div className='productImgContainer' style={{...imgAnimation }}>
                    <img draggable="false" style={{width: content.width}} src={img} alt="productimg" />
                </div>
                <h1 role='name' style={{...backTextAnimation}} className='backText'>{name.substring( 0, name.indexOf(' '))}</h1>
                <div role='Info' style={{...productInfoAnimation}}  className='productInfo'>
                    <small>{number}</small>
                    <h3>{name}</h3>
                    
                    <article style={{...infoData2}}>
                        <small>{flavour} </small> <br /><br />
                        <span style={{maxWidth: 'max-content', maxHeight: 'max-content'}} onClick={
                            () => {
                                if(!changeUi) {
                                    setIncreaseWidth( { height: '100vh', zIndex: '100'});
                                    expand();
                                    setBackButtonAnimation({filter: 'opacity(1)', width: 'max-content' });
                                    setProductInfoAnimation({ paddingLeft: '50px', width: '100vw', transition: '2s'});
                                    setImgAnimation({width: '100vw'});
                                    setBackTextAnimation({transform: 'translateX(0px)', filter: 'opacity(0.5)', transition: 'all 1.5s',});
                                    setBottomPriceAnimation({marginBottom: '30px', filter: 'opacity(1)', transition: '1.5s', transitionDelay: '.5s'});
                                    setRunAnimations(true);
                                }
                            }
                        }>
                        <ViewMore clr={(changeUi) ? 'black' : 'white'} />
                    </span>
                    </article>
                    
                </div>
            </article>

            <article className='infoData1' style={{...infoData1}}>
                        <p role='flavour'>
                            <small>{flavour}</small>
                            &nbsp;&nbsp;&nbsp;
                            <small>${Number(price).toFixed(2)}&nbsp;--&nbsp;${Number(maxprice).toFixed(2)}</small>
                        </p>
                        <p role='About'>{about}</p>
                        <button role='addToCart'>Add to cart</button>
            </article>
            <p style={{...bottomPriceAnimation}} role='price' className='bottomPrice'>${Number(bottomPrice).toFixed(2)}</p>
        </section>
    )
}



export default Products;