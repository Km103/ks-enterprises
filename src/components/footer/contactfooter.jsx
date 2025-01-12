import { FaMapMarker } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

export default function ContactFooter() {
    return (
        <div className="flex flex-col gap-y-4 py-4 text-sm">
            {/* Address */}
            <div className="flex items-center gap-x-4">
                <FaMapMarker className="text-base " />
                <div className="text-sm w-full sm:w-64">
                    Village Manwala, Manwala Road, Dhuri, Sangrur-148024,
                    Punjab, India
                </div>
            </div>

            {/* Phone */}
            <div className="flex flexitems-center gap-x-4">
                <IoCall className="text-base " />

                <div className="flex flex-col">
                    <div className="text-sm hover:underline cursor-pointer">
                        +91 90823-82000
                    </div>
                    <div className="text-sm  hover:underline cursor-pointer">
                        +91 98774-83337
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-x-4">
                <IoIosMail className="text-base  " />
                <div className="text-sm  hover:underline cursor-pointer">
                    info@trufixxy.com
                </div>
            </div>
        </div>
    );
}
