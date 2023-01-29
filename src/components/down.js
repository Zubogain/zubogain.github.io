import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";

const Down = () => {
    const routes = ["/[locale]", "/[locale]/skills", "/[locale]/experience", "/[locale]/contact"];

    const [nextRoute, setNextRoute] = useState("");

    const router = useRouter();

    useEffect(() => {
        const routeIndex = routes.indexOf(router.route);
        const nextRouteIndex = routeIndex + 1;

        if (routeIndex != -1 && nextRouteIndex < routes.length) {
            setNextRoute(routes[nextRouteIndex].replace("[locale]", router.query.locale));
        } else {
            setNextRoute(router.route.replace("[locale]", router.query.locale));
        }

    }, [router.route, router.query.locale]);

    return (
        <Link href={nextRoute} className="slide-down d-flex justify-content-center">
            <Image
                priority
                src="/static/angle-down.svg"
                height={50}
                width={50}
                alt="Follow us on Twitter"
            />
        </Link>
    )
}

export default Down;