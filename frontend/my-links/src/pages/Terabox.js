import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get('/get_video', { responseType: 'blob' });
                if (response.status === 200) {
                    const videoBlob = new Blob([response.data], { type: 'video/mp4' });
                    const blobUrl = URL.createObjectURL(videoBlob);
                    setVideoUrl(blobUrl);
                } else {
                    console.error('Failed to fetch video:', response.data);
                }
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div>
            <Sidebar />
            {videoUrl ? (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default VideoPlayer;
