import { type BreadcrumbsT, BreadcrumbWrapper } from "@/shared";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = ({ items }: BreadcrumbsT) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${items[0]}`);
    }

    return (
            <BreadcrumbWrapper teamKey={items[0]} onClick={handleClick}>
                {items.map((item, idx) => (
                        <span key={idx}>{item}{idx < item.length - 1 && <span>&gt;</span>}</span>
                ))}
            </BreadcrumbWrapper>
    );
};