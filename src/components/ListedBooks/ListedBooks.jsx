import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
  const [readList,setReadList] = useState([]);
  const [wishList,setWishList] = useState([]);
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
       

        // console.log(storedReadList, allBooks, storedReadListInt)
    },[])

    useEffect(() => {
      if(allBooks){
        const storedWishList = getStoredWishList()
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const WishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setWishList(WishBookList)
      }
       

        // console.log(storedReadList, allBooks, storedReadListInt)
    },[])
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
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