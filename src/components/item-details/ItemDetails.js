import React, { useState, useEffect } from 'react'
import Loader from '../loader/Loader';
import ItemDetailsView from './ItemDetailsView';

import './ItemDetails.scss';

const ItemDetails = ({ selectedItem, getData, getImageUrl, children, path }) => {

  const [ item, setItem ] = useState({});

  useEffect(() => {
    updateItem()
    
  }, [selectedItem])

  const updateItem = async () => {
    const res = await getData(selectedItem);
    setItem(res);
  }

  const detailedView = (
    <ItemDetailsView 
      item={item} 
      selectedItem={selectedItem}
      getImageUrl={getImageUrl}
      path={path}
    >
      { children }
    </ItemDetailsView>
  )

  const details = item.name ? detailedView : <Loader/>;

  return (
    details
  )
}

export default ItemDetails