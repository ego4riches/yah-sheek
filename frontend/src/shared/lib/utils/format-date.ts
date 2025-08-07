export const formatDate = (dateString: string): string => {
    const today = new Date();
    const date = new Date(dateString);

    const isToday = today.getFullYear() === date.getFullYear()
        && today.getMonth() === date.getMonth()
        && today.getDate() === date.getDate();

    // 오늘 날짜인 경우, 시간만 반환
    if (isToday) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${ hours }:${ minutes }`; // 18:25 형식

        // 오늘 날짜 아닌 경우, 날짜만 반환
    } else {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${ year }.${ month }.${ day }`; // 2025.08.07 형식
    }
};