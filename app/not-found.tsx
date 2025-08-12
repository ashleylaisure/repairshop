import Image from 'next/image'

export const metadata = {
    title: "Page Not Found",
}

export default function NotFound() {
    return (
        <div className="relative w-screen h-screen bg-black">
            
            <Image
                src="/not-found-1024x1024.png"
                alt="404 - Page Not Found"
                fill
                className="object-cover center"
                sizes="300px"
                priority={true}
                title="404 - Page Not Found"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-xl text-center">
                    <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
                    <p className="mt-2 text-lg text-gray-200">
                        Oops! The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                </div>
            </div>
        </div>
    )
}