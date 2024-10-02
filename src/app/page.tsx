"use client";
import React, { useEffect } from "react";
import ModalContainer from "@/components/elements/ModalContainer";
import QrcodeReaderContainer from "@/components/elements/QRCodeReaderContainer";

type Content = {
  id: number;
  type: string;
  url: string;
}


function MainComponent() {
  const [collections, setCollections] = React.useState<[Content]|[]>([]);
  const [scannedResult, setScannedResult] = React.useState('');
  const [test, setTest] = React.useState('まだ読込まれていません');
//  const [count, setCount] = React.useState<number>(0);

  useEffect(()=>{
    const pattern = 'https://jpholic-card-moc.vercel.app/assets/';
    if(scannedResult.indexOf(pattern) === 0) {
      let copyedScannedResult = scannedResult;
      let scannedAssetsId = copyedScannedResult.replace(copyedScannedResult, "");
//      setCount(count+1);
      setTest(scannedAssetsId);
    } else {
      setTest("読込んだ文字列は妥当なパターンではありません")
    }
  }, [scannedResult])

  const handleScanQR = () => {
    // TODO: Implement QR code scanning logic
    let newContent: Content = {
      id: Date.now(),
      type: "image",
      url: "/placeholder-image.jpg",
    } as Content;
    let a = [...collections, newContent] as [Content];
    setCollections(a);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            {item.type === "image" && (
                <img
                src={item.url}
                alt="コレクションアイテム"
                className="w-full h-48 object-cover rounded"
                />
            )}
            {/* TODO: Add support for other content types */}
          </div>
        ))}
      </div>
      <ModalContainer buttonMessage="QRコードをスキャン">
        <QrcodeReaderContainer scannedResult = {scannedResult} setScannedResult = {setScannedResult}/>
      </ModalContainer>
      <p>読込んだ文字列: {scannedResult}</p>
      <p>処理したデータ: {test}</p>
    </React.Fragment>
  );
}

export default MainComponent;

//"use client";
//import React from "react";
//import Header from "@/components/layouts/Header"
//
//function MainComponent() {
//  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//  const [activeView, setActiveView] = React.useState("login");
//  const [collections, setCollections] = React.useState([]);
//
//  const handleLogin = (e) => {
//    e.preventDefault();
//    // TODO: Implement actual login logic
//    setIsLoggedIn(true);
//    setActiveView("dashboard");
//  };
//
//  const handleRegister = (e) => {
//    e.preventDefault();
//    // TODO: Implement actual registration logic
//    setIsLoggedIn(true);
//    setActiveView("dashboard");
//  };
//
//  const handleLogout = () => {
//    setIsLoggedIn(false);
//    setActiveView("login");
//  };
//
//  const handleScanQR = () => {
//    // TODO: Implement QR code scanning logic
//    const newContent = {
//      id: Date.now(),
//      type: "image",
//      url: "/placeholder-image.jpg",
//    };
//    setCollections([...collections, newContent]);
//  };
//
//  return (
//    <div className="min-h-screen bg-gray-100 font-sans">
//      <Header title="デジタルコンテンツコレクター"></Header>
//
//      <main className="container mx-auto p-4">
//        {!isLoggedIn ? (
//          activeView === "login" ? (
//            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//              <h2 className="text-2xl font-bold mb-6">ログイン</h2>
//              <form onSubmit={handleLogin} className="space-y-4">
//                <div>
//                  <label htmlFor="email" className="block mb-1">
//                    メールアドレス
//                  </label>
//                  <input
//                    type="email"
//                    id="email"
//                    name="email"
//                    required
//                    className="w-full px-3 py-2 border rounded"
//                  />
//                </div>
//                <div>
//                  <label htmlFor="password" className="block mb-1">
//                    パスワード
//                  </label>
//                  <input
//                    type="password"
//                    id="password"
//                    name="password"
//                    required
//                    className="w-full px-3 py-2 border rounded"
//                  />
//                </div>
//                <button
//                  type="submit"
//                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//                >
//                  ログイン
//                </button>
//              </form>
//              <div className="mt-4 text-center">
//                <button
//                  onClick={() => setActiveView("register")}
//                  className="text-blue-600 hover:underline"
//                >
//                  新規登録はこちら
//                </button>
//              </div>
//              <div className="mt-4 flex justify-center space-x-4">
//                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
//                  <i className="fab fa-google mr-2"></i>Google
//                </button>
//                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
//                  <i className="fab fa-facebook-f mr-2"></i>Facebook
//                </button>
//              </div>
//            </div>
//          ) : (
//            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//              <h2 className="text-2xl font-bold mb-6">新規登録</h2>
//              <form onSubmit={handleRegister} className="space-y-4">
//                <div>
//                  <label htmlFor="register-email" className="block mb-1">
//                    メールアドレス
//                  </label>
//                  <input
//                    type="email"
//                    id="register-email"
//                    name="email"
//                    required
//                    className="w-full px-3 py-2 border rounded"
//                  />
//                </div>
//                <div>
//                  <label htmlFor="register-password" className="block mb-1">
//                    パスワード
//                  </label>
//                  <input
//                    type="password"
//                    id="register-password"
//                    name="password"
//                    required
//                    className="w-full px-3 py-2 border rounded"
//                  />
//                </div>
//                <button
//                  type="submit"
//                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//                >
//                  登録
//                </button>
//              </form>
//              <div className="mt-4 text-center">
//                <button
//                  onClick={() => setActiveView("login")}
//                  className="text-blue-600 hover:underline"
//                >
//                  ログインはこちら
//                </button>
//              </div>
//            </div>
//          )
//        ) : (
//          <div>
//            <div className="flex justify-between items-center mb-6">
//              <h2 className="text-2xl font-bold">マイコレクション</h2>
//              <button
//                onClick={handleLogout}
//                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//              >
//                ログアウト
//              </button>
//            </div>
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//              {collections.map((item) => (
//                <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                  {item.type === "image" && (
//                    <img
//                      src={item.url}
//                      alt="コレクションアイテム"
//                      className="w-full h-48 object-cover rounded"
//                    />
//                  )}
//                  {/* TODO: Add support for other content types */}
//                </div>
//              ))}
//            </div>
//            <button
//              onClick={handleScanQR}
//              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 fixed bottom-8 right-8 shadow-lg"
//            >
//              <i className="fas fa-qrcode mr-2"></i>QRコードをスキャン
//            </button>
//          </div>
//        )}
//      </main>
//    </div>
//  );
//}
//
//export default MainComponent;