import { ReactComponent as CheckSVG } from "../../assets/images/check.svg";
import { ReactComponent as DeleteSVG } from "../../assets/images/delete.svg";

const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />
}

function TodoIcon({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };