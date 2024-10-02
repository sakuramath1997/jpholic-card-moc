'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import QRCodeReader from '@/components/elements/QRCodeReader';




export type QrcodeReaderContainerProp = {
    scannedResult: string;
    setScannedResult: React.Dispatch<React.SetStateAction<string>>;
}

export default function QrcodeReaderContainer(props: QrcodeReaderContainerProp) {
    const [scannedTime, setScannedTime] = useState(new Date());
    //const [scannedResult, setScannedResult] = useState('');
    useEffect(() => {}, [scannedTime, props.scannedResult]);
    // QRコードを読み取った時の実行する関数
    const onNewScanResult = (result: any) => {
        console.log('QRコードスキャン結果');
        console.log(result);
        setScannedTime(new Date());
        props.setScannedResult(result);
    };
    return (
        <>
            <div>
                <h2>スキャン日時：{scannedTime.toLocaleDateString()}</h2>
                <h2>スキャン結果：{props.scannedResult}</h2>
            </div>
            <QRCodeReader
                onScanSuccess={onNewScanResult}
                onScanFailure={(error: any) => {
                // console.log('Qr scan error');
                }}
            />
        </>
    );
}