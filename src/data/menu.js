import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

import { PiBowlFoodFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

import { GiPalmTree } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";

export const headerMenus = [
    {
        title: "맛집",
        icon: <PiBowlFoodFill />,
        src: "/search/맛집"
    }, {
        title: "서울 맛집",
        icon: <IoLocationSharp />,
        src: "/search/서울 맛집"
    }, {
        title: "경기도 맛집",
        icon: <IoLocationSharp />,
        src: "/search/경기도 맛집"
    }, {
        title: "대전 맛집",
        icon: <IoLocationSharp />,
        src: "/search/대전 맛집"
    }, {
        title: "강원도 맛집",
        icon: <IoLocationSharp />,
        src: "/search/강원도 맛집"
    }, {
        title: "전라도 맛집",
        icon: <IoLocationSharp />,
        src: "/search/전라도 맛집"
    }, {
        title: "제주도 맛집",
        icon: <GiPalmTree />,
        src: "/search/제주 맛집"
    }, {
        title: "다이어트 레시피",
        icon: <BiFoodMenu />,
        src: "/search/다이어트 레시피"
    }
]

export const searchKeyword = [
    {
        title: "다이어트",
        src: "/search/다이어트"
    }, {
        title: "현지인 맛집",
        src: "/search/현지인 맛집"
    }, {
        title: "한식",
        src: "/search/한식"
    }, {
        title: "일식",
        src: "/search/일식"
    }, {
        title: "중식",
        src: "/search/중식"
    }, {
        title: "양식",
        src: "/search/양식"
    }
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/hyeji1364",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "",
        icon: <AiFillInstagram />
    },
    {
        title: "gmail",
        url: "mailto: hyeji1364@gmail.com",
        icon: <AiFillMail />
    }
]