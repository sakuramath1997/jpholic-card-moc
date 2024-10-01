
export type HeaderProps = {
    children?: React.ReactNode;
    title?: string;
}

export default function Header(props: HeaderProps) {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">{props.title?props.title:"デジタルコンテンツコレクター"}</h1>
        </header>
    )
}