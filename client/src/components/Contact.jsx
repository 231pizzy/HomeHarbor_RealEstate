import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handlePhoneCall = () => {
    // Use HTML anchor tag to initiate a phone call
    window.location.href = `tel:${landlord.phone}`;
  };

  const handleWhatsAppChat = () => {
    // Use WhatsApp URL scheme to open WhatsApp chat
    window.location.href = `https://wa.me/${landlord.phone}`;
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.userName}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <IoMdCall
              onClick={handlePhoneCall}
              className="text-blue-500 text-4xl cursor-pointer"
            />
            <FaWhatsapp
              onClick={handleWhatsAppChat}
              className="text-green-500 text-4xl cursor-pointer"
            />
          </div>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Mail
          </Link>
        </div>
      )}
    </>
  );
};

// Define prop types for the Contact component
Contact.propTypes = {
  listing: PropTypes.shape({
    userRef: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
