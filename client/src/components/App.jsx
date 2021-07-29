import React, {useState} from 'react';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
// import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

//25167

const App = () => {
  const [currentProductId, setProductId] = useState(25192);
  return (
    <div>
      <RelatedProduct currentProductId={currentProductId} />
      <Reviews />
    </div>
  )
}

export default App;