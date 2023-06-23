import { useState } from 'react'
import { imageProduct, thumbnailProduct} from '../../../models/imagesArray.js'
import left from '../../../assets/images/icon-previous.svg'
import rigth from '../../../assets/images/icon-next.svg'
import './images.css'

const Images = () => {

    const [index, setIndex] = useState(0);

    const handleLeft= () => {
        if (index <= 0) {
            setIndex(3);
        } else {
            setIndex(index - 1)
        }
    }
    const handleRigth= () => {
        if (index >= 3) {
            setIndex(0);
        } else {
            setIndex(index +1)
        }
    }
    const handleThumbnail = (ind) =>{
        setIndex(ind);
    }

    return (
        <div className='imgContainer'>
            <img className='imgLeft' src={left} onClick={handleLeft}/>
            <img className='imgProduct' src={imageProduct[index]}/>
            <img className='imgRigth' src={rigth} onClick={handleRigth}/>
            <div className='thumbnailContainer'>
                {thumbnailProduct.map((thumbnail , ind) =>{
                    return <div className={ind === index ? 'bor' : null}><img className={ind === index ? 'selected' : null} key={ind} src={thumbnail} onClick={()=>handleThumbnail(ind)}/></div>
                })}
            </div>
        </div>
    );
}

export default Images;
