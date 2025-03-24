import Header from "@/components/Header";

export default function StandardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-10">
                {children}
            </main>
        </div>
    );
}
