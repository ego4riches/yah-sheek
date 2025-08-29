import { FeedDetail, FeedList, TeamLayout } from "@/entities";
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
    const navigate = useNavigate();

    // reviewId Params 들어올 경우, SelectedFeedId 설정
    useEffect(() => {
        if (reviewId) {
            setSelectedFeedId(reviewId);
        } else {
            reset();
        }
    }, [reviewId]);

    const handleFeedClick = (id: string) => {
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
                            <ReviewHeader title={team.ballPark} teamKey={teamKey}/>
                            {selectedFeedId ?
                                    <FeedDetail reviewId={selectedFeedId} onClose={handleCloseDetail}/>
                                    : <FeedList teamId={team.id} onClick={handleFeedClick}/>
                            }
                        </>
                )}
            </TeamLayout>
    );
};