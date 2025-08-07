export const getStarRating = (likes: number): string => {
    if (likes === 5) {
        return '★★★★★';
    } else if (likes === 4) {
        return '★★★★☆';
    } else if (likes === 3) {
        return '★★★☆☆';
    } else if (likes === 2) {
        return '★★☆☆☆';
    } else {
        return '★☆☆☆☆';
    }
};