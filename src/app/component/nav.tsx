import Link from "next/link";



export default function Navbar(){
    return <nav className="bg-blue-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-x-4">
             <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/jobs">Jobs</Link>
            </div>
        </div>
        </nav>
        
        
}