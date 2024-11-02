import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../utility/addToDB";


const BookDetail = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    console.log(data, bookId, book,id )
    const{image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    const handleMarkAsRead = (id) => {
    addToStoredReadList(id)
    }

    const handleWishList = (id) => {
        addToStoredWishList(id)
    }
    
    return (
        <div className="hero min-h-[600px] py-8">
  <div className="hero-content flex-col lg:flex-row">
    <div className="bg-gray-100 py-12 rounded-2xl px-24">
    <img
      src={image}
      className="max-w-sm rounded-lg w-96" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-4">
        By: {author}
      </p>
      <div className="border border-gray-200 my-2"></div>
      <p className="py-4">
        {category}
      </p>
      
      <div className="border border-gray-200 my-2"></div>
      <p><span className="text-xl font-bold">Review:</span> {review}</p>
      <div className="flex justify-start gap-4">
        <p className="text-lg font-bold my-5">Tag</p>
    {
        tags.map((tag, index) => <button key={index} className="btn btn-xs px-6 bg-green-100 text-green-600 rounded-full border-none my-6">#{tag}</button>)
    }
    </div>
    <div className="border border-gray-200 my-2"></div>
    <div className="space-y-2">
    <p>Number of pages: <span className="font-semibold">{totalPages}</span></p>
    <p>Publisher: <span className="font-semibold">{publisher}</span></p>
    <p>Year of publishing: <span className="font-semibold">{yearOfPublishing}</span></p>
    <p>Rating: <span className="font-semibold">{rating}</span></p>
    </div>
      <div className="py-4">
      <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark As Read</button>
      <button onClick={()=>handleWishList(bookId)} className="btn btn-outline btn-accent mr-4">Add to Wish List</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetail;