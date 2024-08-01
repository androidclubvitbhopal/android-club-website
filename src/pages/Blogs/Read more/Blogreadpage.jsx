import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blogreadpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title,  img, body } = location.state || {};

  const handleBack = () => {
    navigate("/blogs"); 
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#96BE96] pt-5 min-h-[100vh] w-full flex justify-center items-center">
      <div className="rounded-xl bg-[#E6F1E8] min-h-[80vh] w-[95vw] p-6">
        <h3 className="text-[#254336] text-5xl font-semibold mb-4">{title}</h3>
        <div className="flex justify-center mb-6">
          <img
            className="rounded-lg h-[500px] w-full object-cover"
            src={img}
            alt={title}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-black text-left text-xl whitespace-pre-wrap leading-relaxed">
            {body}
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Link to='/blogs'>
            <button
              className="p-4 text-lg rounded-lg bg-[#254336] text-white hover:bg-[#2f4f4f] transition duration-300"
              onClick={handleBack}
            >
              Back to blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogreadpage;
