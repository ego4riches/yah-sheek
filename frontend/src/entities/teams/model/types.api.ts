import type {TeamI} from "@/entities";
import type {BaseResponseT} from "@/shared";

export type GetTeamsResponseT = BaseResponseT<TeamI[]>;
export type GetTeamByKeyResponseT = BaseResponseT<TeamI>;