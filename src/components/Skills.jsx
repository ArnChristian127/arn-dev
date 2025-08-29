import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCode } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { ProgramingLanguage, LibraryFramework } from '../datas/Skills';
import { Bar } from 'react-chartjs-2';
import { status } from '../datas/Status';
import { MdAnalytics } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import 'swiper/css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export default function Skills() {
    const options = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.x}%`;
                    },
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                max: '100%',
            },
            y: {
                stacked: true,
            },
        },
    };
    return (
        <>
            <div id="skills">
                <div className="px-6 py-5 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Skills
                            </h1>
                            <FaCode className="inline-block align-middle ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-400"/>
                        </div>
                        <p className="mt-3">
                            I have acquired a diverse set of skills through my college and senior highschool education, particularly in the field of technology.
                        </p>
                        <p>
                            Throughout my academic journey, I have gained knowledge and hands-on experience in various areas.
                        </p>
                        <p>
                            This has strengthened my technical and problem-solving abilities.
                        </p>
                    </div>
                </div>
                <div className="px-6 py-5 border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Programing Language
                        </h1>
                    </div>
                </div>
                <div className="py-10 border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px] text-gray-600">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        allowTouchMove={false}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}>
                        {ProgramingLanguage.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold select-none">
                                    {items.label}
                                    {items.component}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="px-6 py-5 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left border-x border-gray-300 p-1">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Language Stat's
                            </h1>
                            <MdAnalytics className="inline-block align-middle ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400"/>
                        </div>
                        <p className="mt-3">
                            Based on my performance in every language on programing.
                        </p>
                        <Bar data={status} options={options} className="mt-3"/>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {status.datasets.map((ds, i) => (
                                <span key={i} className="flex items-center gap-1 text-sm">
                                    <span
                                    className="w-3 h-3 inline-block rounded"
                                    style={{ backgroundColor: ds.backgroundColor }}
                                    ></span>
                                    {ds.label} ({ds.data[0]}%)
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="px-6 py-5 border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Framework & Library
                        </h1>
                    </div>
                </div>
                <div className="py-10 border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px] text-gray-600">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true
                        }}
                        allowTouchMove={false}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}>
                        {LibraryFramework.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold select-none">
                                    {items.label}
                                    {items.component}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}