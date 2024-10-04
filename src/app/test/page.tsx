import React from "react";
import Image from "next/image";
//import localImage from "/image.jpg";
//import localImage from "@/assets/image.jpg";

export default function Test() {
    return(
        <React.Fragment>
            <div>
                <div>
                    <Image src="/image.jpg" alt="猫は最高に可愛い" width="200" height="200"/>
                </div>
                <div>
                    <figure>
                        <figcaption>音源を聞く：</figcaption>
                        <audio controls src="/voice.mp3"></audio>
                        <a href="/voice.mp3">音声をDownload </a>
                    </figure>
                </div>
                <div>
                    <video controls width="250">
                        <source src="/movie.mp4" type="video/mp4"/>
                        <a href="/movie.mp4">動画をDonwload</a>
                    </video>
                </div>
            </div>
        </React.Fragment>
    )
}