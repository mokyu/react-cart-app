import React, {} from 'react';
import './Rating.scss';


type RatingProps = {
    rating: number
}

function normalizedRating(num: number): number
{
    return 20 + ((num - 1) / 4) * 80;
}

function Rating(props: RatingProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 535 110" width="160" height="32">
            <defs>
                <radialGradient id="A" cx="80" cy="243" r="97" gradientTransform="matrix(.54 0 0 .51 14 -70)"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fc0" offset="0"/>
                    <stop stopColor="#ff6e00" offset="1"/>
                </radialGradient>
                <clipPath id="clip-path">
                    <rect height="110" width="535" x="0" y="0"></rect>
                </clipPath>
            </defs>
            <g clipPath={`polygon(0 0, ${normalizedRating(props.rating)}% 0, ${normalizedRating(props.rating)}% 100%, 0% 100%)`}>
                <path id="B" d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z" fill="url(#A)"
                      fillRule="evenodd"/>
                <use width="535" height="110" xlinkHref="#B" x="105"/>
                <use width="535" height="110" xlinkHref="#B" x="211"/>
                <use width="535" height="110" xlinkHref="#B" x="316"/>
                <use width="535" height="110" xlinkHref="#B" x="421"/>
            </g>
        </svg>
    );
}

export default Rating;
