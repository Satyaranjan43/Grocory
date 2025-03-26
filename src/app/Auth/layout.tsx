export default function AuthLayout({
    login,
    signup,
}: {
    login: React.ReactNode;
    signup: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex gap-10 p-6 bg-white shadow-md rounded-lg w-[600px]">
                <div className="w-1/2">{login}</div>
                <div className="w-1/2">{signup}</div>
            </div>
        </div>
    );
}
