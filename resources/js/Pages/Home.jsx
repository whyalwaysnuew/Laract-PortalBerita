import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Home(props){
    return(
            <div className="min-h-screen bg-slate-50">
                <Navbar user={props.auth.user} />
                <Head title={props.title} />
                <div className="flex justify-center flex-col items-center p-4 gap-4 lg:flex-row lg:items-stretch lg:flex-wrap">
                    <NewsLists news={props.news.data}/>
                </div>
                <div className='flex justify-center p-4'>
                    <Paginator meta={props.news.meta}/>
                </div>
            </div>
    )
}