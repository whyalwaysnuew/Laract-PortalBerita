import {useState} from 'react';
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
        Inertia.post('store', data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create News</h2>}
        >
            <Head title="My News" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif && (props.flash.message)
                    }
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
            </div>
        </AuthenticatedLayout>
    );
}
