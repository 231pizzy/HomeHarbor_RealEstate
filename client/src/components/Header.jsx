// import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     urlParams.set("searchTerm", searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get("searchTerm");
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);
//   return (
//     <header className="bg-slate-200 shadow-xl">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
//         <Link to="/">
//           <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
//             <span className="text-slate-500">Home</span>
//             <span className="text-slate-700">Harbor</span>
//           </h1>
//         </Link>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-slate-100 p-3 rounded-lg flex items-center"
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-24 sm:w-64"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button>
//             <FaSearch className="text-slate-600" />
//           </button>
//         </form>
//         <ul className="flex gap-4">
//           <Link to="/">
//             <li className="hidden sm:inline text-slate-700 hover:underline">
//               Home
//             </li>
//           </Link>
//           <Link to="/about">
//             <li className=" sm:inline text-slate-700 hover:underline">About</li>
//           </Link>
//           <Link to="/profile">
//             {currentUser ? (
//               <img
//                 className="rounded-full h-7 w-7 object-cover"
//                 src={currentUser.avatar}
//                 alt="profile"
//               />
//             ) : (
//               <li className=" text-slate-700 hover:underline"> Sign in</li>
//             )}
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }

import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-slate-200 shadow-xl sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Home</span>
            <span className="text-slate-700">Harbor</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <li
            className="relative sm:inline text-slate-700 hover:underline"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            About
            {showDropdown && (
              <div className="absolute bg-white rounded-lg p-2 mt-1 shadow-md">
                <Link to="/about">
                  <p className="text-slate-700 hover:text-green-700 cursor-pointer">
                    Who We Are
                  </p>
                </Link>
                <hr className="my-1 border-gray-300" />
                <Link to="/founders">
                  <p className="text-slate-700 hover:text-green-700 cursor-pointer">
                    Our Founders
                  </p>
                </Link>
              </div>
            )}
          </li>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
