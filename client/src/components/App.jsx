import React, {useState} from 'react';
// import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
// import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

const App = (props) => {
  return (
    <div>
      <RelatedProduct/>
      <Reviews />
    </div>
  )
}

export default App;