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



const Quote: React.FC<Quoteprops> = ({ id, text, author, onClick }) => {
    let query = `...%0A%0A"${text}"%0A%0A --${author}`
    return (
        <div id = {id} className="card bg-black h-full p-5">
            <span className = "text-4xl">❝</span>
            <p className="h-6/10 lg:text-sm text-[clamp(2cqh,2.3cqh,3cqh)]  mb-[2vw]" id = "text">{text}<span>❝</span></p>
            <p className="h-1/10 text-[2cqh] lg:text-[1cqh] mb-3" id = "author"> <span className = "">-- </span>{author}</p>
            <div id = "socials" className = "flex flex-row gap-[5vw]">
            
            <Link id = "x-quote" twitter = {false} url = "https://x.com/intent/post?text=I%20just%20found%20a%20beautiful%20quote..." target = "_blank" query = {query}/>
            <Link id = "tweet-quote" twitter = {true} url = "https://twitter.com/intent/tweet?text=I%20just%20found%20a%20beautiful%20quote..." target = "_blank" query = {text}/>
            <Button id = "new-quote" label="more" onClick={onClick} />
            </div>
        </div>
    );
};

export default Quote;
