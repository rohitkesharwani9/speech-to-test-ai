import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center mt-[33px]'>
                {/* Google AdSense Ad code placed at the top */}
            <div className="flex justify-center w-full mb-4">
                <ins className="adsbygoogle"
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-client="YOUR-AD-CLIENT-ID"
                    data-ad-slot="YOUR-AD-SLOT-ID"
                    data-ad-format="auto"></ins>
            </div>
            <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center my-3'>
              Speech To Text
                </h1><br/>
                {/* <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                  This audio to text Converter uses ML-powered speech recognition directly in your browser.
                </h2> */}
                {/* <p className="text-center">Effortless Transcription and Translation for Any Audio File.</p> */}
                <p className="text-center bg-red-100 rounded-lg">
                <b>Note:</b> Please wait a few seconds for your audio file to upload. Once the upload is complete, the "Transcribe Audio" and settings buttons will appear.<br/><b>After the transcription process is complete, the download buttons appear at the bottom.</b>
                </p><br/>
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
                Made with ❤️ in the USA<br/>
            </div>
           
            {/* <div className='absolute bottom-4'>
                Made By 😍 {" "}
                <a
                    className='underline'
                    href='https://webtechbyrohit.com'
                    target="_blank"
                >
                    WebTechByRohit.com
                </a>
            </div> */}
            {/* <div className="bottom-1 absolute">
                <p>Footer</p>
            </div> */}


        </div>
        
    );
}

export default App;
