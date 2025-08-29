import { LoadingSpinnerBox, LoadingSpinnerItemBox, LoadingSpinnerWrapper } from "@/shared";

export const LoadingSpinner = () => {
    return (
            <LoadingSpinnerWrapper>
                <LoadingSpinnerBox>
                    <LoadingSpinnerItemBox/>
                </LoadingSpinnerBox>
            </LoadingSpinnerWrapper>
    );
};