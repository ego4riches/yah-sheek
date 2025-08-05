import {DownIconBox, type IsOpenI} from "@/shared";

export const DownIcon = ({isOpen}: IsOpenI) => (
        <DownIconBox
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                isOpen={isOpen}
        >
            <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
            />
        </DownIconBox>
); 