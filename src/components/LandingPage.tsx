import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[rgb(223,245,255)] text-center p-4">
            {/* Google AdSense Ad code placed at the top */}
            <div className="flex justify-center w-full mb-4 mt-[33px]">
                <ins className="adsbygoogle"
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-client="YOUR-AD-CLIENT-ID"
                    data-ad-slot="YOUR-AD-SLOT-ID"
                    data-ad-format="auto"></ins>
            </div>
            <h1 className="text-6xl font-extrabold text-slate-900 my-3">Speech to Text</h1>
            <h2 className='text-xl font-extrabold tracking-tight text-slate-900 sm:text-4xl text-center max-w-[60%]'>A Powerful AI Speech LLM That Runs Seamlessly on Your Local System</h2>
            <Link to="/app">
                <button className="mt-5 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Get Started
                </button>
            </Link><br/>
            <h2 className='text-xl font-extrabold tracking-tight text-slate-900 sm:text-3xl text-center max-w-[70%]'>An AI Audio Transcription & Translation Tool That Converts Your Voice into Text. You Can Upload Your Audio File or Simply Record Your Live Audio.</h2><br/>
                <h1 className='text-1xl font-bold tracking-tight text-slate-900 sm:text-xl text-center max-w-[70%]'>
                Use this Audio-to-Subtitle Generator tool to generate an SRT file and use it in your YouTube videos, social media platforms, or other projects. It exports text in SRT, JSON, and TXT formats.
                </h1>
            {/* <Link to="/app">
                <button className="mt-5 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Get Started
                </button>
            </Link> */}
            <br/>Made with ❤️ in the USA<br/>
        </div>
    );
}

export default LandingPage;
