import { Link } from "react-router-dom";


const Book = ({book}) => {
    const{image, bookName, author, tags, category, bookId, rating} = book
    return (
   <Link to={`/books/${bookId}`}>
             <div className="card bg-base-100 border-2 border-gray-200 p-8 mx-auto">
        <figure className="bg-gray-300 py-6 rounded-2xl">
         <img className="h-[166px]"
         src={image}
         alt={bookName} />
      </figure>
  <div className="card-body">
    <div className="flex justify-center gap-4">
    {
        tags.map((tag, index) => <button key={index} className="btn btn-xs px-6 bg-green-100 text-green-600 rounded-full border-none">{tag}</button>)
    }
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <div className="border-t-2 border-dashed my-3"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      
      <div className="rating">
      <p className="mr-4">{rating}</p>
  <input type="radio" name="rating-1" className="mask mask-star" />
  
</div>
    </div>
  </div>
</div>
   </Link>
    );
};

export default Book;