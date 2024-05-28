import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const data = await response.json();
                setVideos(data.items);
                // console.log(data);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID])

    return (
        <Main
            title={`맛집 검색 : ${searchID}`}
            description={`맛집 서치 페이지입니다. - 검색 키워드 : ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2>🎉<em>{searchID}</em>를 검색한 결과입니다.</h2>
                    <div className="video__inner">
                        {videos.map((video, index) => (
                            <div className='video' key={index} >
                                <div className="video__thumb play__icon">
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                                    </Link>
                                </div>
                                <div className="video__info">
                                    <div className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                    </div>
                                    <div className='author'>
                                        <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                                    </div>
                                </div>
                            </div >
                        ))}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPage