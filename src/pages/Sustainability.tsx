import * as React from 'react';

import {Box, Button, Flex, Grid, GridItem, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import { Routes } from '../app/routes';

export function SustainabilityPage() {
    return (
        <Grid templateColumns={'repeat(12, 1fr)'} px={{base: '17px', md: 0}}>
            <GridItem gridColumn={'span 2'} display={{base: 'none', md: 'block'}}>
                <svg width="166" height="969" viewBox="0 0 166 969" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M105.981 963.771L104.981 963.771L104.981 964.771L105.981 964.771L105.981 963.771ZM105.981 946.686L105.94 945.687L104.981 945.727L104.981 946.686L105.981 946.686ZM112.849 943.394L113.596 944.059L113.602 944.052L112.849 943.394ZM113.36 926.252L114.179 925.678L114.172 925.668L113.36 926.252ZM107.173 922.96L107.135 923.959L107.147 923.96L107.158 923.96L107.173 922.96ZM98.0915 932.609L97.131 932.331L97.1277 932.343L98.0915 932.609ZM95.4238 942.258L96.379 942.554L96.3835 942.54L96.3876 942.525L95.4238 942.258ZM55.1807 955.029L55.948 954.388L55.9453 954.385L55.1807 955.029ZM73.0034 908.316L74.0034 908.316L74.0034 907.316L73.0034 907.316L73.0034 908.316ZM73.0034 925.287L73.0034 926.287L74.0034 926.287L74.0034 925.287L73.0034 925.287ZM66.4192 928.012L67.1493 928.695L67.1564 928.687L66.4192 928.012ZM66.1922 943.053L66.9922 942.453L66.9848 942.443L66.1922 943.053ZM80.0985 937.377L79.1448 937.076L79.1403 937.09L79.1362 937.105L80.0985 937.377ZM83.1068 927.841L84.0604 928.142L84.0642 928.13L84.0677 928.118L83.1068 927.841ZM107.287 905.875L107.258 906.875L107.267 906.875L107.277 906.875L107.287 905.875ZM117.674 908.486L117.188 909.36L117.196 909.365L117.674 908.486ZM125.053 915.127L124.222 915.684L124.226 915.69L125.053 915.127ZM129.31 924.265L128.35 924.546L128.351 924.549L129.31 924.265ZM123.861 955.767L124.614 956.425L124.619 956.419L123.861 955.767ZM106.981 963.771L106.981 946.686L104.981 946.686L104.981 963.771L106.981 963.771ZM106.023 947.685C109.025 947.56 111.566 946.337 113.596 944.059L112.103 942.728C110.424 944.613 108.387 945.585 105.94 945.687L106.023 947.685ZM113.602 944.052C115.659 941.701 116.63 938.547 116.63 934.709L114.63 934.709C114.63 938.213 113.748 940.848 112.097 942.735L113.602 944.052ZM116.63 934.709C116.63 931.088 115.843 928.049 114.179 925.678L112.541 926.826C113.904 928.769 114.63 931.368 114.63 934.709L116.63 934.709ZM114.172 925.668C112.443 923.264 110.089 922.003 107.188 921.96L107.158 923.96C109.403 923.993 111.175 924.926 112.548 926.836L114.172 925.668ZM107.211 921.961C104.941 921.875 102.943 922.613 101.273 924.155L102.629 925.625C103.911 924.442 105.394 923.893 107.135 923.959L107.211 921.961ZM101.273 924.155C99.5866 925.712 98.2388 928.511 97.1311 932.331L99.0519 932.888C100.139 929.14 101.364 926.792 102.629 925.625L101.273 924.155ZM97.1277 932.343L94.4599 941.992L96.3876 942.525L99.0553 932.876L97.1277 932.343ZM94.4685 941.963C92.3636 948.762 89.4503 953.76 85.7871 957.053C82.144 960.328 77.6955 961.976 72.3791 961.976L72.3791 963.976C78.1498 963.976 83.0857 962.171 87.1242 958.54C91.1425 954.928 94.208 949.567 96.379 942.554L94.4685 941.963ZM72.3791 961.976C65.6304 961.976 60.1811 959.453 55.948 954.388L54.4134 955.671C59.0349 961.201 65.0511 963.976 72.3791 963.976L72.3791 961.976ZM55.9453 954.385C51.6513 949.29 49.483 942.981 49.483 935.39L47.483 935.39C47.483 943.39 49.7798 950.173 54.4161 955.674L55.9453 954.385ZM49.483 935.39C49.483 927.679 51.6361 921.437 55.8772 916.579L54.3707 915.264C49.7572 920.548 47.483 927.285 47.483 935.39L49.483 935.39ZM55.8772 916.579C60.0918 911.752 65.7633 909.316 73.0034 909.316L73.0034 907.316C65.2589 907.316 59.0106 909.95 54.3707 915.264L55.8772 916.579ZM72.0034 908.316L72.0034 925.287L74.0034 925.287L74.0034 908.316L72.0034 908.316ZM73.0034 924.287C70.0316 924.287 67.5576 925.29 65.6821 927.336L67.1564 928.687C68.6108 927.101 70.5263 926.287 73.0034 926.287L73.0034 924.287ZM65.6892 927.328C63.7974 929.349 62.9218 932.162 62.9218 935.617L64.9218 935.617C64.9218 932.488 65.7112 930.231 67.1493 928.695L65.6892 927.328ZM62.9218 935.617C62.9218 938.781 63.7257 941.487 65.3996 943.663L66.9848 942.443C65.6315 940.684 64.9218 938.433 64.9218 935.617L62.9218 935.617ZM65.3922 943.653C67.0461 945.858 69.2467 947.005 71.925 947.005L71.925 945.005C69.911 945.005 68.2898 944.183 66.9922 942.453L65.3922 943.653ZM71.925 947.005C74.1216 947.005 76.0174 946.164 77.5607 944.535C79.0765 942.935 80.2237 940.608 81.0607 937.649L79.1362 937.105C78.3462 939.898 77.3175 941.884 76.1088 943.16C74.9276 944.407 73.5502 945.005 71.925 945.005L71.925 947.005ZM81.0521 937.678L84.0604 928.142L82.1531 927.54L79.1448 937.076L81.0521 937.678ZM84.0677 928.118C86.1943 920.731 89.2139 915.345 93.0595 911.851C96.881 908.38 101.589 906.711 107.258 906.875L107.316 904.875C101.178 904.698 95.9531 906.521 91.7147 910.371C87.5003 914.2 84.333 919.967 82.1458 927.565L84.0677 928.118ZM107.277 906.875C110.987 906.911 114.283 907.746 117.188 909.36L118.159 907.612C114.934 905.82 111.306 904.914 107.296 904.875L107.277 906.875ZM117.196 909.365C120.127 910.956 122.463 913.063 124.222 915.684L125.883 914.57C123.934 911.667 121.351 909.345 118.151 907.607L117.196 909.365ZM124.226 915.69C126.018 918.322 127.393 921.272 128.35 924.546L130.27 923.985C129.258 920.523 127.796 917.381 125.879 914.564L124.226 915.69ZM128.351 924.549C129.306 927.783 129.785 931.168 129.785 934.709L131.785 934.709C131.785 930.985 131.281 927.408 130.269 923.982L128.351 924.549ZM129.785 934.709C129.785 943.191 127.53 949.962 123.102 955.116L124.619 956.419C129.424 950.826 131.785 943.558 131.785 934.709L129.785 934.709ZM123.107 955.11C118.648 960.221 112.966 962.771 105.981 962.771L105.981 964.771C113.527 964.771 119.764 961.984 124.614 956.425L123.107 955.11ZM49.3911 891.431L48.3911 891.431L48.3911 892.431L49.3911 892.431L49.3911 891.431ZM49.3911 874.119L49.3912 873.119L48.3912 873.119L48.3911 874.119L49.3911 874.119ZM110.749 850.62L111.481 849.938L111.476 849.933L110.749 850.62ZM49.3912 846.476L48.3912 846.476L48.3912 847.476L49.3912 847.476L49.3912 846.476ZM49.3912 829.392L49.3912 828.392L48.3912 828.392L48.3912 829.392L49.3912 829.392ZM116.539 833.762L116.002 834.606L116.007 834.609L116.539 833.762ZM127.039 845.114L127.929 844.658L127.928 844.656L127.039 845.114ZM127.039 875.708L127.928 876.167L127.932 876.158L127.039 875.708ZM116.539 887.117L117.071 887.964L117.075 887.961L116.539 887.117ZM100.873 890.431L49.3911 890.431L49.3911 892.431L100.873 892.431L100.873 890.431ZM50.3911 891.431L50.3911 874.119L48.3911 874.119L48.3911 891.431L50.3911 891.431ZM49.3911 875.119L100.873 875.119L100.873 873.119L49.3912 873.119L49.3911 875.119ZM100.873 875.119C105.137 875.119 108.7 873.658 111.476 870.719L110.022 869.345C107.652 871.855 104.63 873.119 100.873 873.119L100.873 875.119ZM111.476 870.719C114.224 867.809 115.609 864.328 115.609 860.326L113.609 860.326C113.609 863.817 112.42 866.806 110.022 869.345L111.476 870.719ZM115.609 860.326C115.609 856.36 114.223 852.882 111.481 849.938L110.017 851.302C112.422 853.883 113.609 856.876 113.609 860.326L115.609 860.326ZM111.476 849.933C108.667 846.961 105.107 845.476 100.873 845.476L100.873 847.476C104.585 847.476 107.61 848.754 110.022 851.307L111.476 849.933ZM100.873 845.476L49.3912 845.476L49.3912 847.476L100.873 847.476L100.873 845.476ZM50.3912 846.476L50.3912 829.392L48.3912 829.392L48.3912 846.476L50.3912 846.476ZM49.3912 830.392L100.873 830.392L100.873 828.392L49.3912 828.392L49.3912 830.392ZM100.873 830.392C106.564 830.392 111.597 831.802 116.002 834.606L117.076 832.919C112.323 829.894 106.912 828.392 100.873 828.392L100.873 830.392ZM116.007 834.609C120.438 837.392 123.813 841.044 126.151 845.573L127.928 844.656C125.422 839.8 121.797 835.884 117.071 832.915L116.007 834.609ZM126.149 845.57C128.457 850.076 129.615 854.99 129.615 860.326L131.615 860.326C131.615 854.689 130.389 849.461 127.929 844.658L126.149 845.57ZM129.615 860.326C129.615 865.701 128.457 870.674 126.146 875.258L127.932 876.158C130.39 871.282 131.615 866 131.615 860.326L129.615 860.326ZM126.151 875.249C123.812 879.78 120.436 883.452 116.002 886.273L117.075 887.961C121.799 884.955 125.423 881.021 127.928 876.167L126.151 875.249ZM116.007 886.27C111.601 889.037 106.566 890.431 100.873 890.431L100.873 892.431C106.91 892.431 112.319 890.948 117.071 887.964L116.007 886.27ZM105.981 814.55L104.981 814.55L104.981 815.55L105.981 815.55L105.981 814.55ZM105.981 797.465L105.94 796.466L104.981 796.506L104.981 797.465L105.981 797.465ZM112.849 794.173L113.596 794.838L113.602 794.831L112.849 794.173ZM113.36 777.031L114.179 776.457L114.172 776.447L113.36 777.031ZM107.173 773.739L107.135 774.739L107.147 774.739L107.158 774.739L107.173 773.739ZM98.0915 783.389L97.131 783.11L97.1277 783.122L98.0915 783.389ZM95.4238 793.038L96.3791 793.333L96.3836 793.319L96.3876 793.304L95.4238 793.038ZM55.1807 805.809L55.9481 805.168L55.9454 805.164L55.1807 805.809ZM73.0035 759.095L74.0035 759.095L74.0035 758.095L73.0035 758.095L73.0035 759.095ZM73.0035 776.066L73.0035 777.066L74.0035 777.066L74.0035 776.066L73.0035 776.066ZM66.4193 778.791L67.1493 779.474L67.1564 779.467L66.4193 778.791ZM66.1922 793.832L66.9923 793.232L66.9849 793.223L66.1922 793.832ZM80.0985 788.156L79.1448 787.856L79.1403 787.87L79.1363 787.884L80.0985 788.156ZM83.1068 778.621L84.0605 778.921L84.0643 778.909L84.0678 778.897L83.1068 778.621ZM107.287 756.654L107.258 757.654L107.267 757.654L107.277 757.654L107.287 756.654ZM117.674 759.265L117.188 760.14L117.197 760.144L117.674 759.265ZM125.053 765.906L124.222 766.464L124.226 766.469L125.053 765.906ZM129.31 775.045L128.35 775.325L128.351 775.328L129.31 775.045ZM123.861 806.547L124.614 807.204L124.619 807.198L123.861 806.547ZM106.981 814.55L106.981 797.465L104.981 797.465L104.981 814.55L106.981 814.55ZM106.023 798.464C109.025 798.339 111.566 797.117 113.596 794.838L112.103 793.508C110.424 795.392 108.387 796.364 105.94 796.466L106.023 798.464ZM113.602 794.831C115.659 792.481 116.63 789.326 116.63 785.489L114.63 785.489C114.63 788.992 113.748 791.627 112.097 793.514L113.602 794.831ZM116.63 785.489C116.63 781.867 115.843 778.829 114.179 776.457L112.542 777.606C113.904 779.548 114.63 782.148 114.63 785.489L116.63 785.489ZM114.172 776.447C112.443 774.043 110.089 772.782 107.188 772.739L107.158 774.739C109.403 774.772 111.175 775.706 112.548 777.615L114.172 776.447ZM107.211 772.74C104.941 772.654 102.943 773.393 101.273 774.934L102.63 776.404C103.911 775.221 105.394 774.673 107.135 774.739L107.211 772.74ZM101.273 774.934C99.5866 776.491 98.2389 779.29 97.1311 783.11L99.052 783.667C100.139 779.919 101.364 777.572 102.63 776.404L101.273 774.934ZM97.1277 783.122L94.46 792.771L96.3876 793.304L99.0554 783.655L97.1277 783.122ZM94.4685 792.742C92.3636 799.541 89.4504 804.539 85.7871 807.832C82.144 811.107 77.6956 812.755 72.3791 812.755L72.3791 814.755C78.1498 814.755 83.0857 812.95 87.1242 809.32C91.1425 805.707 94.208 800.346 96.3791 793.333L94.4685 792.742ZM72.3791 812.755C65.6304 812.755 60.1811 810.233 55.948 805.168L54.4134 806.45C59.0349 811.98 65.0512 814.755 72.3791 814.755L72.3791 812.755ZM55.9454 805.164C51.6513 800.07 49.483 793.76 49.483 786.17L47.483 786.17C47.483 794.169 49.7799 800.953 54.4161 806.453L55.9454 805.164ZM49.483 786.17C49.483 778.458 51.6361 772.216 55.8772 767.359L54.3707 766.043C49.7572 771.327 47.483 778.064 47.483 786.17L49.483 786.17ZM55.8772 767.359C60.0919 762.532 65.7633 760.095 73.0035 760.095L73.0035 758.095C65.2589 758.095 59.0107 760.729 54.3707 766.043L55.8772 767.359ZM72.0035 759.095L72.0035 776.066L74.0035 776.066L74.0035 759.095L72.0035 759.095ZM73.0035 775.066C70.0317 775.066 67.5577 776.069 65.6821 778.115L67.1564 779.467C68.6108 777.88 70.5263 777.066 73.0035 777.066L73.0035 775.066ZM65.6893 778.107C63.7974 780.128 62.9218 782.942 62.9218 786.397L64.9218 786.397C64.9218 783.268 65.7112 781.01 67.1493 779.474L65.6893 778.107ZM62.9218 786.397C62.9218 789.56 63.7257 792.266 65.3996 794.442L66.9849 793.223C65.6315 791.463 64.9218 789.212 64.9218 786.397L62.9218 786.397ZM65.3922 794.432C67.0462 796.638 69.2468 797.784 71.925 797.784L71.925 795.784C69.9111 795.784 68.2898 794.963 66.9922 793.232L65.3922 794.432ZM71.925 797.784C74.1216 797.784 76.0174 796.944 77.5607 795.315C79.0765 793.715 80.2237 791.387 81.0608 788.429L79.1363 787.884C78.3462 790.677 77.3176 792.663 76.1088 793.939C74.9277 795.186 73.5503 795.784 71.925 795.784L71.925 797.784ZM81.0522 788.457L84.0605 778.921L82.1531 778.32L79.1448 787.856L81.0522 788.457ZM84.0678 778.897C86.1944 771.51 89.214 766.124 93.0595 762.631C96.8811 759.159 101.589 757.49 107.258 757.654L107.316 755.655C101.178 755.478 95.9532 757.3 91.7147 761.15C87.5004 764.979 84.333 770.746 82.1458 778.344L84.0678 778.897ZM107.277 757.654C110.987 757.691 114.283 758.526 117.188 760.14L118.16 758.391C114.934 756.6 111.306 755.694 107.297 755.654L107.277 757.654ZM117.197 760.144C120.127 761.736 122.463 763.842 124.222 766.464L125.883 765.349C123.934 762.446 121.351 760.125 118.151 758.387L117.197 760.144ZM124.226 766.469C126.018 769.101 127.393 772.051 128.35 775.325L130.27 774.764C129.258 771.303 127.796 768.16 125.879 765.344L124.226 766.469ZM128.351 775.328C129.306 778.562 129.785 781.947 129.785 785.489L131.785 785.489C131.785 781.765 131.281 778.188 130.269 774.761L128.351 775.328ZM129.785 785.489C129.785 793.97 127.53 800.741 123.102 805.895L124.619 807.198C129.424 801.606 131.785 794.338 131.785 785.489L129.785 785.489ZM123.107 805.889C118.648 811.001 112.966 813.55 105.981 813.55L105.981 815.55C113.527 815.55 119.764 812.764 124.614 807.204L123.107 805.889Z"
                        fill="#39373E"/>
                    <path
                        d="M129.48 628.652L129.132 629.59L130.48 630.09L130.48 628.652L129.48 628.652ZM49.391 598.91L48.391 598.91L48.391 599.605L49.0429 599.847L49.391 598.91ZM49.391 580.406L49.0441 579.468L48.391 579.71L48.391 580.406L49.391 580.406ZM129.48 550.777L130.48 550.777L130.48 549.341L129.133 549.839L129.48 550.777ZM129.48 568.713L129.828 569.651L130.48 569.409L130.48 568.713L129.48 568.713ZM110.522 575.752L110.174 574.814L109.522 575.056L109.522 575.752L110.522 575.752ZM110.522 603.451L109.522 603.451L109.522 604.144L110.171 604.387L110.522 603.451ZM129.48 610.546L130.48 610.546L130.48 609.852L129.83 609.609L129.48 610.546ZM95.7642 597.888L95.4828 598.848L96.7642 599.224L96.7642 597.888L95.7642 597.888ZM95.7642 581.257L96.7642 581.257L96.7642 579.909L95.4738 580.3L95.7642 581.257ZM67.8949 589.715L67.6045 588.758L64.3973 589.731L67.6135 590.674L67.8949 589.715ZM129.828 627.715L49.7392 597.972L49.0429 599.847L129.132 629.59L129.828 627.715ZM50.391 598.91L50.391 580.406L48.391 580.406L48.391 598.91L50.391 598.91ZM49.738 581.344L129.827 551.715L129.133 549.839L49.0441 579.468L49.738 581.344ZM128.48 550.777L128.48 568.713L130.48 568.713L130.48 550.777L128.48 550.777ZM129.132 567.776L110.174 574.814L110.87 576.689L129.828 569.651L129.132 567.776ZM109.522 575.752L109.522 603.451L111.522 603.451L111.522 575.752L109.522 575.752ZM110.171 604.387L129.129 611.482L129.83 609.609L110.872 602.514L110.171 604.387ZM128.48 610.546L128.48 628.652L130.48 628.652L130.48 610.546L128.48 610.546ZM96.7642 597.888L96.7642 581.257L94.7642 581.257L94.7642 597.888L96.7642 597.888ZM95.4738 580.3L67.6045 588.758L68.1853 590.672L96.0546 582.214L95.4738 580.3ZM67.6135 590.674L95.4828 598.848L96.0457 596.929L68.1763 588.755L67.6135 590.674ZM129.48 540.76L129.48 541.76L130.48 541.76L130.48 540.76L129.48 540.76ZM49.3911 540.76L48.3911 540.76L48.3911 541.76L49.3911 541.76L49.3911 540.76ZM49.3911 523.789L49.3911 522.789L48.3911 522.789L48.3911 523.789L49.3911 523.789ZM129.48 523.789L130.48 523.789L130.48 522.789L129.48 522.789L129.48 523.789ZM129.48 539.76L49.3911 539.76L49.3911 541.76L129.48 541.76L129.48 539.76ZM50.3911 540.76L50.3911 523.789L48.3911 523.789L48.3911 540.76L50.3911 540.76ZM49.3911 524.789L129.48 524.789L129.48 522.789L49.3911 522.789L49.3911 524.789ZM128.48 523.789L128.48 540.76L130.48 540.76L130.48 523.789L128.48 523.789ZM129.48 503.839L129.48 504.839L130.48 504.839L130.48 503.839L129.48 503.839ZM49.3911 503.839L48.3911 503.839L48.3911 504.839L49.3911 504.839L49.3911 503.839ZM49.3911 488.286L48.8936 487.419L48.3911 487.707L48.3911 488.286L49.3911 488.286ZM97.2968 460.814L97.7943 461.682L101.051 459.814L97.2968 459.814L97.2968 460.814ZM49.3911 460.814L48.3911 460.814L48.3911 461.814L49.3911 461.814L49.3911 460.814ZM49.3911 443.729L49.3911 442.729L48.3911 442.729L48.3911 443.729L49.3911 443.729ZM129.48 443.729L130.48 443.729L130.48 442.729L129.48 442.729L129.48 443.729ZM129.48 458.998L129.978 459.865L130.48 459.576L130.48 458.998L129.48 458.998ZM81.0066 486.867L80.5081 486L77.261 487.867L81.0066 487.867L81.0066 486.867ZM129.48 486.867L130.48 486.867L130.48 485.867L129.48 485.867L129.48 486.867ZM129.48 502.839L49.3911 502.839L49.3911 504.839L129.48 504.839L129.48 502.839ZM50.3911 503.839L50.3911 488.286L48.3911 488.286L48.3911 503.839L50.3911 503.839ZM49.8885 489.154L97.7943 461.682L96.7993 459.947L48.8936 487.419L49.8885 489.154ZM97.2968 459.814L49.3911 459.814L49.3911 461.814L97.2968 461.814L97.2968 459.814ZM50.3911 460.814L50.3911 443.729L48.3911 443.729L48.3911 460.814L50.3911 460.814ZM49.3911 444.729L129.48 444.729L129.48 442.729L49.3911 442.729L49.3911 444.729ZM128.48 443.729L128.48 458.998L130.48 458.998L130.48 443.729L128.48 443.729ZM128.981 458.131L80.5081 486L81.505 487.734L129.978 459.865L128.981 458.131ZM81.0066 487.867L129.48 487.867L129.48 485.867L81.0066 485.867L81.0066 487.867ZM128.48 486.867L128.48 503.839L130.48 503.839L130.48 486.867L128.48 486.867ZM129.48 433.883L129.132 434.82L130.48 435.321L130.48 433.883L129.48 433.883ZM49.3911 404.14L48.3911 404.14L48.3911 404.836L49.043 405.078L49.3911 404.14ZM49.3911 385.636L49.0441 384.698L48.3911 384.94L48.3911 385.636L49.3911 385.636ZM129.48 356.007L130.48 356.007L130.48 354.571L129.133 355.07L129.48 356.007ZM129.48 373.944L129.828 374.881L130.48 374.639L130.48 373.944L129.48 373.944ZM110.522 380.982L110.174 380.044L109.522 380.287L109.522 380.982L110.522 380.982ZM110.522 408.681L109.522 408.681L109.522 409.374L110.171 409.618L110.522 408.681ZM129.48 415.776L130.48 415.776L130.48 415.083L129.83 414.84L129.48 415.776ZM95.7643 403.118L95.4829 404.078L96.7643 404.454L96.7643 403.118L95.7643 403.118ZM95.7643 386.488L96.7643 386.488L96.7643 385.139L95.4739 385.531L95.7643 386.488ZM67.895 394.945L67.6046 393.988L64.3974 394.961L67.6135 395.905L67.895 394.945ZM129.828 432.945L49.7392 403.203L49.043 405.078L129.132 434.82L129.828 432.945ZM50.3911 404.14L50.3911 385.636L48.3911 385.636L48.3911 404.14L50.3911 404.14ZM49.7381 386.574L129.827 356.945L129.133 355.07L49.0441 384.698L49.7381 386.574ZM128.48 356.007L128.48 373.944L130.48 373.944L130.48 356.007L128.48 356.007ZM129.132 373.006L110.174 380.044L110.87 381.919L129.828 374.881L129.132 373.006ZM109.522 380.982L109.522 408.681L111.522 408.681L111.522 380.982L109.522 380.982ZM110.171 409.618L129.129 416.713L129.83 414.84L110.872 407.744L110.171 409.618ZM128.48 415.776L128.48 433.883L130.48 433.883L130.48 415.776L128.48 415.776ZM96.7643 403.118L96.7643 386.488L94.7643 386.488L94.7643 403.118L96.7643 403.118ZM95.4739 385.531L67.6046 393.988L68.1854 395.902L96.0547 387.445L95.4739 385.531ZM67.6135 395.905L95.4829 404.078L96.0457 402.159L68.1764 393.985L67.6135 395.905ZM129.48 345.99L129.48 346.99L130.48 346.99L130.48 345.99L129.48 345.99ZM49.3911 345.99L48.3911 345.99L48.3911 346.99L49.3911 346.99L49.3911 345.99ZM55.4077 296.666L56.1371 297.35L56.1401 297.347L55.4077 296.666ZM80.3823 292.863L79.8461 293.707L79.8492 293.709L80.3823 292.863ZM86.6827 301.15L85.7479 301.505L86.8692 304.456L87.6515 301.398L86.6827 301.15ZM94.0047 289.911L94.5884 290.723L94.5924 290.72L94.0047 289.911ZM122.385 293.033L121.683 293.746L121.684 293.746L122.385 293.033ZM114.495 328.905L114.495 329.905L115.495 329.905L115.495 328.905L114.495 328.905ZM111.544 306.201L112.153 305.409L112.146 305.403L111.544 306.201ZM97.978 306.315L98.6046 307.094L98.6137 307.087L97.978 306.315ZM95.0832 328.905L94.0832 328.905L94.0832 329.905L95.0832 329.905L95.0832 328.905ZM81.0066 328.905L81.0066 329.905L82.0066 329.905L82.0066 328.905L81.0066 328.905ZM66.6463 310.061L67.2939 310.823L67.2994 310.818L67.3048 310.814L66.6463 310.061ZM64.3758 328.905L63.3758 328.905L63.3758 329.905L64.3758 329.905L64.3758 328.905ZM129.48 344.99L49.3911 344.99L49.3911 346.99L129.48 346.99L129.48 344.99ZM50.3911 345.99L50.3911 313.921L48.3911 313.921L48.3911 345.99L50.3911 345.99ZM50.3911 313.921C50.3911 306.885 52.3382 301.399 56.1371 297.35L54.6784 295.981C50.4551 300.484 48.3911 306.501 48.3911 313.921L50.3911 313.921ZM56.1401 297.347C59.9307 293.27 65.0773 291.195 71.6979 291.195L71.6979 289.195C64.6205 289.195 58.9069 291.434 54.6754 295.985L56.1401 297.347ZM71.6979 291.195C74.477 291.195 77.1881 292.019 79.8461 293.707L80.9184 292.019C77.9761 290.15 74.8976 289.195 71.6979 289.195L71.6979 291.195ZM79.8492 293.709C82.3876 295.308 84.3682 297.874 85.7479 301.505L87.6174 300.794C86.1213 296.857 83.9016 293.898 80.9154 292.017L79.8492 293.709ZM87.6515 301.398C88.8498 296.713 91.1705 293.18 94.5884 290.723L93.4211 289.099C89.5737 291.864 87.013 295.824 85.7139 300.902L87.6515 301.398ZM94.5924 290.72C98.0511 288.208 101.501 286.995 104.96 286.995L104.96 284.995C101.001 284.995 97.148 286.392 93.4171 289.102L94.5924 290.72ZM104.96 286.995C111.553 286.995 117.108 289.242 121.683 293.746L123.086 292.32C118.126 287.439 112.064 284.995 104.96 284.995L104.96 286.995ZM121.684 293.746C126.191 298.181 128.48 304.095 128.48 311.594L130.48 311.594C130.48 303.654 128.039 297.193 123.086 292.32L121.684 293.746ZM128.48 311.594L128.48 345.99L130.48 345.99L130.48 311.594L128.48 311.594ZM115.495 328.905L115.495 312.502L113.495 312.502L113.495 328.905L115.495 328.905ZM115.495 312.502C115.495 309.534 114.39 307.129 112.153 305.409L110.934 306.994C112.633 308.301 113.495 310.096 113.495 312.502L115.495 312.502ZM112.146 305.403C109.96 303.753 107.438 302.931 104.619 302.931L104.619 304.931C107.022 304.931 109.116 305.622 110.941 307L112.146 305.403ZM104.619 302.931C101.889 302.931 99.451 303.806 97.3423 305.543L98.6137 307.087C100.365 305.645 102.354 304.931 104.619 304.931L104.619 302.931ZM97.3514 305.535C95.1526 307.303 94.0832 309.784 94.0832 312.842L96.0832 312.842C96.0832 310.3 96.9436 308.429 98.6045 307.094L97.3514 305.535ZM94.0832 312.842L94.0832 328.905L96.0832 328.905L96.0832 312.842L94.0832 312.842ZM95.0832 329.905L114.495 329.905L114.495 327.905L95.0832 327.905L95.0832 329.905ZM82.0066 328.905L82.0066 315.567L80.0066 315.567L80.0066 328.905L82.0066 328.905ZM82.0066 315.567C82.0066 313.105 81.1226 311.032 79.3494 309.432L78.0095 310.917C79.3392 312.117 80.0066 313.639 80.0066 315.567L82.0066 315.567ZM79.3494 309.432C77.5883 307.843 75.3705 307.074 72.7764 307.074L72.7764 309.074C74.9501 309.074 76.6677 309.706 78.0095 310.917L79.3494 309.432ZM72.7764 307.074C70.0306 307.074 67.73 307.784 65.9878 309.308L67.3048 310.814C68.5898 309.689 70.3759 309.074 72.7764 309.074L72.7764 307.074ZM65.9986 309.299C64.2094 310.82 63.3759 313.003 63.3759 315.68L65.3759 315.68C65.3759 313.438 66.0559 311.875 67.2939 310.823L65.9986 309.299ZM63.3759 315.68L63.3758 328.905L65.3758 328.905L65.3759 315.68L63.3759 315.68ZM64.3758 329.905L81.0066 329.905L81.0066 327.905L64.3758 327.905L64.3758 329.905ZM129.48 270.812L129.48 271.812L130.48 271.812L130.48 270.812L129.48 270.812ZM49.3911 270.812L48.3911 270.812L48.3911 271.812L49.3911 271.812L49.3911 270.812ZM49.3911 253.841L49.3911 252.841L48.3911 252.841L48.3911 253.841L49.3911 253.841ZM129.48 253.841L130.48 253.841L130.48 252.841L129.48 252.841L129.48 253.841ZM129.48 269.812L49.3911 269.812L49.3911 271.812L129.48 271.812L129.48 269.812ZM50.3911 270.812L50.3911 253.841L48.3911 253.841L48.3911 270.812L50.3911 270.812ZM49.3911 254.841L129.48 254.841L129.48 252.841L49.3911 252.841L49.3911 254.841ZM128.48 253.841L128.48 270.812L130.48 270.812L130.48 253.841L128.48 253.841ZM129.48 233.891L129.48 234.891L130.48 234.891L130.48 233.891L129.48 233.891ZM49.3911 233.891L48.3911 233.891L48.3911 234.891L49.3911 234.891L49.3911 233.891ZM49.3912 216.806L49.3912 215.806L48.3912 215.806L48.3912 216.806L49.3912 216.806ZM114.495 216.806L114.495 217.806L115.495 217.806L115.495 216.806L114.495 216.806ZM114.495 186.837L114.495 185.837L113.495 185.837L113.495 186.837L114.495 186.837ZM129.48 186.837L130.48 186.837L130.48 185.837L129.48 185.837L129.48 186.837ZM129.48 232.891L49.3912 232.891L49.3911 234.891L129.48 234.891L129.48 232.891ZM50.3911 233.891L50.3912 216.806L48.3912 216.806L48.3911 233.891L50.3911 233.891ZM49.3912 217.806L114.495 217.806L114.495 215.806L49.3912 215.806L49.3912 217.806ZM115.495 216.806L115.495 186.837L113.495 186.837L113.495 216.806L115.495 216.806ZM114.495 187.837L129.48 187.837L129.48 185.837L114.495 185.837L114.495 187.837ZM128.48 186.837L128.48 233.891L130.48 233.891L130.48 186.837L128.48 186.837ZM129.48 173.357L129.48 174.357L130.48 174.357L130.48 173.357L129.48 173.357ZM49.3912 173.357L48.3912 173.357L48.3912 174.357L49.3912 174.357L49.3912 173.357ZM49.3912 156.386L49.3912 155.386L48.3912 155.386L48.3912 156.386L49.3912 156.386ZM129.48 156.386L130.48 156.386L130.48 155.386L129.48 155.386L129.48 156.386ZM129.48 172.357L49.3912 172.357L49.3912 174.357L129.48 174.357L129.48 172.357ZM50.3912 173.357L50.3912 156.386L48.3912 156.386L48.3912 173.357L50.3912 173.357ZM49.3912 157.386L129.48 157.386L129.48 155.386L49.3912 155.386L49.3912 157.386ZM128.48 156.386L128.48 173.357L130.48 173.357L130.48 156.386L128.48 156.386ZM64.7165 142.623L64.7165 143.623L65.7165 143.623L65.7165 142.623L64.7165 142.623ZM49.3912 142.623L48.3912 142.623L48.3912 143.623L49.3912 143.623L49.3912 142.623ZM49.3912 82.1729L49.3912 81.1729L48.3912 81.1729L48.3912 82.1729L49.3912 82.1729ZM64.7165 82.1729L65.7165 82.1729L65.7165 81.1729L64.7165 81.1729L64.7165 82.1729ZM64.7165 103.799L63.7165 103.799L63.7165 104.799L64.7165 104.799L64.7165 103.799ZM129.48 103.799L130.48 103.799L130.48 102.799L129.48 102.799L129.48 103.799ZM129.48 120.997L129.48 121.997L130.48 121.997L130.48 120.997L129.48 120.997ZM64.7165 120.997L64.7165 119.997L63.7165 119.997L63.7165 120.997L64.7165 120.997ZM64.7165 141.623L49.3912 141.623L49.3912 143.623L64.7165 143.623L64.7165 141.623ZM50.3912 142.623L50.3912 82.1729L48.3912 82.1729L48.3912 142.623L50.3912 142.623ZM49.3912 83.1729L64.7165 83.1729L64.7165 81.1729L49.3912 81.1729L49.3912 83.1729ZM63.7165 82.1729L63.7165 103.799L65.7165 103.799L65.7165 82.1729L63.7165 82.1729ZM64.7165 104.799L129.48 104.799L129.48 102.799L64.7165 102.799L64.7165 104.799ZM128.48 103.799L128.48 120.997L130.48 120.997L130.48 103.799L128.48 103.799ZM129.48 119.997L64.7165 119.997L64.7165 121.997L129.48 121.997L129.48 119.997ZM63.7165 120.997L63.7165 142.623L65.7165 142.623L65.7165 120.997L63.7165 120.997ZM49.3912 79.4779L48.3912 79.4779L48.3912 81.408L49.9679 80.2949L49.3912 79.4779ZM49.3912 59.2145L48.8498 58.3737L48.3912 58.669L48.3912 59.2145L49.3912 59.2145ZM79.3607 39.916L79.9021 40.7567L81.2001 39.9209L79.9065 39.0781L79.3607 39.916ZM49.3912 20.3904L48.3912 20.3904L48.3912 20.9324L48.8453 21.2283L49.3912 20.3904ZM49.3912 0.183731L49.9674 -0.633652L48.3912 -1.74468L48.3912 0.18373L49.3912 0.183731ZM93.4372 31.2317L92.8611 32.049L93.1202 32.2317L93.4372 32.2317L93.4372 31.2317ZM129.48 31.2317L130.48 31.2317L130.48 30.2317L129.48 30.2317L129.48 31.2317ZM129.48 48.5436L129.48 49.5436L130.48 49.5436L130.48 48.5436L129.48 48.5436ZM93.2102 48.5435L93.2102 47.5435L92.8928 47.5435L92.6335 47.7266L93.2102 48.5435ZM50.3912 79.4779L50.3912 59.2145L48.3912 59.2145L48.3912 79.4779L50.3912 79.4779ZM49.9326 60.0553L79.9021 40.7567L78.8193 39.0752L48.8498 58.3737L49.9326 60.0553ZM79.9065 39.0781L49.9371 19.5526L48.8453 21.2283L78.8148 40.7538L79.9065 39.0781ZM50.3912 20.3904L50.3912 0.183731L48.3912 0.18373L48.3912 20.3904L50.3912 20.3904ZM48.8151 1.00105L92.8611 32.049L94.0134 30.4143L49.9674 -0.633652L48.8151 1.00105ZM93.4372 32.2317L129.48 32.2317L129.48 30.2317L93.4372 30.2317L93.4372 32.2317ZM128.48 31.2317L128.48 48.5436L130.48 48.5436L130.48 31.2317L128.48 31.2317ZM129.48 47.5436L93.2102 47.5435L93.2102 49.5435L129.48 49.5436L129.48 47.5436ZM92.6335 47.7266L48.8145 78.661L49.9679 80.2949L93.7869 49.3605L92.6335 47.7266Z"
                        fill="#39373E"/>
                    <path
                        d="M59.2467 668.236H58.2467V669.236H59.2467V668.236ZM59.2467 652.911V651.911H58.2467V652.911H59.2467ZM119.696 652.911H120.696V651.911H119.696V652.911ZM119.696 668.236V669.236H120.696V668.236H119.696ZM98.0707 668.236V667.236H97.0707V668.236H98.0707ZM98.0707 733V734H99.0707V733H98.0707ZM80.8724 733H79.8724V734H80.8724V733ZM80.8724 668.236H81.8724V667.236H80.8724V668.236ZM60.2467 668.236L60.2467 652.911H58.2467L58.2467 668.236H60.2467ZM59.2467 653.911H119.696V651.911H59.2467V653.911ZM118.696 652.911V668.236H120.696V652.911H118.696ZM119.696 667.236H98.0707V669.236H119.696V667.236ZM97.0707 668.236L97.0707 733H99.0707L99.0707 668.236H97.0707ZM98.0707 732H80.8724V734H98.0707V732ZM81.8724 733L81.8724 668.236H79.8724L79.8724 733H81.8724ZM80.8724 667.236H59.2467V669.236H80.8724V667.236Z"
                        fill="#39373E"/>
                </svg>
            </GridItem>


            <GridItem gridColumn={{base: 'span 12', md: 'span 10'}}>
                <Text textTransform={'uppercase'} fontWeight={'bold'} color={'basic.500'} fontSize={{base: 35, md: 70}}
                      letterSpacing={'0.05em'}>
                    Express <Text as={'span'} ml={10} position={'relative'} color={'alert'}>
                    yourself

                    <Box position={'absolute'} top={'-25%'} left={'-10%'}>

                        <Border/>
                    </Box>

                </Text> ,
                </Text>

                <Text textAlign={'right'} textTransform={'uppercase'} fontWeight={'bold'} color={'basic.500'}
                      fontSize={{base: 35, md: 70}} letterSpacing={'0.05em'}>
                    no guilt needed.
                </Text>


                <Grid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)'}} gridGap={'32px'} lineHeight={'24px'} mt={{base: '30px', md: '60px'}}
                      color={'basic.500'}>
                    <Text>
                        The fashion industry we know and love is unsustainable. By that, we mean normal fashion
                        manufacturing takes so much more than it gives that the planet's resources can't sustain
                        continuing. Sure, some brands sell a few organic cotton shirts, or manufacture in developed
                        countries. But growing that organic cotton still took about 3,000 liters of water, its dye waste
                        was probably dumped straight into waterways, and even apparel production in wealthy nations is
                        found to operate in sweatshops with illegal wages.
                    </Text>
                    <Text>
                        The perfect solution is to not buy anything at all, but nudity is chilly and frowned upon. The
                        best sustainable brands encourage you to buy less, because even manufacturing something good has
                        an impact. Their products are meant to last a lifetime and that’s amazing. But sometimes you
                        want to express who you are today and not a decade from now.
                    </Text>
                </Grid>


                <Flex bg={'primary.500'} mx={{base: '-17px', md: 0}} mt={'60px'} px={{base: '30px', md: '99px'}} py={'60px'} flexDirection={'column'} color={'white'}
                      alignItems={'center'}>
                    <Text fontSize={26}>
                        Enter virtual fashion. We make art that you can wear on social media, but we don't manufacture
                        it. Each design is a limited-edition, never-re-released NFT. You own it (not us!) and can even
                        resell it, and save some wardrobe space too.
                    </Text>

                    <a href={Routes.main}>
                        <Button mt={'32px'} color={'primary.500'} bg={'white'} w={'270px'}>
                            Go To Shoping
                        </Button>
                    </a>
                </Flex>


                <Grid templateColumns={'repeat(12,1fr)'} mt={'80px'}>
                    <GridItem  gridColumn={{base: 'span 12', md: 'span 6'}}>
                        <Text fontSize={25} letterSpacing={'0.02em'} fontWeight={'bold'} textTransform={'uppercase'}>But
                            what about digital waste?</Text>

                        <Text mt={'24px'} lineHeight={'24px'}>Great question, you sustainability pro. Both 3D modeling
                            virtual clothes and traditional
                            blockchain transactions a f***load of electricity. To address this, we create our designs on
                            the eco-friendly Polygon blockchain, which uses significantly less electricity than older
                            blockchains like Bitcoin. We are working on offsetting more of our 3D design impact, our
                            goal is to run on 100% renewables ASAP. In the meantime, we give 1% of everything we earn to
                            carbon removal projects through the Stripe Climate program.
                        </Text>

                        <a href={Routes.main}>
                            <Button  mt={'40px'}>Go to shopping</Button>
                        </a>
                    </GridItem>
                    <GridItem  gridColumn={{base: 'span 12', md: 'span 5'}}>
                        <Box display={'flex'} justifyContent={'center'} mt={'20px'}>
                            <Image
                                width={'260px'}
                                src={'/blockchain.png'}
                            />
                        </Box>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
}

function Border() {
    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)



    return (
        <svg width={isLargerThanMd ? 434 : (434 / 2)}  viewBox="0 0 434 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M138.996 2C34.631 10.8907 -2.18235 57.715 2.37176 90.9069C8.06441 132.397 213 129.433 269.926 126.47C326.853 123.506 442.603 114.615 431.218 80.5344C419.832 46.4534 254.746 -15.7814 95.3521 27.1903"
                stroke="#7B61FF" strokeWidth="3"/>
        </svg>
    )
}