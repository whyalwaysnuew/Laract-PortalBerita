import {useState, useEffect} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

    useEffect(() => {
        if(!props.myNews){
            Inertia.get('/MyNews')
        }
        console.log('result: ', props)
        return;
    }, [])
    
    // console.log('result: ', props)

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="My News" />

            <div className="py-6">
                <div className="max-w-7xl mt-7 lg:px-8 sm:px-6 mx-auto">
                    <div className="flex justify-center flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:flex-wrap">
                    {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
                        return (
                            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    {news.title} 
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                        <p>
                                            {news.description}
                                        </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">
                                            {news.category}
                                            </div> 
                                        <div className="badge badge-outline">
                                            {news.author}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                        <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div>
                                    <h3 className="font-bold">Belum Memiliki Berita!</h3>
                                    <div className="text-xs">Silahkan Membuat Berita Terlebih dahulu</div>
                                </div>
                            </div>
                            <div className="flex-none">
                                <Link href={route('Create-News')} className="btn btn-sm">Buat Berita</Link>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
