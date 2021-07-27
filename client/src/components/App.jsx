import React, {useState} from 'react';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
// import QA from './QA/QA.jsx';
// import Reviews from './Reviews/Reviews.jsx';

const App = () => {
  const [currentProductId, setProductId] = useState(25167);
  return (
    <div>
      {/* <Overview /> */}
      <RelatedProduct currentProductId={currentProductId}/>
      {/* <QA/>
      <Reviews/> */}
    </div>
  )
}

export default App;