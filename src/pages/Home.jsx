import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoView from '../components/video/VideoView';
import Main from '../components/section/Main';
import HeroSection from '../components/section/HeroSection';
import RegionSection from '../components/section/RegionSection';
import channels from '../../data/channels.json'; // JSON 파일 불러오기
import '../../assets/scss/home/Home.scss';

const Home = () => {
    const [videos, setVideos] = useState({
        latest: [],
        popular: [],
        recommended: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            const latestVideoData = [];
            const popularVideoData = [];
            const recommendedVideoData = [];
            for (const channel of channels) {
                try {
                    const latestResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.channelId}&order=date&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                    );
                    latestVideoData.push(...latestResponse.data.items);

                    const popularResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.channelId}&order=viewCount&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                    );
                    popularVideoData.push(...popularResponse.data.items);

                    const recommendedResponse = await axios.get(
                        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.channelId}&order=relevance&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                    );
                    recommendedVideoData.push(...recommendedResponse.data.items);
                } catch (error) {
                    console.error('Error fetching videos:', error);
                }
            }
            setVideos({
                latest: latestVideoData,
                popular: popularVideoData,
                recommended: recommendedVideoData
            });
            setLoading(false);
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Main
            title="맛집 유튜브"
            description="전국 다양한 맛집 유튜 채널을 소개합니다."
        >
            <HeroSection />
            <div className="home">
                <section className="video-section">
                    <h2>최신 업로드</h2>
                    <VideoView videos={videos.latest} />
                </section>
                <section className="video-section">
                    <h2>인기 비디오</h2>
                    <VideoView videos={videos.popular} />
                </section>
                <section className="video-section">
                    <h2>추천 비디오</h2>
                    <VideoView videos={videos.recommended} />
                </section>
                <RegionSection />
            </div>
        </Main>
    );
};

export default Home;
