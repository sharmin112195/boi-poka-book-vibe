import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
  const [readList,setReadList] = useState([]);
  const [wishList,setWishList] = useState([]);
  const [sort,setSort] = useState('')
    // ideally we will directly get the read book list from the database
    const allBooks = useLoaderData()
    console.log(allBooks)
    useEffect(() => {
      if(allBooks){
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
      }
     
    },[])

    useEffect(() => {
      if(allBooks){
        const storedWishList = getStoredWishList()
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const WishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        
        setWishList(WishBookList)
      } 

    },[])

    const handleSort = sortType => {
      setSort(sortType)
      if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList);
      }
    }
    return (
        <div>
            <h3 className="text-3xl my-8 text-center">Books</h3>
            <div className='flex justify-center items-center'>
            <div className="dropdown mb-12 relative">
  <div tabIndex={0} role="button" className="btn m-1 bg-lime-500 text-white">
    {sort? `Sort By: ${sort}`:'Sort By'}
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow absolute">
    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
    <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
  </ul>
  </div>
</div>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
      <div className=''>
      {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Wish List: {wishList.length}</h2>
      {
        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;