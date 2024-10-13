import ItemList from "./ItemList";
import {useState} from 'react'

const RestaurantCategory = (props) => {
  const data = props;
  console.log("data:",data);
console.log(data.data.itemCards.length)
//handleShow
const[showItems, setShowItems] = useState(false)
const handleShow =()=>{
  setShowItems(!showItems)
}
 
  return (
    <div>
      {/*Header*/}
      <div className="w-7/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto ">
        <div className="flex justify-between cursor-pointer " onClick ={handleShow}><span className="font-bold text-xl">
          {data?.data?.title} ({data?.data?.itemCards.length})
        </span>
        {<span>{showItems?"▲":"▼"}</span>}</div>
        
        {showItems && <ItemList key={data?.data?.itemCards?.card?.info?.id} items={data?.data?.itemCards} />}
      </div>

      {/*Accordion body */}
    </div>
  );
};
export default RestaurantCategory;
