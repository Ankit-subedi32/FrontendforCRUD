import axios from "axios"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import { use, useEffect } from "react"



function HomePage() {
  const  fetchBooks = async () => {
       const response = await axios.get("http://localhost:5000/api/books")
       
    }
  useEffect(() => {
    fetchBooks()    
    }, [])
    // const [books, setBooks] = useState([])
    
    return (
        <>

        <Navbar />
        <div className="flex items-center ml-40 pb-30 h-screen flex-wrap"> 
         
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
</div>
    
        



        
        </>
    )
}

export default HomePage
