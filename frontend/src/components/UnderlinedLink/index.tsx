import { Link } from "react-router-dom";
import "./index.css";

type UnderlinedLinkProps = {
  to: any;
  children: React.ReactNode;
};

export default function UnderlinedLink({ to, children }: UnderlinedLinkProps) {
  return (
    <Link to={to} className="underlined-link">
      {children}
    </Link>
  );
}
