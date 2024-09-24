import React, { useEffect, useState } from 'react'
import InputField from './components/InputField'
import Slider from './components/Slider'
import UserComment from './components/UserComment'

function Component() {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [feedbacks, setFeedbacks] = useState([]);
    const [mood, setMood] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        contact: '',
        email: '',
        comments: ''
    });

    useEffect(() => {
        const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        setFeedbacks(storedFeedbacks);
    }, [])

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
    }

    const handleSubmit = (() => {

        if (validate()) {
            const newFeedback = { name, contact, email, comments, mood }
            const updatedFeedbacks = [...feedbacks, newFeedback]
            localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));

            setName('');
            setContact('');
            setEmail('');
            setComments('');
            setMood('');
            setErrors({});
        }
    })



    return (
        <div className='flex items-center justify-center bg-[#D5E4F1] min-h-screen w-full'>

            <div className='h-auto p-10 max-w-md mx-auto bg-primary rounded-lg shadow-md'>
                <h5 className="text-sm text-text mb-7">Please Provide your Feedback</h5>
                <div className='space-y-6'>
                    <div className='flex gap-5'>
                        <div>
                            <InputField placeholder='Enter your name' label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <InputField placeholder='+91 0000000000' label='Contact Number' value={contact} onChange={(e) => setContact(e.target.value)} />
                            {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                        </div>
                    </div>
                    <div className='w-1/2 pr-3'>
                        <InputField placeholder='xyz123@gmail.com' label='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>
                <h5 className='text-text font-bold mb-2 mt-7'>Share your experiance in scaling</h5>
                <div>
                    <Slider onMoodChange={setMood} />
                </div>
                <div className='w-full p-5 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4'>
                    <textarea
                        placeholder='Add your comments'
                        rows="1"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className='w-full resize-none p-2 border-none focus:outline-none text-sm'
                    ></textarea>
                </div>
                {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}

                <div className='bg-[#20B2AA] text-center text-white font-bold py-3 px-4 mt-9 rounded-lg'>
                    <button className='rounded-lg' onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
            <div className='flex flex-col gap-3 max-h-[66vh] w-1/2 overflow-x-hidden overflow-y-scroll -mt-53'>
                <h2 className='text-text font-bold text-xl mb-1'>Submitted Feedbacks</h2>
                {feedbacks.map((feedback, index) => (
                    <UserComment key={index} feedback={feedback} />
                ))}

            </div>

        </div>




    )
}

export default Component
