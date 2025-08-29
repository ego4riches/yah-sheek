// import { useInfiniteScrollStore } from "@/entities";
// import { useEffect, useRef } from "react";
//
// export const useInfiniteScrollObserver = () => {
//     const { setIntersecting } = useInfiniteScrollStore();
//     const ref = useRef<HTMLDivElement | null>(null);
//
//     useEffect(() => {
//         if (!ref.current) return;
//
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIntersecting(entry.isIntersecting);
//             },
//             { threshold: 0.5 }
//         );
//
//         observer.observe(ref.current);
//
//         return () => observer.disconnect();
//     }, [setIntersecting]);
//
//     return ref;
// };