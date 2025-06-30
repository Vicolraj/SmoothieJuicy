import { useState } from 'react'
import './App.css'

import Products from './components/products.jsx'
import Header from './components/Header.jsx'

import green from './assets/products/green.png'
import berry from './assets/products/berry.png'
import orange from './assets/products/orange.png'
import strawberry from './assets/products/strawberry.png'

function App() {
  const [ reverseWidth1, setReverseWidth1] = useState({width: '0px', });
  const [ reverseWidth2, setReverseWidth2] = useState({width: '0px'});
  const [ reverseWidth3, setReverseWidth3] = useState({width: '0px'});
  const [ reverseWidth4, setReverseWidth4] = useState({width: '0px'});

  const [productContainerWidth, setPCW] = useState({width1: "", width2: "", width3: "", width4: ""})
  let isDesktop = window.outerWidth > 600;

function expand(x){
  if(isDesktop){
      switch(x){
        case '01':
          setPCW({width1: "100vw", width2: "0px", width3: "0px", width4: "0px"})
        break;
        case '02':
          setPCW({width1: "0px", width2: "100vw", width3: "0px", width4: "0px"})
          break;
        case '03':
          setPCW({width1: "0px", width2: "0px", width3: "100vw", width4: "0px"})
          break;
        case '04':
          setPCW({width1: "0px", width2: "0px", width3: "0px", width4: "100vw"})
          break;
          default:
            setPCW({width1: "", width2: "", width3: "", width4: ""})
      }
    }
    else{
       setPCW({width1: "100vw", width2: "100vw", width3: "100vw", width4: "100vw"})
      // switch(x){
      //   case '01':
      //     setPCW({width1: "100vw", width2: "", width3: "", width4: ""})
      //   break;
      //   case '02':
      //     setPCW({width1: "", width2: "100vw", width3: "", width4: ""})
      //     break;
      //   case '03':
      //     setPCW({width1: "", width2: "", width3: "100vw", width4: ""})
      //     break;
      //   case '04':
      //     setPCW({width1: "", width2: "", width3: "", width4: "100vw"})
      //     break;
      //     default:
      //       setPCW({width1: "", width2: "", width3: "", width4: ""})
      // }
    }
  
}


function back(){
  setPCW({width1: "", width2: "", width3: "", width4: ""})
}

  function openNewProduct(){
    if(isDesktop){
      setReverseWidth1({width: '0px'}); setReverseWidth2({width: '0px'}); setReverseWidth3({width: '0px'}); setReverseWidth4({width: '0px'});
    }
    
  }



//  THE BELLOW CONTAINS THE TEXT THAT WOULD APPEAR ON EACH PAGE
  const productData = [
    {name: 'Green Smoothie', flavour: 'Guava Flavour', img: green, price: '89', maxprice: '101', number: '01',
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae accusantium ad ducimus nemo blanditiis recusandae! Asperiores adipisci veritatis animi!",
            clicked:() => openNewProduct(), content: {...reverseWidth1}, setContent: () => setReverseWidth1({width: 'clamp(100px, 10vw, 130px)'}),
            backgroundclr: 'rgb(67, 118, 13)', pExpand: () => expand('01'),
          },
    {name: "Berry Smoothie", flavour: "Delicious Flavour", img: berry, price: '79', maxprice: '91', number: '02',
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae accusantium ad ducimus nemo blanditiis recusandae! Asperiores adipisci veritatis animi!",
            clicked:() => openNewProduct(), content: {...reverseWidth2}, setContent: () => setReverseWidth2({width: 'clamp(100px, 10vw, 130px)'}),
            backgroundclr: 'rgb(177, 89, 104)', pExpand: () => expand('02'),
          },
    {name: "Orange Smoothie", flavour: "Orange Flavour", img: orange, price: '99', maxprice: '101', number: '03',
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae accusantium ad ducimus nemo blanditiis recusandae! Asperiores adipisci veritatis animi!",
            clicked:() => openNewProduct(), content: {...reverseWidth3}, setContent: () => setReverseWidth3({width: 'clamp(100px, 10vw, 130px)'}),
            backgroundclr: 'rgb(186, 106, 1)', pExpand: () => expand('03'),
        },
    {name: "Strawberry Smoothie", flavour: "Guava Flavour", img: strawberry, price: '100', maxprice: '191', number: '04',
            about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae accusantium ad ducimus nemo blanditiis recusandae! Asperiores adipisci veritatis animi!",
            clicked:() => openNewProduct(), content: {...reverseWidth4}, setContent: () => setReverseWidth4({width: 'clamp(100px, 10vw, 130px)'}),
            backgroundclr: 'purple', pExpand: () => expand('04'),
        },
  ]

  return (
    <section className='mainContainer'> 
    <Header />
      {productData.map(item =>
         <Products 
          key={item.number}
          clicked={ () => {item.clicked(); item.setContent()}}
          content={item.content}
          name={item.name}
          flavour={item.flavour}
          img={item.img}
          price={item.price}
          maxprice={item.maxprice}
          number={item.number}
          about={item.about}
          backgroundclr = {item.backgroundclr}
          expand = {item.pExpand}
          expandValue = {{...productContainerWidth}}
          back = {back}/>)}   
    </section>
  )
}

export default App;
