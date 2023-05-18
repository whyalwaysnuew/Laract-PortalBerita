import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 px-4">
                <Link href={route("home")} className="normal-case text-xl">
                    NUEWS
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://loremflickr.com/320/240/girl/all" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href={route("profile.edit")}>
                                    Profiles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("dashboard")}
                                    className="justify-between"
                                >
                                    Dashboards
                                    <span className="badge badge-secondary">
                                        Newss
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <Link href={route("logout")}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex flex-end gap-2">
                        <Link href={route("login")} className="btn btn-primary">
                            Login
                        </Link>
                        <Link
                            href={route("register")}
                            className="btn btn-outline"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
