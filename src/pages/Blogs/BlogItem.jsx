/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Card({ children, className }) {
  return <div className={`rounded-lg p-4 ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children, className }) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

function CardDescription({ children, className }) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function Button({ children, className, variant, ...props }) {
  let baseStyles = "px-4 py-2 rounded";
  if (variant === "outline") {
    baseStyles += " border border-gray-300";
  } else {
    baseStyles += " bg-green-600 text-white";
  }
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Avatar({ children, className }) {
  return (
    <div className={`inline-flex items-center ${className}`}>{children}</div>
  );
}

function AvatarImage({ src }) {
  return <img src={src} alt="Avatar" className="rounded-full" />;
}

function AvatarFallback({ children }) {
  return <div className="bg-gray-300 rounded-full">{children}</div>;
}

function Input({ className, ...props }) {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
}

// Helper function to truncate text to a specified number of words
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const BlogItem = ({ title, date, tag, img, body }) => {
  return (
    <Card className="bg-[#254336] text-[white] shadow-lg animate-fade-in-up">
      <CardHeader className="flex">
        <div className="flex">
          <div>
            <CardTitle className="text-2xl text-left font-bold">
              <h2 className="text-3xl">{title}</h2>
            </CardTitle>
            <p className="text-left text-[#96BE96]">{tag}</p>
          </div>
          <div>
            <CardDescription className="text-sm mt-[6px] text-[#96BE96]">
              {date}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
          <img
            src={img}
            alt="Article Image"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
        </div>
        <p className="mt-4 text-left">{truncateText(body, 35)}</p>
        <Link to={`/blogs/${encodeURIComponent(title)}`} state={{ title, date, img, body }}>
          <Button className="flex flex-start mt-2 px-4 py-2 bg-green-500 text-white font-bold rounded-md transition duration-300 transform hover:scale-105 hover:bg-green-600">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogItem;
