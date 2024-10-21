import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover image of the title ${title}`} />
            <div className='flex justify-between items-center my-5'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;