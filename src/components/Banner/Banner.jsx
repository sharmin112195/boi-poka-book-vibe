import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[554px] rounded-xl mx-auto my-8">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <div className='pt-4'>
      <button className="btn bg-lime-500 text-white">View The List</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;