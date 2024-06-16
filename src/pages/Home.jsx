import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import Loading from '../components/section/Loading';
import '../assets/scss/section/_home.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 이미지 파일 import
import mainImage from '../assets/img/youtube banner.png';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [videoUrls, setVideoUrls] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const keyword = '전국 미슐랭 맛집'; // 검색 키워드
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // .env 파일에 저장된 유튜브 API 키
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&maxResults=6&key=${apiKey}`);
                const data = await response.json();
                const videos = data.items.filter(item => item.id.videoId); // videoId가 있는 항목만 필터링
                setVideoUrls(videos.map(video => ({
                    title: video.snippet.title,
                    description: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    url: `https://www.youtube.com/embed/${video.id.videoId}`
                })));
            } catch (error) {
                console.error('비디오를 가져오는 중 오류가 발생했습니다.', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <Main title="전국 맛집" description="전국의 맛집을 소개합니다.">
            {loading ? (
                <Loading />
            ) : (
                <section id='homePage' className='fade-in'>
                    <div className="home__welcome">
                        <h1>✨ 환영합니다!😊 </h1>
                        <p>
                            전국의 다양한 맛집을 탐방하고, 
                            추천 맛집을 통해 새로운 맛집을 발견하세요!
                        </p>
                    </div>
                    <div className="home__main-image">
                        <img src={mainImage} alt="Main" className="main-img" />
                    </div>
                    <div className="home__content">
                        <h2> 💁🏻‍♀️ 추천 영상 - 전국 미슐랭 맛집 🍽 </h2>
                        <div className="video-card-container">
                            {videoUrls.length > 0 ? (
                                videoUrls.map((video, index) => (
                                    <div key={index} className="video-card">
                                        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                        <h3 className="video-title">{video.title}</h3>
                                        <p className="video-description">{video.description}</p>
                                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">영상 보기</a>
                                    </div>
                                ))
                            ) : (
                                <p>비디오를 불러오는 중 오류가 발생했습니다.</p>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </Main>
    );
}

export default Home;
