import { Link } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React from "react";

export default function Pagination({ marginTop = "mt-10", meta, links }) {
    return (
        <div
            className={clsx(
                "flex items-center justify-center gap-2 mt-10",
                marginTop
            )}
        >
            {meta.links.map((link, i) => (
                <div key={i}>
                    <Link
                        preserveScroll
                        className={clsx(
                            link.active && "text-blue-500",
                            "text-gray-500"
                        )}
                        key={i}
                        href={link.url}
                    >
                        {link.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
