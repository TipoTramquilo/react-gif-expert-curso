import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['One punch'])

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;
        
        setcategories([...categories,newCategory])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setcategories={setcategories}
            onNewValue={onAddCategory}
        />

        {  
            categories.map(category => (
                    <GifGrid key={category} category={category}/>
                )            
            )
            
        }
    </>
  )
}
