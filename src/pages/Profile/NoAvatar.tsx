import {Circle} from "@chakra-ui/react";
import * as React from "react";

export function NoAvatar() {
    return (
        <Circle size={'132px'} bg={'basic.100'}>
            <svg width="64" height="61" viewBox="0 0 64 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="17.75" r="17.25" fill="#523774"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18.2093 32.4072C8.79263 36.9774 1.98486 46.0822 0.62449 56.8832C0.348432 59.075 2.16583 60.875 4.37497 60.875H59.625C61.8341 60.875 63.6515 59.075 63.3754 56.8832C62.0151 46.0822 55.2073 36.9774 45.7907 32.4073C42.1887 35.7976 37.337 37.875 32 37.875C26.663 37.875 21.8113 35.7976 18.2093 32.4072Z"
                      fill="#523774"/>
            </svg>
        </Circle>
    )
}