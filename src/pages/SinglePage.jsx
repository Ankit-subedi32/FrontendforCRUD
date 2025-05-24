import axios from "axios"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import { useParams } from "react-router-dom"

function SinglePage() {
    const navigate = useNavigate()
    const { id } = useParams()  //used to get the id from the url
    const [book, setBook] = useState({}) //used to store the book data
    const fetchBook = async () => {
        const response = await axios.get("http://localhost:5000/api/books/" + id)
        setBook(response.data.datas)   //respone.data sadhai lekhna parxa .datas chai network ma heryrara j xa tei halne ho
    }
    useEffect(() => {
        fetchBook()
    }, [])


    const deleteBook = async () => {
        const response = await axios.delete("http://localhost:5000/api/books/" + id)
        if (response.status === 200) {
            alert("Book deleted successfully")
            navigate("/")
        }
        else {
            alert("Book not deleted")
        }
       
    }
    
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen shadow-2xl background-gray-100  rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Book Details</h1>
            <h1>{book.bookName}</h1>
            <h1>{book.Author}</h1>
            <h1>{book.price}</h1>
            <h1>{book.bookGener}</h1>
            <button onClick={deleteBook}>Delete Me</button>
            <button onClick={() => navigate(`/edit-page/${id}`)}>Edit Me</button>
            </div>
        </div>
    )
}

export default SinglePage
