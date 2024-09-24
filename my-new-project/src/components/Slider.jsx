import React, { useState } from 'react'

function Slider({ mood, setMood }) {
    const [sliderValue, setSliderValue] = useState(0);


    function handleChange(e) {
        const val = e.target.value;
        setSliderValue(val);

        if (val < 20) {
            setMood({
                image: "/public/images/Worst.svg",
                description: "Worst"
            });
        } else if (val >= 20 && val < 40) {
            setMood({
                image: "/public/images/Fine.svg",
                description: "Not Good"
            });

        } else if (val > 40 && val < 60) {
            setMood({
                image: "/public/images/Neutral.svg",
                description: "Fine"
            });
        } else if (val > 60 && val < 80) {
            setMood({
                image: "/public/images/Good.svg",
                description: "Look Good"
            });
        } else if (val > 80 && val < 100) {
            setMood({
                image: "/public/images/Loveit.svg",
                description: "Very Good"
            });
        }
    }

    return (
        <div className='Slider'>
            <div className='flex gap-5 text-sm py-5 font-bold text-textSecondary -mt-3'>
                <div className={`${mood.image === "/public/images/Worst.svg" ? "" : 'filter grayscale'} text-center`}>
                    <img src="/public/images/Worst.svg" alt="Worst" />
                    <p>Worst</p>
                </div>
                <div className={`${mood.image === "/public/images/Fine.svg" ? "" : 'filter grayscale'} text-center`}>
                    <img src="/public/images/Fine.svg" alt="Not Good" className="w-12 h-12" />
                    <p>Not Good</p>
                </div>
                <div className={`${mood.image === "/public/images/Neutral.svg" ? "" : 'filter grayscale'} text-center`}>
                    <img src="/public/images/Neutral.svg" alt="Fine" />
                    <p>Fine</p>
                </div>
                <div className={`${mood.image === "/public/images/Good.svg" ? "" : 'filter grayscale'} text-center`}>
                    <img src="/public/images/Good.svg" alt="Look Good" className="w-12 h-12" />
                    <p>Look Good</p>
                </div>
                <div className={`${mood.image === "/public/images/Loveit.svg" ? "" : 'filter grayscale'} text-center`}>
                    <img src="/public/images/Loveit.svg" alt="Very Good" className="w-12 h-12" />
                    <p>Very Good</p>
                </div>
            </div>

            <input className='w-[350px] py-5 accent-textSecondary bg-white -mt-7'
                type="range"
                list="tickmarks"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleChange} />
        </div>
    )
}

export default Slider
