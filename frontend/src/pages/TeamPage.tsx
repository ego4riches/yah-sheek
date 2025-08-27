import { FeedDetail, ReviewFeeds, TeamLayout } from "@/entities";
import { useFeedStore } from "@/shared";
import { ReviewHeader } from "@/widgets";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type TeamPageT = {
    teamKey: string;
    reviewId?: string;
}

export const TeamPage = () => {
    const { teamKey, reviewId } = useParams<TeamPageT>();
    const { selectedFeedId, setSelectedFeedId, reset } = useFeedStore();
    const navigate = useNavigate();

    // reviewId 값 들어올 경우 SelectedFeedId 설정
    useEffect(() => {
        if (reviewId) {
            setSelectedFeedId(Number(reviewId));
        } else {
            reset();
        }
    }, [reviewId]);

    const handleFeedClick = (id: number) => {
        setSelectedFeedId(id);
        navigate(`review/${id}`);
    };

    const handleCloseDetail = () => {
        reset();
        history.back();
    };

    return (
            <TeamLayout teamKey={teamKey!}>
                {(team) => (
                        <>
                            <ReviewHeader title={team.ballPark}/>
                            {selectedFeedId ?
                                    <FeedDetail reviewId={selectedFeedId} onClose={handleCloseDetail}/>
                                    : <ReviewFeeds teamId={team.id} onClick={handleFeedClick}/>
                            }
                        </>
                )}
            </TeamLayout>
    );
};