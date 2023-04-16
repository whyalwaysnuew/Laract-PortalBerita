import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function MyNews(props) {
    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/MyNews");
        }
        // console.log('result: ', props)
        return;
    }, []);

    //  console.log('result: ', props)

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="My News" />

            <div className="py-6">
                <div className="max-w-7xl mt-7 lg:px-8 sm:px-6 mx-auto">
                    {/* Alert Success */}
                    {props.flash.success != null ? (
                        <div className="alert alert-success shadow-lg mb-7">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span>{props.flash.success}</span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* Alert Delete */}
                    {props.flash.delete != null ? (
                        <div className="alert alert-error shadow-lg mb-7">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span>{props.flash.delete}</span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* Alert Message */}
                    {props.flash.message != null ? (
                        <div className="alert alert-error shadow-lg mb-7">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span>{props.flash.mesage}</span>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    <div className="flex justify-center flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:flex-wrap">
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((news, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="card w-full lg:w-96 bg-base-100 shadow-xl"
                                    >
                                        <figure>
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {news.title}
                                                <div className="badge badge-secondary">
                                                    NEWs
                                                </div>
                                            </h2>
                                            <p>{news.description}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">
                                                    {news.category}
                                                </div>
                                                <Link
                                                    href={route("news.edit")}
                                                    method="get"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                    className="badge badge-info"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route("news.delete")}
                                                    method="post"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                    className="badge badge-error"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="alert shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-current flex-shrink-0 w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">
                                            Belum Memiliki Berita!
                                        </h3>
                                        <div className="text-xs">
                                            Silahkan Membuat Berita Terlebih
                                            dahulu
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none">
                                    <Link
                                        href={route("news.create")}
                                        className="btn btn-sm"
                                    >
                                        Buat Berita
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
