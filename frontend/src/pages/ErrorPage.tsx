import {NotFound, type NotFoundT} from "@/shared";

export const ErrorPage = ({code}: NotFoundT) => <NotFound code={code}/>