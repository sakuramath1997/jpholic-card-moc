"use client";
import React from "react";
import Header from "@/components/layouts/Header"


export type LoginBoundaryProps = {
    children: React.ReactNode;
}

export default function LoginBoundary(props: LoginBoundaryProps) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [activeView, setActiveView] = React.useState("login");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement actual login logic
        setIsLoggedIn(true);
        setActiveView("dashboard");
    };
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Implement actual registration logic
        setIsLoggedIn(true);
        setActiveView("dashboard");
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setActiveView("login");
    };

    function IfLoginTF (trueText: string, falseText: string): string {
        if ( activeView === "login" ) {
            return trueText;
        } else {
            return falseText;
        }
    }
    
    return(
        <React.Fragment>
            <div className="min-h-screen bg-gray-100 font-sans">
                <Header title="デジタルコンテンツコレクター"></Header>
                <main className="container mx-auto p-4">
                    {!isLoggedIn ? (
                    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">
                            {IfLoginTF("ログイン", "新規登録")}
                        </h2>
                        <form onSubmit={activeView === "login" ? handleLogin : handleRegister } className="space-y-4">
                            <div>
                                <label htmlFor={IfLoginTF("email", "register-email")} className="block mb-1">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    id={IfLoginTF("email", "register-email")}
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label htmlFor={IfLoginTF("password", "register-password")} className="block mb-1">
                                パスワード
                                </label>
                                <input
                                    type="password"
                                    id={IfLoginTF("password", "register-password")}
                                    name="password"
                                    required
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className={IfLoginTF("w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700", "w-full bg-green-600 text-white py-2 rounded hover:bg-green-700") }
                            >
                                {IfLoginTF("ログイン","登録")}
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <button
                                onClick={() => setActiveView(IfLoginTF("register", "login"))}
                                className="text-blue-600 hover:underline"
                            >
                                {IfLoginTF("新規登録はこちら", "ログインはこちら")}
                            </button>
                        </div>
                        {activeView === "login" ? (
                        <div className="mt-4 flex justify-center space-x-4">
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                <i className="fab fa-google mr-2"></i>Google
                            </button>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
                                <i className="fab fa-facebook-f mr-2"></i>Facebook
                            </button>
                        </div>
                        ) : "" }
                    </div>
                    ) : (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">マイコレクション</h2>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                ログアウト
                            </button>
                        </div>
                        {props.children}
                    </div>
                    )}
                </main>
            </div>
        </React.Fragment>
    );
}