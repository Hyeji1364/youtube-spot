import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

const Home = () => {
    const [channelInfo, setChannelInfo] = useState({});
    const [latestVideos, setLatestVideos] = useState([]);
    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {
        const fetchChannelInfo = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
                );
                setChannelInfo(response.data.items[0]);
            } catch (error) {
                console.error('Error fetching channel info:', error);
            }
        };

        const fetchLatestVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=5&key=${API_KEY}`
                );
                setLatestVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching latest videos:', error);
            }
        };

        const fetchPopularVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=viewCount&maxResults=5&key=${API_KEY}`
                );
                setPopularVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching popular videos:', error);
            }
        };

        fetchChannelInfo();
        fetchLatestVideos();
        fetchPopularVideos();
    }, []);

    return (
        <div className="main">
            <header className="channel-header">
                <div className="channel-info">
                    <img src={channelInfo.snippet?.thumbnails?.high?.url} alt="Channel Art" className="channel-art" />
                    <h1>{channelInfo.snippet?.title}</h1>
                    <p>{channelInfo.snippet?.description}</p>
                    <p>Subscribers: {channelInfo.statistics?.subscriberCount}</p>
                </div>
            </header>
            <section className="video-section">
                <h2>Latest Uploads</h2>
                <div className="video-list">
                    {latestVideos.map((video) => (
                        <div key={video.id.videoId} className="video-item">
                            <Link to={`/video/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                                <h3>{video.snippet.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="video-section">
                <h2>Popular Videos</h2>
                <div className="video-list">
                    {popularVideos.map((video) => (
                        <div key={video.id.videoId} className="video-item">
                            <Link to={`/video/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                                <h3>{video.snippet.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <footer id="footer">
                This is the footer
            </footer>
        </div>
    );
};

export default Home;