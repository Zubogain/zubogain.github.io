import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import LinkComponent from "./Link";

const Down = () => {
    const routes = ["/[locale]", "/[locale]/skills", "/[locale]/experience", "/[locale]/contact"];

    const [nextRoute, setNextRoute] = useState("");

    const router = useRouter();

    useEffect(() => {
        const routeIndex = routes.indexOf(router.route);
        const nextRouteIndex = routeIndex + 1;

        if (routeIndex != -1 && nextRouteIndex < routes.length) {
            setNextRoute(routes[nextRouteIndex].replace("[locale]/", ""));
        }

    }, [router.route]);

    console.log(nextRoute)

    return (
        <LinkComponent href={nextRoute} className="slide-down d-flex justify-content-center">
            <Image
                priority
                src="/static/angle-down.svg"
                height={50}
                width={50}
                alt="Follow us on Twitter"
            />
        </LinkComponent>
    )
}

export default Down;