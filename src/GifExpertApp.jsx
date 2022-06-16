import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState( [ 'Halo' ] );
  
  const onAddCategory = ( newCategory) => {

    if( categories.includes(newCategory) ) return;
    //categories.push('Zelda')
    setcategories([ newCategory ,...categories])
    //setcategories( cat => [ ...cat, 'GTA'])
  }

    return (
    <>
        <h1>GifExpertApp</h1>
       
       <AddCategory 
        //setcategories={ setcategories}
        onNewCategory = {(event) => onAddCategory(event)}
       />

        

       
        { 
            categories.map ( ( category ) => 
            (
                <GifGrid key={ category } category={category}/>
            )) 
        }
            
        

    </>
  )
}
