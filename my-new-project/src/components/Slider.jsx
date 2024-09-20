import React, { useState } from 'react'

function Slider() {
    const [mood, setMood] = useState("😖")
    const [sliderValue, setSliderValue] = useState(0);

    function handleChange(e) {
        const val = e.target.value;
        setSliderValue(val);
        if (val < 20) {
            setMood("😖");
        } else if (val >= 20 && val < 40) {
            setMood("😧");
        } else if (val > 40 && val < 60) {
            setMood("😐");
        } else if (val > 60 && val < 80) {
            setMood("😀");
        } else if (val > 80 && val < 100) {
            setMood("😍");
        }
    }

    return (
        <div className='Slider'>
            <datalist id="tickmarks">
                <option value="worst" label="😖"></option>
                <option value="notgood" label="😧"></option>
                <option value="fine" label="😐"></option>
                <option value="lookgood" label="😀"></option>
                <option value="verygood" label="😍"></option>
            </datalist>
            <p style={{ fontSize: "50px" }}>{mood}</p>
            <input type="range"
                list="tickmarks"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleChange} />

        </div>
    )
}

export default Slider
