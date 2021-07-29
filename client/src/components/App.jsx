import React, {useState} from 'react';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
// import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

const App = (props) => {
  const [currentProductId, setCurrentProduct] = useState(25192);
  return (
    <div>
      {/* <RelatedProduct currentProductId={currentProductId} /> */}
      <Reviews currentProductId={currentProductId}/>
    </div>
  )
}

export default App;

//25167