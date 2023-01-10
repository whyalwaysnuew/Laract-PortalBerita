import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Home(props){
    console.log(props)
    return(
        <>
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <Head title={props.title} />
            
                <div>
            <div className="text-center text-white">
                <p>{props.description}</p>
            </div>
                {props.news ? props.news.map((data, i) => {
                    return(
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md border rounded-md">
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                            <p className='text-sm text-emerald-600'>{data.category}</p>
                            <p className='text-sm text-cyan-700'>{data.author}</p>
                        </div>
                    )
                }) : <p>Saat Ini Belum Ada Berita</p>}
                </div>
            </div>
        </>
    )
}