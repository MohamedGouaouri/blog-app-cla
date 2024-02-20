/* eslint-disable react/prop-types */
import './BlogModal.css'; // Import your CSS file for styling

const BlogModal = ({ blog, onCloseModal }) => {
  return (
    <div className={`blog-modal`}>
      <div className="modal-content">
        <span className="close" onClick={onCloseModal}>&times;</span>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogModal;
