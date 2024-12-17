import { FaMapMarker } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

export default function ContactFooter() {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex px-2">
                <FaMapMarker />
                <div className="w-64 text-sm px-4">
                    Dhuri, Village Manwala, Manwala Road, Dhuri, Sangrur-148024,
                    Punjab, India
                </div>
            </div>
            <div className="flex px-2">
                <IoCall />
                <div className="px-4 text-sm">+91**********</div>
            </div>
            <div className="px-2 flex">
                <IoIosMail className="text-lg" />
                <div className="px-4 text-sm">info@ksenterprisesdhuri.com</div>
            </div>
        </div>
    );
}
