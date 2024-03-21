import { Link } from "react-router-dom";
import "./index.css"

export default function UnderlinedLink({to, children}){
    return (
        <Link to={to} className="underlined-link">{children}</Link>
    )
}