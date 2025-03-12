import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'


// Define the type for the props
interface LinkProps {
  id?:string;
  twitter?: boolean;
  url?:string;
  target?: string;
  query?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ id, twitter,url, target, query}) => {
  let final = `${url}${query}`
  return (
    <div className="">
        <a id = {id} href = {final} target = {target} rel="noopener noreferrer" className="btn btn-md" >
        <FontAwesomeIcon icon={twitter? faTwitter:faXTwitter} />
      </a>
    </div>

  );
};

export default Link;