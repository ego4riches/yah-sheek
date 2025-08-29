import { ActionButtonsBox, Breadcrumb, Button, BUTTON_SIZES, BUTTON_VARIANTS, type FeedDetailHeaderT, FeedDetailHeaderWrapper } from "@/shared";
import DeleteIcon from '@/shared/config/assets/delete.png'
import EditIcon from '@/shared/config/assets/edit.png'
import PrevIcon from '@/shared/config/assets/prev.png'

export const FeedDetailHeader = ({ breadcrumb, onClose }: FeedDetailHeaderT) => {
    return (
            <FeedDetailHeaderWrapper>
                <Button
                        children={<img src={PrevIcon} alt='prev'/>}
                        size={BUTTON_SIZES.ICON}
                        variant={BUTTON_VARIANTS.TRANSPARENT}
                        onClick={onClose}
                />
                <Breadcrumb items={breadcrumb}/>
                <ActionButtonsBox>
                    <Button
                            children={<img src={EditIcon} alt='prev'/>}
                            size={BUTTON_SIZES.ICON}
                            variant={BUTTON_VARIANTS.TRANSPARENT}
                            onClick={() => {
                            }}/>
                    <Button
                            children={<img src={DeleteIcon} alt='prev'/>}
                            size={BUTTON_SIZES.ICON}
                            variant={BUTTON_VARIANTS.TRANSPARENT}
                            onClick={() => {
                            }}/>
                </ActionButtonsBox>
            </FeedDetailHeaderWrapper>
    );
};