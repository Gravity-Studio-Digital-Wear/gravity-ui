import * as React from 'react';
import {Grid, GridItem, HStack, Image, Text} from "@chakra-ui/react";

export function HowItWorksPage() {

    return (
        <Grid templateColumns={'repeat(12, 1fr)'}>
            <GridItem gridColumn={'span 2'}>
                <svg width="166" height="951" viewBox="0 0 166 951" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M129.48 941.055L129.48 942.055L130.48 942.055L130.48 941.055L129.48 941.055ZM49.3912 941.055L48.3912 941.055L48.3912 942.055L49.3912 942.055L49.3912 941.055ZM49.3912 924.084L49.3912 923.084L48.3912 923.084L48.3912 924.084L49.3912 924.084ZM82.0284 924.084L82.0284 925.084L83.0284 925.084L83.0284 924.084L82.0284 924.084ZM82.0284 895.59L83.0284 895.59L83.0284 894.59L82.0284 894.59L82.0284 895.59ZM49.3912 895.59L48.3912 895.59L48.3912 896.59L49.3912 896.59L49.3912 895.59ZM49.3912 878.392L49.3912 877.392L48.3912 877.392L48.3912 878.392L49.3912 878.392ZM129.48 878.392L130.48 878.392L130.48 877.392L129.48 877.392L129.48 878.392ZM129.48 895.59L129.48 896.59L130.48 896.59L130.48 895.59L129.48 895.59ZM97.2969 895.59L97.2969 894.59L96.2969 894.59L96.2969 895.59L97.2969 895.59ZM97.2969 924.084L96.2969 924.084L96.2969 925.084L97.2969 925.084L97.2969 924.084ZM129.48 924.084L130.48 924.084L130.48 923.084L129.48 923.084L129.48 924.084ZM129.48 940.055L49.3912 940.055L49.3912 942.055L129.48 942.055L129.48 940.055ZM50.3912 941.055L50.3912 924.084L48.3912 924.084L48.3912 941.055L50.3912 941.055ZM49.3912 925.084L82.0284 925.084L82.0284 923.084L49.3912 923.084L49.3912 925.084ZM83.0284 924.084L83.0284 895.59L81.0284 895.59L81.0284 924.084L83.0284 924.084ZM82.0284 894.59L49.3912 894.59L49.3912 896.59L82.0284 896.59L82.0284 894.59ZM50.3912 895.59L50.3912 878.392L48.3912 878.392L48.3912 895.59L50.3912 895.59ZM49.3912 879.392L129.48 879.392L129.48 877.392L49.3912 877.392L49.3912 879.392ZM128.48 878.392L128.48 895.59L130.48 895.59L130.48 878.392L128.48 878.392ZM129.48 894.59L97.2969 894.59L97.2969 896.59L129.48 896.59L129.48 894.59ZM96.2969 895.59L96.2969 924.084L98.2969 924.084L98.2969 895.59L96.2969 895.59ZM97.2969 925.084L129.48 925.084L129.48 923.084L97.2969 923.084L97.2969 925.084ZM128.48 924.084L128.48 941.055L130.48 941.055L130.48 924.084L128.48 924.084ZM68.9735 857.647L69.4702 856.779L69.4679 856.778L68.9735 857.647ZM53.9888 842.946L53.1267 843.453L53.1281 843.455L53.9888 842.946ZM68.9735 787.151L69.468 788.02L69.4702 788.019L68.9735 787.151ZM127.38 838.348L128.295 838.751L128.299 838.742L127.38 838.348ZM118.582 851.29L119.282 852.004L119.285 852.001L118.582 851.29ZM105.527 859.861L105.913 860.783L105.915 860.782L105.527 859.861ZM106.776 839.2L107.471 839.918L107.474 839.916L106.776 839.2ZM106.776 805.654L106.077 806.37L106.077 806.37L106.776 805.654ZM72.4927 805.654L73.1883 806.373L73.1911 806.37L72.4927 805.654ZM89.6343 862.039C82.3097 862.039 75.595 860.284 69.4702 856.779L68.4768 858.515C74.915 862.199 81.974 864.039 89.6343 864.039L89.6343 862.039ZM69.4679 856.778C63.2987 853.268 58.4306 848.492 54.8495 842.437L53.1281 843.455C56.888 849.812 62.0097 854.836 68.479 858.516L69.4679 856.778ZM54.8508 842.439C51.2729 836.353 49.483 829.698 49.483 822.456L47.483 822.456C47.483 830.046 49.3636 837.052 53.1267 843.453L54.8508 842.439ZM49.483 822.456C49.483 815.174 51.2734 808.5 54.8509 802.415L53.1267 801.401C49.3632 807.803 47.483 814.828 47.483 822.456L49.483 822.456ZM54.8509 802.415C58.4323 796.323 63.3002 791.528 69.468 788.02L68.4791 786.281C62.0082 789.962 56.8863 795.006 53.1267 801.401L54.8509 802.415ZM69.4702 788.019C75.595 784.513 82.3098 782.758 89.6343 782.758L89.6343 780.758C81.9741 780.758 74.915 782.598 68.4768 786.283L69.4702 788.019ZM89.6343 782.758C96.8812 782.758 103.558 784.512 109.685 788.019L110.678 786.283C104.242 782.599 97.2207 780.758 89.6343 780.758L89.6343 782.758ZM109.685 788.019C115.815 791.527 120.665 796.321 124.247 802.415L125.972 801.402C122.213 795.008 117.111 789.964 110.678 786.283L109.685 788.019ZM124.247 802.415C127.825 808.5 129.615 815.174 129.615 822.456L131.615 822.456C131.615 814.828 129.735 807.803 125.972 801.402L124.247 802.415ZM129.615 822.456C129.615 827.885 128.563 833.048 126.461 837.955L128.299 838.742C130.51 833.583 131.615 828.151 131.615 822.456L129.615 822.456ZM126.464 837.946C124.317 842.832 121.455 847.04 117.879 850.579L119.285 852.001C123.05 848.274 126.053 843.854 128.295 838.751L126.464 837.946ZM117.882 850.575C114.307 854.077 110.063 856.866 105.139 858.939L105.915 860.782C111.057 858.617 115.516 855.693 119.282 852.004L117.882 850.575ZM105.142 858.938C100.194 861.006 95.0273 862.039 89.6343 862.039L89.6343 864.039C95.2906 864.039 100.719 862.954 105.913 860.783L105.142 858.938ZM89.6343 847.068C96.5865 847.068 102.551 844.681 107.471 839.918L106.08 838.481C101.54 842.876 96.0774 845.068 89.6343 845.068L89.6343 847.068ZM107.474 839.916C112.36 835.148 114.814 829.308 114.814 822.456L112.814 822.456C112.814 828.772 110.576 834.095 106.077 838.484L107.474 839.916ZM114.814 822.456C114.814 815.567 112.362 809.708 107.474 804.939L106.077 806.37C110.575 810.759 112.814 816.1 112.814 822.456L114.814 822.456ZM107.474 804.939C102.555 800.137 96.5891 797.73 89.6343 797.73L89.6343 799.73C96.0749 799.73 101.537 801.939 106.077 806.37L107.474 804.939ZM89.6343 797.73C82.6794 797.73 76.7138 800.137 71.7942 804.939L73.1911 806.37C77.7316 801.939 83.1937 799.73 89.6343 799.73L89.6343 797.73ZM71.797 804.936C66.8364 809.739 64.3408 815.598 64.3408 822.456L66.3408 822.456C66.3408 816.145 68.6132 810.803 73.1883 806.373L71.797 804.936ZM64.3408 822.456C64.3408 829.311 66.8157 835.151 71.7404 839.918L73.1314 838.481C68.596 834.091 66.3408 828.769 66.3408 822.456L64.3408 822.456ZM71.7404 839.918C76.6617 844.682 82.6458 847.068 89.6343 847.068L89.6343 845.068C83.1516 845.068 77.6701 842.875 73.1314 838.481L71.7404 839.918ZM49.3912 777.077L48.3912 777.077L48.3912 778.469L49.7103 778.025L49.3912 777.077ZM49.3912 758.686L49.0967 757.731L48.3912 757.948L48.3912 758.686L49.3912 758.686ZM99.8512 743.134L100.146 744.09L103.377 743.094L100.124 742.172L99.8512 743.134ZM60.6865 732.463L59.6865 732.463L59.6865 733.23L60.4273 733.429L60.6865 732.463ZM60.6865 718.5L60.4249 717.535L59.6865 717.735L59.6865 718.5L60.6865 718.5ZM99.8512 707.886L100.113 708.851L103.434 707.951L100.148 706.931L99.8512 707.886ZM49.3912 692.22L48.3912 692.22L48.3912 692.957L49.0947 693.175L49.3912 692.22ZM49.3912 673.716L49.7133 672.769L48.3912 672.32L48.3912 673.716L49.3912 673.716ZM129.48 700.961L130.48 700.961L130.48 700.245L129.802 700.014L129.48 700.961ZM129.48 714.3L129.739 715.266L130.48 715.067L130.48 714.3L129.48 714.3ZM87.4206 725.595L87.1613 724.629L83.5193 725.607L87.1674 726.563L87.4206 725.595ZM129.48 736.607L130.48 736.607L130.48 735.835L129.733 735.639L129.48 736.607ZM129.48 750.116L129.799 751.063L130.48 750.834L130.48 750.116L129.48 750.116ZM50.3912 777.077L50.3912 758.686L48.3912 758.686L48.3912 777.077L50.3912 777.077ZM49.6857 759.642L100.146 744.09L99.5566 742.178L49.0967 757.731L49.6857 759.642ZM100.124 742.172C93.0401 740.164 79.9788 736.606 60.9457 731.497L60.4273 733.429C79.4615 738.538 92.51 742.093 99.5785 744.096L100.124 742.172ZM61.6865 732.463L61.6865 718.5L59.6865 718.5L59.6865 732.463L61.6865 732.463ZM60.9481 719.465L100.113 708.851L99.5896 706.921L60.4249 717.535L60.9481 719.465ZM100.148 706.931L49.6877 691.265L49.0947 693.175L99.5547 708.841L100.148 706.931ZM50.3912 692.22L50.3912 673.716L48.3912 673.716L48.3912 692.22L50.3912 692.22ZM49.0692 674.663L129.158 701.908L129.802 700.014L49.7133 672.769L49.0692 674.663ZM128.48 700.961L128.48 714.3L130.48 714.3L130.48 700.961L128.48 700.961ZM129.221 713.334L87.1613 724.629L87.68 726.561L129.739 715.266L129.221 713.334ZM87.1674 726.563L129.227 737.574L129.733 735.639L87.6739 724.628L87.1674 726.563ZM128.48 736.607L128.48 750.116L130.48 750.116L130.48 736.607L128.48 736.607ZM129.161 749.168L49.0722 776.129L49.7103 778.025L129.799 751.063L129.161 749.168Z"
                        fill="#39373E"/>
                    <path
                        d="M49.3912 407.421L49.3912 389.031L99.8511 373.478C92.775 371.473 79.7201 367.916 60.6865 362.808L60.6865 348.844L99.8511 338.23L49.3912 322.564L49.3912 304.061L129.48 331.306L129.48 344.644L87.4206 355.94L129.48 366.951L129.48 380.46L49.3912 407.421ZM89.6343 299.549C82.1419 299.549 75.255 297.752 68.9735 294.157C62.6542 290.562 57.6593 285.662 53.9888 279.456C50.3183 273.212 48.483 266.382 48.483 258.966C48.483 251.511 50.3183 244.662 53.9888 238.418C57.6593 232.175 62.6542 227.256 68.9735 223.661C75.255 220.066 82.1419 218.268 89.6343 218.268C97.051 218.268 103.9 220.066 110.182 223.661C116.463 227.256 121.439 232.175 125.109 238.418C128.78 244.662 130.615 251.511 130.615 258.966C130.615 264.528 129.537 269.826 127.38 274.859C125.185 279.853 122.253 284.167 118.582 287.8C114.912 291.395 110.56 294.252 105.527 296.371C100.457 298.49 95.1589 299.549 89.6343 299.549ZM89.6343 282.578C96.332 282.578 102.046 280.289 106.776 275.71C111.468 271.131 113.814 265.55 113.814 258.966C113.814 252.344 111.468 246.743 106.776 242.165C102.046 237.548 96.332 235.24 89.6343 235.24C82.9366 235.24 77.2227 237.548 72.4927 242.165C67.7248 246.781 65.3409 252.381 65.3408 258.966C65.3408 265.55 67.7059 271.131 72.4359 275.71C77.1659 280.289 82.8987 282.578 89.6343 282.578ZM129.48 202.916L49.3912 202.916L49.3912 170.165C49.3912 165.814 50.148 161.897 51.6616 158.416C53.1374 154.935 55.1429 152.134 57.6782 150.015C60.1757 147.896 62.9569 146.288 66.022 145.191C69.0871 144.093 72.3035 143.545 75.6713 143.545C81.7635 143.545 87.1936 145.247 91.9615 148.653C96.6915 152.059 99.7376 157.016 101.1 163.524L129.48 143.658L129.48 164.092L101.838 181.971L101.838 185.831L129.48 185.831L129.48 202.916ZM86.9098 185.831L86.9098 171.414C86.9098 168.311 85.7557 165.851 83.4474 164.035C81.1392 162.219 78.5471 161.311 75.6713 161.311C72.8711 161.311 70.2979 162.181 67.9519 163.922C65.5679 165.624 64.376 167.97 64.376 170.96L64.3759 185.831L86.9098 185.831ZM129.48 127.738L49.3912 127.738L49.3912 110.54L75.6713 110.54L49.3912 91.5817L49.3913 71.602L89.01 101.912L129.48 64.3935L129.48 86.4733L102.292 110.54L129.48 110.54L129.48 127.738ZM105.981 62.5499L105.981 45.4651C108.706 45.3515 110.995 44.2542 112.849 42.173C114.703 40.0539 115.631 37.1591 115.631 33.4886C115.631 30.0073 114.874 27.1882 113.36 25.0313C111.809 22.8745 109.746 21.7771 107.173 21.7392C105.168 21.6636 103.427 22.3069 101.951 23.6691C100.476 25.0313 99.189 27.6045 98.0916 31.3885L95.4239 41.0378C91.1479 54.8494 83.4664 61.7553 72.3792 61.7553C65.3409 61.7553 59.6081 59.1065 55.1808 53.8088C50.7157 48.5112 48.4831 41.9648 48.4831 34.1697C48.4831 26.2611 50.6968 19.7715 55.1241 14.701C59.5514 9.63036 65.5112 7.09507 73.0036 7.09507L73.0036 24.0664C70.2791 24.0664 68.0843 24.9746 66.4194 26.7909C64.7544 28.5694 63.9219 31.1047 63.9219 34.3968C63.9219 37.3862 64.6787 39.8647 66.1923 41.8324C67.6681 43.8001 69.579 44.7839 71.9251 44.7839C75.747 44.7839 78.4715 41.9081 80.0986 36.1564L83.1069 26.6206C87.4207 11.6359 95.4807 4.31382 107.287 4.65439C111.147 4.69223 114.609 5.56256 117.674 7.26537C120.739 8.93034 123.199 11.144 125.053 13.9063C126.907 16.6308 128.326 19.677 129.31 23.0447C130.294 26.3747 130.786 29.856 130.786 33.4886C130.786 42.1541 128.477 49.1734 123.861 54.5467C119.206 59.8822 113.247 62.5499 105.981 62.5499Z"
                        fill="#39373E"/>
                    <path
                        d="M49.3912 407.421L48.3912 407.421L48.3912 408.813L49.7102 408.369L49.3912 407.421ZM49.3912 389.031L49.0966 388.075L48.3912 388.293L48.3912 389.031L49.3912 389.031ZM99.8511 373.478L100.146 374.434L103.377 373.438L100.124 372.516L99.8511 373.478ZM60.6865 362.808L59.6865 362.808L59.6865 363.575L60.4273 363.773L60.6865 362.808ZM60.6865 348.844L60.4249 347.879L59.6865 348.079L59.6865 348.844L60.6865 348.844ZM99.8511 338.23L100.113 339.196L103.434 338.295L100.148 337.275L99.8511 338.23ZM49.3912 322.564L48.3912 322.564L48.3912 323.301L49.0947 323.519L49.3912 322.564ZM49.3912 304.061L49.7132 303.114L48.3912 302.664L48.3912 304.061L49.3912 304.061ZM129.48 331.306L130.48 331.306L130.48 330.589L129.802 330.359L129.48 331.306ZM129.48 344.644L129.739 345.61L130.48 345.411L130.48 344.644L129.48 344.644ZM87.4206 355.94L87.1612 354.974L83.5192 355.952L87.1673 356.907L87.4206 355.94ZM129.48 366.951L130.48 366.951L130.48 366.179L129.733 365.984L129.48 366.951ZM129.48 380.46L129.799 381.408L130.48 381.179L130.48 380.46L129.48 380.46ZM50.3912 407.421L50.3912 389.031L48.3912 389.031L48.3912 407.421L50.3912 407.421ZM49.6857 389.986L100.146 374.434L99.5566 372.523L49.0966 388.075L49.6857 389.986ZM100.124 372.516C93.04 370.509 79.9788 366.95 60.9457 361.842L60.4273 363.773C79.4614 368.882 92.5099 372.437 99.5784 374.441L100.124 372.516ZM61.6865 362.808L61.6865 348.844L59.6865 348.844L59.6865 362.808L61.6865 362.808ZM60.9481 349.81L100.113 339.196L99.5895 337.265L60.4249 347.879L60.9481 349.81ZM100.148 337.275L49.6877 321.609L49.0947 323.519L99.5546 339.185L100.148 337.275ZM50.3912 322.564L50.3912 304.061L48.3912 304.061L48.3912 322.564L50.3912 322.564ZM49.0691 305.007L129.158 332.252L129.802 330.359L49.7132 303.114L49.0691 305.007ZM128.48 331.306L128.48 344.644L130.48 344.644L130.48 331.306L128.48 331.306ZM129.221 343.678L87.1612 354.974L87.68 356.905L129.739 345.61L129.221 343.678ZM87.1673 356.907L129.227 367.918L129.733 365.984L87.6739 354.972L87.1673 356.907ZM128.48 366.951L128.48 380.46L130.48 380.46L130.48 366.951L128.48 366.951ZM129.161 379.512L49.0721 406.473L49.7102 408.369L129.799 381.408L129.161 379.512ZM68.9735 294.157L69.4702 293.289L69.468 293.288L68.9735 294.157ZM53.9888 279.456L53.1267 279.963L53.1281 279.965L53.9888 279.456ZM68.9735 223.661L69.468 224.53L69.4702 224.529L68.9735 223.661ZM127.38 274.859L128.295 275.261L128.299 275.252L127.38 274.859ZM118.582 287.8L119.282 288.514L119.285 288.511L118.582 287.8ZM105.527 296.371L105.913 297.293L105.915 297.292L105.527 296.371ZM106.776 275.71L107.471 276.428L107.474 276.426L106.776 275.71ZM106.776 242.165L106.077 242.88L106.078 242.88L106.776 242.165ZM72.4927 242.165L73.1883 242.883L73.1911 242.88L72.4927 242.165ZM89.6343 298.549C82.3097 298.549 75.595 296.794 69.4702 293.289L68.4768 295.025C74.915 298.709 81.9741 300.549 89.6343 300.549L89.6343 298.549ZM69.468 293.288C63.2987 289.778 58.4306 285.002 54.8495 278.947L53.1281 279.965C56.888 286.322 62.0097 291.346 68.479 295.026L69.468 293.288ZM54.8508 278.949C51.2729 272.863 49.483 266.209 49.483 258.966L47.483 258.966C47.483 266.556 49.3636 273.562 53.1267 279.963L54.8508 278.949ZM49.483 258.966C49.483 251.684 51.2734 245.011 54.8509 238.925L53.1267 237.912C49.3632 244.314 47.483 251.338 47.483 258.966L49.483 258.966ZM54.8509 238.925C58.4323 232.833 63.3002 228.039 69.468 224.53L68.4791 222.792C62.0082 226.473 56.8863 231.516 53.1267 237.912L54.8509 238.925ZM69.4702 224.529C75.595 221.023 82.3098 219.268 89.6343 219.268L89.6343 217.268C81.9741 217.268 74.915 219.108 68.4768 222.793L69.4702 224.529ZM89.6343 219.268C96.8812 219.268 103.558 221.023 109.685 224.529L110.678 222.793C104.242 219.109 97.2207 217.268 89.6343 217.268L89.6343 219.268ZM109.685 224.529C115.815 228.037 120.665 232.832 124.247 238.925L125.972 237.912C122.213 231.518 117.111 226.474 110.678 222.793L109.685 224.529ZM124.247 238.925C127.825 245.011 129.615 251.684 129.615 258.966L131.615 258.966C131.615 251.338 129.735 244.314 125.972 237.912L124.247 238.925ZM129.615 258.966C129.615 264.395 128.563 269.558 126.461 274.465L128.299 275.252C130.51 270.093 131.615 264.661 131.615 258.966L129.615 258.966ZM126.464 274.456C124.317 279.343 121.455 283.55 117.879 287.089L119.285 288.511C123.05 284.785 126.053 280.364 128.295 275.261L126.464 274.456ZM117.882 287.085C114.307 290.587 110.063 293.376 105.139 295.449L105.915 297.292C111.057 295.128 115.516 292.203 119.282 288.514L117.882 287.085ZM105.142 295.448C100.194 297.516 95.0273 298.549 89.6343 298.549L89.6343 300.549C95.2906 300.549 100.719 299.464 105.913 297.293L105.142 295.448ZM89.6343 283.578C96.5865 283.578 102.551 281.191 107.471 276.428L106.08 274.991C101.54 279.386 96.0774 281.578 89.6343 281.578L89.6343 283.578ZM107.474 276.426C112.36 271.658 114.814 265.818 114.814 258.966L112.814 258.966C112.814 265.282 110.576 270.605 106.077 274.994L107.474 276.426ZM114.814 258.966C114.814 252.077 112.362 246.218 107.474 241.449L106.078 242.88C110.575 247.269 112.814 252.61 112.814 258.966L114.814 258.966ZM107.474 241.449C102.555 236.647 96.5891 234.24 89.6343 234.24L89.6343 236.24C96.0749 236.24 101.537 238.449 106.077 242.88L107.474 241.449ZM89.6343 234.24C82.6795 234.24 76.7138 236.647 71.7942 241.449L73.1911 242.88C77.7316 238.449 83.1937 236.24 89.6343 236.24L89.6343 234.24ZM71.797 241.446C66.8364 246.249 64.3409 252.108 64.3409 258.966L66.3409 258.966C66.3409 252.655 68.6132 247.313 73.1883 242.883L71.797 241.446ZM64.3409 258.966C64.3408 265.821 66.8157 271.661 71.7404 276.428L73.1314 274.991C68.596 270.601 66.3408 265.279 66.3409 258.966L64.3409 258.966ZM71.7404 276.428C76.6617 281.192 82.6458 283.578 89.6343 283.578L89.6343 281.578C83.1516 281.578 77.6702 279.385 73.1314 274.991L71.7404 276.428ZM129.48 202.916L129.48 203.916L130.48 203.916L130.48 202.916L129.48 202.916ZM49.3912 202.916L48.3912 202.916L48.3912 203.916L49.3912 203.916L49.3912 202.916ZM51.6616 158.416L52.5787 158.815L52.5823 158.806L51.6616 158.416ZM57.6782 150.015L58.3196 150.783L58.3252 150.778L57.6782 150.015ZM91.9615 148.653L92.5458 147.842L92.5427 147.839L91.9615 148.653ZM101.1 163.524L100.121 163.729L100.432 165.213L101.673 164.344L101.1 163.524ZM129.48 143.658L130.48 143.658L130.48 141.738L128.907 142.839L129.48 143.658ZM129.48 164.092L130.023 164.932L130.48 164.636L130.48 164.092L129.48 164.092ZM101.838 181.971L101.295 181.132L100.838 181.427L100.838 181.971L101.838 181.971ZM101.838 185.831L100.838 185.831L100.838 186.831L101.838 186.831L101.838 185.831ZM129.48 185.831L130.48 185.831L130.48 184.831L129.48 184.831L129.48 185.831ZM86.9098 185.831L86.9098 186.831L87.9098 186.831L87.9098 185.831L86.9098 185.831ZM67.9519 163.922L68.5331 164.735L68.5404 164.73L68.5477 164.725L67.9519 163.922ZM64.3759 185.831L63.3759 185.831L63.3759 186.831L64.3759 186.831L64.3759 185.831ZM129.48 201.916L49.3912 201.916L49.3912 203.916L129.48 203.916L129.48 201.916ZM50.3912 202.916L50.3912 170.165L48.3912 170.165L48.3912 202.916L50.3912 202.916ZM50.3912 170.165C50.3912 165.931 51.1272 162.153 52.5787 158.815L50.7446 158.017C49.1688 161.641 48.3912 165.696 48.3912 170.165L50.3912 170.165ZM52.5823 158.806C54.0052 155.45 55.9225 152.786 58.3195 150.783L57.0369 149.248C54.3634 151.483 52.2696 154.419 50.7409 158.026L52.5823 158.806ZM58.3252 150.778C60.7315 148.736 63.4079 147.189 66.3591 146.132L65.6849 144.249C62.506 145.387 59.6198 147.056 57.0313 149.253L58.3252 150.778ZM66.3591 146.132C69.3123 145.075 72.4144 144.545 75.6713 144.545L75.6713 142.545C72.1926 142.545 68.8619 143.112 65.6849 144.249L66.3591 146.132ZM75.6713 144.545C81.564 144.545 86.789 146.187 91.3802 149.467L92.5427 147.839C87.5982 144.308 81.9631 142.545 75.6713 142.545L75.6713 144.545ZM91.3772 149.465C95.8759 152.704 98.8023 157.428 100.121 163.729L102.079 163.319C100.673 156.603 97.5071 151.414 92.5458 147.842L91.3772 149.465ZM101.673 164.344L130.054 144.477L128.907 142.839L100.526 162.705L101.673 164.344ZM128.48 143.658L128.48 164.092L130.48 164.092L130.48 143.658L128.48 143.658ZM128.937 163.252L101.295 181.132L102.381 182.811L130.023 164.932L128.937 163.252ZM100.838 181.971L100.838 185.831L102.838 185.831L102.838 181.971L100.838 181.971ZM101.838 186.831L129.48 186.831L129.48 184.831L101.838 184.831L101.838 186.831ZM128.48 185.831L128.48 202.916L130.48 202.916L130.48 185.831L128.48 185.831ZM87.9098 185.831L87.9098 171.414L85.9098 171.414L85.9098 185.831L87.9098 185.831ZM87.9098 171.414C87.9098 168.024 86.6303 165.267 84.0658 163.249L82.829 164.821C84.881 166.436 85.9098 168.598 85.9098 171.414L87.9098 171.414ZM84.0658 163.249C81.5854 161.297 78.7766 160.311 75.6713 160.311L75.6713 162.311C78.3177 162.311 80.693 163.14 82.829 164.821L84.0658 163.249ZM75.6713 160.311C72.6468 160.311 69.8665 161.256 67.356 163.118L68.5477 164.725C70.7294 163.106 73.0954 162.311 75.6713 162.311L75.6713 160.311ZM67.3706 163.108C64.7176 165.003 63.376 167.655 63.3759 170.96L65.3759 170.96C65.376 168.286 66.4183 166.246 68.5331 164.735L67.3706 163.108ZM63.3759 170.96L63.3759 185.831L65.3759 185.831L65.3759 170.96L63.3759 170.96ZM64.3759 186.831L86.9098 186.831L86.9098 184.831L64.3759 184.831L64.3759 186.831ZM129.48 127.738L129.48 128.738L130.48 128.738L130.48 127.738L129.48 127.738ZM49.3912 127.738L48.3912 127.738L48.3912 128.738L49.3912 128.738L49.3912 127.738ZM49.3912 110.54L49.3912 109.54L48.3912 109.54L48.3912 110.54L49.3912 110.54ZM75.6713 110.54L75.6713 111.54L78.7668 111.54L76.2563 109.729L75.6713 110.54ZM49.3912 91.5817L48.3912 91.5817L48.3912 92.0933L48.8062 92.3927L49.3912 91.5817ZM49.3913 71.602L49.9989 70.8078L48.3913 69.5779L48.3913 71.602L49.3913 71.602ZM89.01 101.912L88.4023 102.706L89.0717 103.218L89.6898 102.645L89.01 101.912ZM129.48 64.3935L130.48 64.3935L130.48 62.1028L128.8 63.6602L129.48 64.3935ZM129.48 86.4733L130.143 87.2221L130.48 86.9236L130.48 86.4733L129.48 86.4733ZM102.292 110.54L101.629 109.791L99.6534 111.54L102.292 111.54L102.292 110.54ZM129.48 110.54L130.48 110.54L130.48 109.54L129.48 109.54L129.48 110.54ZM129.48 126.738L49.3912 126.738L49.3912 128.738L129.48 128.738L129.48 126.738ZM50.3912 127.738L50.3912 110.54L48.3912 110.54L48.3912 127.738L50.3912 127.738ZM49.3912 111.54L75.6713 111.54L75.6713 109.54L49.3912 109.54L49.3912 111.54ZM76.2563 109.729L49.9763 90.7707L48.8062 92.3927L75.0862 111.351L76.2563 109.729ZM50.3912 91.5817L50.3913 71.602L48.3913 71.602L48.3912 91.5817L50.3912 91.5817ZM48.7836 72.3963L88.4023 102.706L89.6176 101.118L49.9989 70.8078L48.7836 72.3963ZM89.6898 102.645L130.16 65.1268L128.8 63.6602L88.3301 101.179L89.6898 102.645ZM128.48 64.3935L128.48 86.4733L130.48 86.4733L130.48 64.3935L128.48 64.3935ZM128.817 85.7245L101.629 109.791L102.955 111.288L130.143 87.2221L128.817 85.7245ZM102.292 111.54L129.48 111.54L129.48 109.54L102.292 109.54L102.292 111.54ZM128.48 110.54L128.48 127.738L130.48 127.738L130.48 110.54L128.48 110.54ZM105.981 62.5499L104.981 62.5499L104.981 63.5499L105.981 63.5499L105.981 62.5499ZM105.981 45.4651L105.94 44.4659L104.981 44.5059L104.981 45.4651L105.981 45.4651ZM112.849 42.173L113.596 42.8382L113.602 42.8315L112.849 42.173ZM113.36 25.0313L114.179 24.4569L114.172 24.4474L113.36 25.0313ZM107.173 21.7393L107.136 22.7385L107.147 22.739L107.159 22.7391L107.173 21.7393ZM98.0916 31.3885L97.1311 31.11L97.1278 31.122L98.0916 31.3885ZM95.4239 41.0377L96.3792 41.3335L96.3837 41.3189L96.3877 41.3042L95.4239 41.0377ZM55.1808 53.8088L55.9481 53.1676L55.9454 53.1644L55.1808 53.8088ZM73.0036 7.09508L74.0036 7.09508L74.0036 6.09508L73.0036 6.09508L73.0036 7.09508ZM73.0036 24.0664L73.0036 25.0664L74.0036 25.0664L74.0036 24.0664L73.0036 24.0664ZM66.4194 26.7909L67.1494 27.4744L67.1565 27.4666L66.4194 26.7909ZM66.1923 41.8324L66.9924 41.2324L66.9849 41.2227L66.1923 41.8324ZM80.0986 36.1564L79.1449 35.8555L79.1404 35.8698L79.1364 35.8841L80.0986 36.1564ZM83.1069 26.6206L84.0606 26.9215L84.0644 26.9094L84.0679 26.8973L83.1069 26.6206ZM107.287 4.65439L107.258 5.65396L107.267 5.65424L107.277 5.65433L107.287 4.65439ZM117.674 7.26536L117.188 8.13956L117.197 8.14408L117.674 7.26536ZM125.053 13.9063L124.222 14.4637L124.226 14.4689L125.053 13.9063ZM129.31 23.0447L128.35 23.3251L128.351 23.3281L129.31 23.0447ZM123.861 54.5467L124.614 55.2041L124.619 55.1984L123.861 54.5467ZM106.981 62.5499L106.981 45.4651L104.981 45.4651L104.981 62.5499L106.981 62.5499ZM106.023 46.4642C109.025 46.3391 111.566 45.1165 113.596 42.8382L112.103 41.5078C110.424 43.3918 108.387 44.364 105.94 44.4659L106.023 46.4642ZM113.602 42.8315C115.659 40.4806 116.631 37.3263 116.631 33.4887L114.631 33.4887C114.631 36.992 113.748 39.6272 112.097 41.5145L113.602 42.8315ZM116.631 33.4887C116.631 29.867 115.843 26.8286 114.179 24.4569L112.542 25.6058C113.904 27.5479 114.631 30.1476 114.631 33.4887L116.631 33.4887ZM114.172 24.4474C112.443 22.0433 110.09 20.782 107.188 20.7394L107.159 22.7391C109.403 22.7722 111.175 23.7056 112.548 25.6153L114.172 24.4474ZM107.211 20.74C104.941 20.6543 102.943 21.3928 101.273 22.9343L102.63 24.4039C103.911 23.2209 105.395 22.6728 107.136 22.7385L107.211 20.74ZM101.273 22.9343C99.5867 24.4909 98.239 27.2901 97.1312 31.11L99.0521 31.667C100.139 27.9189 101.364 25.5717 102.63 24.4039L101.273 22.9343ZM97.1278 31.122L94.4601 40.7713L96.3877 41.3042L99.0555 31.655L97.1278 31.122ZM94.4686 40.742C92.3637 47.5411 89.4504 52.5389 85.7872 55.8322C82.1441 59.1074 77.6956 60.7553 72.3792 60.7553L72.3792 62.7553C78.1499 62.7553 83.0858 60.9502 87.1243 57.3195C91.1426 53.707 94.2081 48.3461 96.3792 41.3335L94.4686 40.742ZM72.3792 60.7553C65.6305 60.7553 60.1812 58.2328 55.9481 53.1676L54.4135 54.4501C59.035 59.9801 65.0513 62.7553 72.3792 62.7553L72.3792 60.7553ZM55.9454 53.1644C51.6514 48.0697 49.4831 41.7604 49.4831 34.1698L47.4831 34.1698C47.4831 42.1693 49.78 48.9527 54.4162 54.4533L55.9454 53.1644ZM49.4831 34.1698C49.4831 26.4583 51.6362 20.216 55.8773 15.3587L54.3708 14.0432C49.7573 19.3271 47.4831 26.0639 47.4831 34.1698L49.4831 34.1698ZM55.8773 15.3587C60.092 10.5317 65.7634 8.09508 73.0036 8.09508L73.0036 6.09508C65.259 6.09508 59.0108 8.72905 54.3708 14.0432L55.8773 15.3587ZM72.0036 7.09508L72.0036 24.0664L74.0036 24.0664L74.0036 7.09508L72.0036 7.09508ZM73.0036 23.0664C70.0317 23.0664 67.5578 24.0691 65.6822 26.1152L67.1565 27.4666C68.6109 25.8801 70.5264 25.0664 73.0036 25.0664L73.0036 23.0664ZM65.6893 26.1075C63.7975 28.1283 62.9219 30.9416 62.9219 34.3968L64.9219 34.3968C64.9219 31.2677 65.7113 29.0105 67.1494 27.4743L65.6893 26.1075ZM62.9219 34.3968C62.9219 37.5603 63.7258 40.2661 65.3997 42.4421L66.9849 41.2227C65.6316 39.4633 64.9219 37.212 64.9219 34.3968L62.9219 34.3968ZM65.3923 42.4324C67.0463 44.6377 69.2469 45.7839 71.9251 45.7839L71.9251 43.7839C69.9112 43.7839 68.2899 42.9625 66.9923 41.2324L65.3923 42.4324ZM71.9251 45.7839C74.1217 45.7839 76.0175 44.9438 77.5608 43.3148C79.0766 41.7148 80.2238 39.3874 81.0608 36.4286L79.1364 35.8841C78.3463 38.677 77.3177 40.6634 76.1089 41.9393C74.9278 43.1861 73.5504 43.7839 71.9251 43.7839L71.9251 45.7839ZM81.0523 36.4572L84.0606 26.9215L82.1532 26.3198L79.1449 35.8555L81.0523 36.4572ZM84.0679 26.8973C86.1945 19.5102 89.214 14.1242 93.0596 10.6307C96.8811 7.15906 101.589 5.49045 107.258 5.65396L107.316 3.65482C101.178 3.47775 95.9533 5.29993 91.7148 9.15036C87.5004 12.9789 84.3331 18.7463 82.1459 26.344L84.0679 26.8973ZM107.277 5.65433C110.987 5.69071 114.283 6.52558 117.188 8.13953L118.16 6.39121C114.935 4.59952 111.306 3.69373 107.297 3.65442L107.277 5.65433ZM117.197 8.14408C120.127 9.73585 122.463 11.8419 124.223 14.4637L125.883 13.349C123.935 10.4461 121.351 8.12482 118.151 6.38663L117.197 8.14408ZM124.226 14.4689C126.018 17.1015 127.394 20.0513 128.35 23.3251L130.27 22.7643C129.258 19.3026 127.796 16.1602 125.88 13.3437L124.226 14.4689ZM128.351 23.3281C129.306 26.5619 129.786 29.9475 129.786 33.4887L131.786 33.4887C131.786 29.7645 131.281 26.1875 130.269 22.7614L128.351 23.3281ZM129.786 33.4887C129.786 41.9705 127.53 48.7412 123.102 53.8951L124.619 55.1984C129.424 49.6056 131.786 42.3377 131.786 33.4887L129.786 33.4887ZM123.107 53.8894C118.648 59.0007 112.966 61.5499 105.981 61.5499L105.981 63.5499C113.527 63.5499 119.765 60.7637 124.614 55.2041L123.107 53.8894Z"
                        fill="#39373E"/>
                    <path
                        d="M81.0427 534H80.0427V535H81.0427V534ZM81.0427 453.911V452.911H80.0427V453.911H81.0427ZM98.014 453.911H99.014V452.911H98.014V453.911ZM98.014 534V535H99.014V534H98.014ZM82.0427 534L82.0427 453.911H80.0427L80.0427 534H82.0427ZM81.0427 454.911H98.014V452.911H81.0427V454.911ZM97.014 453.911L97.014 534H99.014L99.014 453.911H97.014ZM98.014 533H81.0427V535H98.014V533ZM59.2467 564.236H58.2467V565.236H59.2467V564.236ZM59.2467 548.911V547.911H58.2467V548.911H59.2467ZM119.696 548.911H120.696V547.911H119.696V548.911ZM119.696 564.236V565.236H120.696V564.236H119.696ZM98.0708 564.236V563.236H97.0708V564.236H98.0708ZM98.0708 629V630H99.0708V629H98.0708ZM80.8724 629H79.8724V630H80.8724V629ZM80.8724 564.236H81.8724V563.236H80.8724V564.236ZM60.2467 564.236L60.2467 548.911H58.2467L58.2467 564.236H60.2467ZM59.2467 549.911H119.696V547.911H59.2467V549.911ZM118.696 548.911L118.696 564.236H120.696V548.911H118.696ZM119.696 563.236H98.0708V565.236H119.696V563.236ZM97.0708 564.236V629H99.0708V564.236H97.0708ZM98.0708 628H80.8724V630H98.0708V628ZM81.8724 629V564.236H79.8724V629H81.8724ZM80.8724 563.236H59.2467V565.236H80.8724V563.236Z"
                        fill="#39373E"/>
                </svg>
            </GridItem>


            <GridItem gridColumn={'span 10'}>
                <Text fontSize={26} my={'60px'}>
                    You can pose any way you'd like, we'll tailor your virtual clothes to match. To get the best
                    results:
                </Text>


                <Grid templateColumns={'repeat(2, 1fr)'} gridGap={'32px'}>
                    <GridItem>
                        <Image src={'/do.png'}/>

                        <HStack mt={'40px'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12.5" r="12" fill="#A0DA9D"/>
                            </svg>


                            <Text fontWeight={'bold'} letterSpacing={'0.02em'} textTransform={'uppercase'}
                                  color={'basic.500'} fontSize={25}>Do</Text>


                        </HStack>
                        <Text color={'basic.500'} mt={'16px'}>
                            Wear form-fitting clothes or a swimsuit in your photo, especially if the design is also
                            form-fitting.
                            If a design is see-through, what you're wearing in your photo will show through, so wear
                            something underneath that you want to be seen.
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Image src={'/dont.png'}/>

                        <HStack mt={'40px'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12.5" r="12" fill="#D63155"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 12.1157L16.4194 7.69629L17.3033 8.58017L12.8838 12.9996L17.3033 17.419L16.4194 18.3029L12 13.8835L7.58054 18.3029L6.69666 17.419L11.1161 12.9996L6.69666 8.58017L7.58054 7.69629L12 12.1157Z"
                                      fill="white"/>
                            </svg>


                            <Text fontWeight={'bold'} letterSpacing={'0.02em'} textTransform={'uppercase'}
                                  color={'basic.500'} fontSize={25}>DON’T</Text>
                        </HStack>

                        <Text color={'basic.500'} mt={'16px'}>
                            Wear clothes that cover parts of your body which the virtual outfit leaves exposed. This
                            usually means no long sleeves, long trousers, or high necklines.
                        </Text>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}