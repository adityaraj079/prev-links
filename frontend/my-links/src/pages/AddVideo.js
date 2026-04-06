import React, { useState } from 'react';
import axios from 'axios';

const AddVideo = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://links-backend-six.vercel.app/add_video', {
        title,
        link,
        thumbnail,
        tags
      });
      setMessage('Video added successfully!');
      setTitle('');
      setLink('');
      setThumbnail('');
      setTags('');
    } catch (error) {
      setMessage('Error adding video: ' + error.message);
    }
  };

  return (
    <div className="container-fluid bg-dark text-white py-4 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Add New Video</h2>
            <div className="card bg-secondary border-0">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="link" className="form-label">Link</label>
                    <input
                      type="url"
                      className="form-control bg-dark text-white border-secondary"
                      id="link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label">Thumbnail URL</label>
                    <input
                      type="url"
                      className="form-control bg-dark text-white border-secondary"
                      id="thumbnail"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Add Video</button>
                </form>
                {message && <p className="mt-3 text-center">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;