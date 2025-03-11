import React from 'react';
import Button from './Button.tsx';
import Link from './Link.tsx';


// Define the type for the props
interface Quoteprops {
    id: string;
    text: string;
    author: string;
    onClick:()=> void;
}



const Quote: React.FC<Quoteprops> = ({ id, text, author,onClick }) => {
    return (
        <div id = {id} className="card bg-black h-full p-5">
            <span className = "text-4xl">❝</span>
            <p className="h-6/10 lg:text-sm text-[clamp(2cqw,2.3cqw,3cqw)]  mb-[2vw]" id = "text">{text}<span>❝</span></p>
            <p className="h-1/10 text-[2cqw] lg:text-[1cqw] mb-3" id = "author"> <span className = "">-- </span>{author}</p>
            <div id = "socials" className = "flex flex-row gap-[5vw]">
            
            <Link id = "x-quote" twitter = {false} url = "https://x.com/intent/post" target = "_blank"/>
            <Link id = "tweet-quote" twitter = {true} url = "https://twitter.com/intent/tweet" target = "_blank"/>
            <Button id = "new-quote" label="more" onClick={onClick} />
            </div>
        </div>
    );
};

export default Quote;
