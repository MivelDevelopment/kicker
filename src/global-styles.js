import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Poppins', 'Oswald', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-oxs-font-smoothing: grayscale;
        background-color: #f1f1f1;
        color: #333;
        font-size: 16px;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    @media (max-width: 1169px) {
        .sticky-header {
            position: fixed;
        }
    }

    .fa-icons-row {
        margin: 20px 0 -0.5rem -8px;
        font-size: 2.25em;
        
        & > a {
            all: unset;
        }

        svg:first-of-type {
            padding-right: 9px;
        }

        & > a > svg {
            margin-right: 8px;
            padding: 8px;
            border-radius: 5px;
            background: transparent;
            transition: .15s;
            cursor: pointer;

            :hover {
                &.fa-instagram {
                    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
                    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                }
                &.fa-facebook-square {
                    background-color: #3b5998;
                }
                &.fa-tiktok {
                    background-color: #000;
                }
                &.fa-discord {
                    background-color: #5865F2;
                    color: #fff;
                }
            }
        }
    }

    .flex-half {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        flex-direction: column;
        
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
    
`