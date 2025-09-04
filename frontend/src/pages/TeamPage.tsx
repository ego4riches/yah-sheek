import { FeedDetail, FeedList, TeamLayout } from "@/entities";
import { EditReview, useEditReviewStore } from "@/features";
import { type TeamKeyT, useFeedStore } from "@/shared";
import { ReviewHeader } from "@/widgets";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type TeamPageT = {
    teamKey: TeamKeyT;
    reviewId?: string;
}

export const TeamPage = () => {
    const { teamKey, reviewId } = useParams<TeamPageT>();
    const { selectedFeedId, setSelectedFeedId, reset } = useFeedStore();
    const { isEdit, setIsEdit, setValue, reset: editReset } = useEditReviewStore();
    const navigate = useNavigate();

    // reviewId Params 들어올 경우, SelectedFeedId 설정
    useEffect(() => {
        if (reviewId) {
            setSelectedFeedId(reviewId);
        } else {
            reset();
            editReset();
        }
    }, [reviewId]);

    const handleFeedClick = (id: string) => {
        setSelectedFeedId(id);
        navigate(`review/${id}`);
    };

    const handleClose = () => {
        reset();
        history.back();
    };

    const handleEditClick = (value: string) => {
        setIsEdit(!isEdit);
        setValue(value);
    }

    return (
            <TeamLayout teamKey={teamKey!}>
                {(team) => (
                        <>
                            <ReviewHeader title={team.ballPark} teamKey={teamKey}/>
                            {selectedFeedId
                                    ? isEdit
                                            ? <EditReview
                                                    reviewId={selectedFeedId}
                                                    onClose={handleClose}
                                                    onEdit={handleEditClick}/>
                                            : <FeedDetail
                                                    reviewId={selectedFeedId}
                                                    isEdit={isEdit}
                                                    onClose={handleClose}
                                                    onEdit={handleEditClick}/>
                                    : <FeedList teamId={team.id} onClick={handleFeedClick}/>
                            }
                        </>
                )}
            </TeamLayout>
    );
};