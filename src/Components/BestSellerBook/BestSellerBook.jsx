import './BestsellerBook.css';

import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo';

import TreeShape from '../../assets/treeShape.png';

import { sellingBooksData } from '../../Data/Data';

import  { BsArrowRight} from  "react-icons/bs";
import { Link } from 'react-router-dom';

export default function BestSellerBook() {
  return (
    <section className="BestSellerBook">
        <div className="treeshape">
            <img src={TreeShape} alt="tree shape" />
        </div>

        <div className="container ">
            {
                sellingBooksData .map(({img,infoTitle,infoTitleTop,desc,price,shopbtnLink})=>{
                    return(
                        <div className="container bestselling-container">
                            <div className="selling-book-left">
                                <img src={img} alt="book" />
                            </div>
                            <div className="selling-book-right">
                                <TitleTypeTwo Title={'Best Seller Book'} className='sellingBookTitle'/>
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                <small>Shop it now</small>
                                <BsArrowRight />  
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </section>
  )
}
