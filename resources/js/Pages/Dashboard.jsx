import {useState, useEffect} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('news', data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    useEffect(() => {
        if(!props.myNews){
            Inertia.get('/news')
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
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif && (
                        <div className="alert alert-success shadow-lg mb-7">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-xl">Title</span>
                                    </label>
                                    <input value={title} onChange={(title) => setTitle(title.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-xl">Description</span>
                                    </label> 
                                    <textarea value={description} onChange={(description) => setDescription(description.target.value)} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                                </div>
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-xl">Category</span>
                                    </label> 
                                    <input type="text" value={category} onChange={(category) => setCategory(category.target.value)} className="input input-bordered w-full" />
                                </div>
                                <button onClick={() => handleSubmit()} type="submit" className="my-2 btn btn-block btn-primary">SUBMIT</button>
                        </div>
                    </div>
                </div>
                {/* <div className="max-w-7xl mt-7 lg:px-8 sm:px-6 mx-auto">
                    <div className="flex justify-center flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:flex-wrap">
                    {props.myNews.length > 0 ? props.myNews.map((news, i) => {
                        return (
                            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
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
                            <span>Belum Memiliki Berita.</span>
                            </div>
                        </div>
                    }
                    </div>
                </div> */}
            </div>
        </AuthenticatedLayout>
    );
}
