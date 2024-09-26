import React, { useEffect, useState } from 'react';
import InputField from './components/InputField';
import Slider from './components/Slider';
import UserComment from './components/UserComment';
import './component.css'
function Component() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [feedbacks, setFeedbacks] = useState([]);
    const [mood, setMood] = useState({
        image: '/images/Worst.svg',
        description: 'Worst'
    });
    const [errors, setErrors] = useState({
        name: '',
        contact: '',
        email: '',
        comments: ''
    });

    useEffect(() => {
        const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        setFeedbacks(storedFeedbacks);
    }, []);

    const validate = () => {
        let valid = true;
        let errors = {};

        if (name.trim() === '') {
            errors.name = 'Name is required';
            valid = false;
        } else if (name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
            valid = false;
        }

        const contactRegex = /^[0-9]{10}$/;
        if (!contactRegex.test(contact)) {
            errors.contact = 'Please enter a valid 10-digit contact number';
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (comments.trim() === '') {
            errors.comments = 'Comments cannot be empty';
            valid = false;
        }
        setErrors(errors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            const newFeedback = { name, contact, email, comments, mood };
            const updatedFeedbacks = [...feedbacks, newFeedback];

            localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
            setFeedbacks(updatedFeedbacks);

            setName('');
            setContact('');
            setEmail('');
            setComments('');
            setMood({
                image: "/images/Worst.svg",
                description: "Worst"
            });
            setErrors({});
        }
    };

    return (
        <div className='flex lg:flex-row flex-col items-center justify-center bg-[#D5E4F1] min-h-screen w-screen'>

            <div className='p-6 bg-primary rounded-lg shadow-md w-full lg:w-1/2 max-w-lg lg:max-w-md'>
                <h5 className="gap-2.5 self-stretch py-2.5 max-w-full text-sm font-medium text-sky-700 w-[360px]">Please Provide your Feedback</h5>
                <div className='space-y-2'>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div>
                            <InputField placeholder='Enter your name' label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <p className="text-red-500 text-[12px] h-5">{errors.name}</p>
                        </div>
                        <div>
                            <InputField placeholder='+91 0000000000' label='Contact Number' value={contact} onChange={(e) => setContact(e.target.value)} />
                            <p className="text-red-500 text-[12px] h-5">{errors.contact}</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 pr-3'>
                        <InputField placeholder='xyz123@gmail.com' label='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className="text-red-500 text-[12px] h-5">{errors.email}</p>
                    </div>
                </div>
                <h5 className='text-text font-bold mb-2 mt-4'>Share your experience in scaling</h5>
                <div>
                    <Slider mood={mood} setMood={setMood} />
                </div>
                <div className='w-full p-5 border rounded-lg mt-2'>
                    <textarea
                        placeholder='Add your comments'
                        rows="1"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className='w-full resize-none p-2 border-none focus:outline-none text-sm '
                    ></textarea>
                </div>
                <p className="text-red-500 text-[12px] h-5">{errors.comments}</p>
                <button
                    className='bg-[#20B2AA] text-center text-white font-bold py-3 px-4 mt-3 rounded-lg w-full'
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>
            <div className='flex flex-col w-full ml-7 mt-5 lg:mt-0 lg:w-1/2 overflow-hidden'>
                <h2 className='text-sky-700 font-extrabold ml-6 mb-2 text-xl bg-[#D5E4F1] sticky top-0 z-10'>Submitted Feedbacks</h2>
                <div className='flex flex-col gap-5 max-h-[66vh] overflow-y-auto p-5 scrollbar-hide'>
                    {feedbacks.map((feedback, index) => (
                        <UserComment key={index} feedback={feedback} />
                    ))}
                </div>
            </div>
            


        </div>
    );
}

export default Component;
