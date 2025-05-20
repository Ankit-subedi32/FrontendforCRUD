import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { use, useEffect } from "react"
import { useState } from "react"




function HomePage() {
  const [books, setBooks] = useState([])
  const  fetchBooks = async () => {
       const response = await axios.get("http://localhost:5000/api/books")
       setBooks(response.data.data)
    }
  useEffect(() => {
    fetchBooks()    
    }, [])
    // const [books, setBooks] = useState([])
    
    return (
        <>

        <Navbar />
        <div className="flex items-center ml-40 pb-30 h-screen flex-wrap"> 
         {
          books.map(function(book){
            return (

              <Card  book = {book} />
            )
          })
         }
       
</div>
    
        



        
        </>
    )
}

export default HomePage
