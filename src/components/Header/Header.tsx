import { Navbar } from "components/Navbar/Navbar";


export const Header = () => {
    return (
        <div
            style={{
                backgroundImage: "url('src/assets/Banner01.png')",
                minHeight: "545px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
            }}
        >
            <Navbar />
        </div>
    )
}