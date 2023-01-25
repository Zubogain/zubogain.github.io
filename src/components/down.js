import React from "react";
import Image from 'next/image';

const Down = () => {
    return (
        <div className="slide-down d-flex justify-content-center">
            <Image
                priority
                src="/static/angle-down.svg"
                height={50}
                width={50}
                alt="Follow us on Twitter"
            />
        </div>
    )
}

export default Down;