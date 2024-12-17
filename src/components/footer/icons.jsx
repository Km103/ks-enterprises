import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
export default function Icons() {
    return (
        <div className="flex flex-row items-center gap-x-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
        </div>
    );
}
