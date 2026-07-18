"use client"
import { useActionState, useState, useEffect } from 'react';
import { type ContactFormState, submitContactForm } from '@/components/ContactForm/actions';

const initialState: ContactFormState = {
  success: false,
  error: null,
  timestamp: Date.now()
};


export default function Contact() {

    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialState,
    );

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (state.success || state.error) {
            setShowToast(true);

            const timer = setTimeout(() => {
                setShowToast(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [state.timestamp]);

    const toastClassName = `${showToast ? 'show' : ''} ${state.success ? 'success' : 'fail' }`.trim();

    return (
        <>
        <h1 className="text-left"><b><u>Contact</u></b></h1>
        <form action={formAction}>
            <textarea className="single-line-textarea" placeholder="Your Name" name="name"></textarea>
            <textarea className="single-line-textarea" placeholder="Email" name="email"></textarea>
            <textarea className="single-line-textarea" placeholder="Subject" name="subject"></textarea>
            <textarea className="multiple-line-textarea" placeholder="Message" name="message"></textarea>
            <div className='flex justify-start w-full'>
                <button type="submit" disabled={isPending}>
                    {isPending ? 'Sending...' : 'Send'}
                </button>
            </div>

            <div id="toast" className={toastClassName}>
                {state.success ? 'Sent successfully' : state.error}
            </div>
        </form>
        </>
    );
}