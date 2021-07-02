import React from 'react'
import Battery from '../loaders/singleElement/Battery'
import Circle from '../loaders/singleElement/Circle'
import Cloud from '../loaders/singleElement/Cloud'
import Coffee from '../loaders/singleElement/Coffee'
import Square from '../loaders/singleElement/Square'
import Eye from '../loaders/singleElement/Eye'
import Magnify from '../loaders/singleElement/Magnify'
import TypingLoader from '../loaders/singleElement/TypingLoader'
import Dashboard from '../loaders/singleElement/Dashboard'
import Location from '../loaders/singleElement/Location'
import Radar from '../loaders/minimalist2/Radar'
import Loader1 from '../loaders/minimalist2/Loader1'
import Loader2 from '../loaders/minimalist2/Loader2'
import WindMill from '../loaders/minimalist2/WindMill'
import HourGlass from '../loaders/minimalist2/HourGlass'
import Timer from '../loaders/singleElement/Timer'
import Pixel from '../loaders/Pixel/Pixel'
import Spinner from '../loaders/Spinner/Spinner'
import OneBall from '../loaders/OneBall/OneBall'
import BBar from '../loaders/minimalist/BouncingBar'
import { Circle as MCircle } from '../loaders/minimalist/Circle'
import Dots from '../loaders/minimalist/Dots'
import Focus from '../loaders/minimalist/Focus'
import SpinnerDots from '../loaders/minimalist/SpinnerDots'
import TwinCircles from '../loaders/minimalist/TwinCircles'
import Wave from '../loaders/minimalist/Wave'

export default function Loaders() {
    return (
        <div className="bg-green-600  min-h-screen  ">
            <div className="grid md:grid-cols-2 lg:grid-cols-8 gap-2 px-4 py-2">

                {/* Minimalist */}
                <div className="pb-4 flex rounded-lg items-center align-middle justify-center bg-green-400">
                    <BBar />
                </div>
                <div className="pb-4 flex rounded-lg align-middle justify-center bg-green-400">
                    <MCircle />
                </div>
                 
                <div className="pb-4 items-center  flex rounded-lg align-middle justify-center bg-green-400">
                    <Dots />
                </div>
                <div className="pb-4 items-center flex rounded-lg align-middle justify-center bg-green-400">
                    <SpinnerDots />
                </div>
                <div className="pb-4 items-center flex rounded-lg align-middle justify-center bg-green-400">
                    <Focus />
                </div>
                <div className="pb-4 items-center flex rounded-lg align-middle justify-center bg-green-400">
                    <TwinCircles />
                </div>
                <div className="pb flex rounded-lg items-center align-middle justify-center bg-green-400">
                    <Wave />
                </div>
                {/* Others */}
                <div className="pb-4 items-center justify-center flex rounded-lg align-middle justify-center bg-purple-300">
                    <Spinner />
                </div>
                <div className="pb-4 items-center justify-center flex rounded-lg align-middle justify-center bg-purple-300">
                    <OneBall />
                </div>

                <div className="pb-4  flex rounded-lg align-middle justify-center bg-purple-300">
                    <Pixel className="pb-4 text-center" />
                </div>
    
                {/* Minimalist */}
               
                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <Timer />
                </div>

                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <HourGlass />
                </div>

                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <WindMill />
                </div>
                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <Loader2 />
                </div>
                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <Loader1 />
                </div>
                <div className="pb-4  flex rounded-lg align-middle justify-center bg-yellow-800">
                    <Radar />
                </div>

                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-800">
                    < TypingLoader />
                </div>
                {/* SingleElement */}

                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Location />
                </div><div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Dashboard />
                </div>

                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Magnify />
                </div>

                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Battery />
                </div>
                {/*<div className="pb-4 flex rounded-lg align-middle justify-center bg-purple-400">
                    < Help />
                </div> */}
                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    <Eye />
                </div>


                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Square />
                </div>
                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Circle />
                </div>
                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Coffee />
                </div>
                <div className="pb-4 flex rounded-lg align-middle justify-center bg-yellow-400">
                    < Cloud />
                </div>
                {/* 43Loaders */}
 
            </div>
        </div>
    )
}
