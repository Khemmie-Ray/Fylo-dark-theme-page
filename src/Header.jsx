import Logo from "./assets/logo.svg"

export default function Header () {
    return (
        <header>
            <img src={Logo} alt="" />
            <nav>
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">Sign In</a>
            </nav>
        </header>
    )
}