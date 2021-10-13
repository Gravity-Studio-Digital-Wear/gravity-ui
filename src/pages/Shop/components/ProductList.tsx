import * as React from 'react';
import {observer} from "mobx-react";
import {Box} from "@chakra-ui/react";
import {ChessListView} from "./ChessListView";


export const ProductList = observer(function ProductList() {
    const clothingText = (
        <Box position={'absolute'} top={0} left={0}>
            <svg width="166" height="624" viewBox="0 0 166 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M68.9735 613.552L68.4869 614.425L68.4887 614.426L68.9735 613.552ZM53.0806 559.289L53.9656 559.754L53.968 559.75L53.0806 559.289ZM65.4543 545.212L66.2785 544.646L65.7144 543.825L64.8914 544.386L65.4543 545.212ZM74.9333 559.005L75.497 559.831L76.3257 559.265L75.7575 558.438L74.9333 559.005ZM67.3274 567.405L68.2016 567.891L68.2057 567.884L67.3274 567.405ZM71.8115 595.104L71.1397 595.845L71.14 595.845L71.8115 595.104ZM107.4 595.104L108.072 595.845L108.078 595.84L107.4 595.104ZM111.6 567.178L110.732 567.673L110.734 567.678L111.6 567.178ZM103.541 558.551L102.72 557.979L102.135 558.819L102.988 559.384L103.541 558.551ZM113.076 544.872L113.626 544.036L112.812 543.501L112.256 544.3L113.076 544.872ZM125.904 559.062L125.021 559.531L125.023 559.534L125.904 559.062ZM127.38 594.423L128.295 594.826L128.298 594.82L127.38 594.423ZM118.582 607.251L119.278 607.969L118.582 607.251ZM105.527 615.708L105.903 616.635L105.909 616.633L105.527 615.708ZM89.6342 617.773C82.3038 617.773 75.5848 616.072 69.4582 612.677L68.4887 614.426C74.9251 617.993 81.9799 619.773 89.6342 619.773L89.6342 617.773ZM69.46 612.678C63.2935 609.244 58.4277 604.525 54.8481 598.509L53.1294 599.532C56.8908 605.853 62.0148 610.821 68.4869 614.425L69.46 612.678ZM54.8481 598.509C51.2738 592.503 49.483 585.851 49.483 578.53L47.483 578.53C47.483 586.195 49.3627 593.203 53.1294 599.532L54.8481 598.509ZM49.483 578.53C49.483 571.682 50.9808 565.429 53.9656 559.754L52.1955 558.823C49.0502 564.803 47.483 571.378 47.483 578.53L49.483 578.53ZM53.968 559.75C56.9221 554.063 60.9375 549.499 66.0173 546.039L64.8914 544.386C59.5273 548.039 55.2936 552.859 52.1932 558.828L53.968 559.75ZM64.6302 545.778L74.1092 559.571L75.7575 558.438L66.2785 544.646L64.6302 545.778ZM74.3697 558.179C71.0229 560.463 68.3795 563.382 66.4492 566.927L68.2057 567.884C69.9837 564.618 72.4109 561.937 75.497 559.831L74.3697 558.179ZM66.4533 566.92C64.4762 570.478 63.4894 574.355 63.4894 578.53L65.4894 578.53C65.4894 574.684 66.3946 571.144 68.2016 567.891L66.4533 566.92ZM63.4894 578.53C63.4894 585.433 66.0481 591.227 71.1397 595.845L72.4833 594.364C67.8121 590.127 65.4894 584.872 65.4894 578.53L63.4894 578.53ZM71.14 595.845C76.1823 600.415 82.3685 602.689 89.6342 602.689L89.6342 600.689C82.8234 600.689 77.1278 598.573 72.483 594.363L71.14 595.845ZM89.6342 602.689C96.8637 602.689 103.031 600.414 108.072 595.845L106.729 594.363C102.083 598.574 96.4057 600.689 89.6342 600.689L89.6342 602.689ZM108.078 595.84C113.092 591.22 115.609 585.428 115.609 578.53L113.609 578.53C113.609 584.877 111.32 590.134 106.723 594.369L108.078 595.84ZM115.609 578.53C115.609 574.272 114.562 570.315 112.467 566.679L110.734 567.678C112.65 571.004 113.609 574.616 113.609 578.53L115.609 578.53ZM112.469 566.683C110.386 563.028 107.592 560.037 104.093 557.717L102.988 559.384C106.225 561.53 108.803 564.29 110.732 567.673L112.469 566.683ZM104.361 559.123L113.897 545.443L112.256 544.3L102.72 557.979L104.361 559.123ZM112.527 545.707C117.793 549.169 121.957 553.771 125.021 559.531L126.787 558.592C123.57 552.546 119.181 547.688 113.626 544.036L112.527 545.707ZM125.023 559.534C128.08 565.244 129.615 571.569 129.615 578.53L131.615 578.53C131.615 571.263 130.01 564.61 126.786 558.59L125.023 559.534ZM129.615 578.53C129.615 583.999 128.563 589.161 126.462 594.027L128.298 594.82C130.51 589.696 131.615 584.263 131.615 578.53L129.615 578.53ZM126.464 594.021C124.318 598.906 121.458 603.072 117.886 606.533L119.278 607.969C123.048 604.316 126.052 599.931 128.295 594.826L126.464 594.021ZM117.886 606.533C114.312 609.997 110.069 612.748 105.145 614.784L105.909 616.633C111.051 614.506 115.511 611.62 119.278 607.969L117.886 606.533ZM105.151 614.782C100.241 616.776 95.071 617.773 89.6342 617.773L89.6342 619.773C95.3225 619.773 100.748 618.728 105.903 616.635L105.151 614.782ZM129.48 531.676L129.48 532.676L130.48 532.676L130.48 531.676L129.48 531.676ZM49.3912 531.676L48.3912 531.676L48.3912 532.676L49.3912 532.676L49.3912 531.676ZM49.3912 514.591L49.3912 513.591L48.3912 513.591L48.3912 514.591L49.3912 514.591ZM114.495 514.591L114.495 515.591L115.495 515.591L115.495 514.591L114.495 514.591ZM114.495 484.622L114.495 483.622L113.495 483.622L113.495 484.622L114.495 484.622ZM129.48 484.622L130.48 484.622L130.48 483.622L129.48 483.622L129.48 484.622ZM129.48 530.676L49.3912 530.676L49.3912 532.676L129.48 532.676L129.48 530.676ZM50.3912 531.676L50.3912 514.591L48.3912 514.591L48.3912 531.676L50.3912 531.676ZM49.3912 515.591L114.495 515.591L114.495 513.591L49.3912 513.591L49.3912 515.591ZM115.495 514.591L115.495 484.622L113.495 484.622L113.495 514.591L115.495 514.591ZM114.495 485.622L129.48 485.622L129.48 483.622L114.495 483.622L114.495 485.622ZM128.48 484.622L128.48 531.676L130.48 531.676L130.48 484.622L128.48 484.622ZM68.9735 472.334L69.4702 471.466L69.468 471.465L68.9735 472.334ZM53.9888 457.633L53.1267 458.14L53.1281 458.142L53.9888 457.633ZM68.9735 401.838L69.468 402.707L69.4702 402.706L68.9735 401.838ZM127.38 453.036L128.295 453.438L128.299 453.429L127.38 453.036ZM118.582 465.977L119.282 466.691L119.285 466.688L118.582 465.977ZM105.527 474.548L105.913 475.47L105.915 475.469L105.527 474.548ZM106.776 453.887L107.471 454.606L107.474 454.603L106.776 453.887ZM106.776 420.342L106.077 421.057L106.078 421.057L106.776 420.342ZM72.4927 420.342L73.1883 421.06L73.1911 421.057L72.4927 420.342ZM89.6343 476.726C82.3097 476.726 75.595 474.971 69.4702 471.466L68.4768 473.202C74.915 476.886 81.9741 478.726 89.6343 478.726L89.6343 476.726ZM69.468 471.465C63.2987 467.955 58.4306 463.179 54.8495 457.124L53.1281 458.142C56.888 464.499 62.0097 469.523 68.4791 473.203L69.468 471.465ZM54.8509 457.126C51.2729 451.04 49.483 444.386 49.483 437.143L47.483 437.143C47.483 444.733 49.3637 451.739 53.1267 458.14L54.8509 457.126ZM49.483 437.143C49.483 429.861 51.2734 423.188 54.8509 417.102L53.1267 416.089C49.3632 422.491 47.483 429.515 47.483 437.143L49.483 437.143ZM54.8509 417.102C58.4323 411.01 63.3002 406.216 69.468 402.707L68.4791 400.969C62.0082 404.65 56.8863 409.693 53.1267 416.089L54.8509 417.102ZM69.4702 402.706C75.595 399.201 82.3098 397.446 89.6343 397.446L89.6343 395.446C81.9741 395.446 74.915 397.285 68.4768 400.97L69.4702 402.706ZM89.6343 397.446C96.8812 397.446 103.558 399.2 109.685 402.706L110.678 400.97C104.242 397.286 97.2207 395.446 89.6343 395.446L89.6343 397.446ZM109.685 402.706C115.815 406.214 120.665 411.009 124.247 417.102L125.972 416.089C122.213 409.695 117.111 404.651 110.678 400.97L109.685 402.706ZM124.247 417.102C127.825 423.188 129.615 429.861 129.615 437.143L131.615 437.143C131.615 429.515 129.735 422.491 125.972 416.089L124.247 417.102ZM129.615 437.143C129.615 442.572 128.563 447.735 126.461 452.642L128.299 453.429C130.51 448.27 131.615 442.838 131.615 437.143L129.615 437.143ZM126.464 452.633C124.317 457.52 121.455 461.727 117.879 465.266L119.285 466.688C123.05 462.962 126.053 458.541 128.295 453.438L126.464 452.633ZM117.882 465.263C114.307 468.764 110.063 471.553 105.139 473.626L105.915 475.469C111.057 473.305 115.516 470.38 119.282 466.691L117.882 465.263ZM105.142 473.625C100.194 475.693 95.0273 476.726 89.6343 476.726L89.6343 478.726C95.2906 478.726 100.719 477.641 105.913 475.47L105.142 473.625ZM89.6343 461.755C96.5865 461.755 102.551 459.368 107.471 454.605L106.08 453.168C101.54 457.563 96.0775 459.755 89.6343 459.755L89.6343 461.755ZM107.474 454.603C112.36 449.835 114.814 443.995 114.814 437.143L112.814 437.143C112.814 443.459 110.576 448.782 106.078 453.171L107.474 454.603ZM114.814 437.143C114.814 430.254 112.362 424.395 107.474 419.626L106.078 421.057C110.575 425.446 112.814 430.787 112.814 437.143L114.814 437.143ZM107.474 419.626C102.555 414.824 96.5891 412.417 89.6343 412.417L89.6343 414.417C96.0749 414.417 101.537 416.626 106.077 421.057L107.474 419.626ZM89.6343 412.417C82.6795 412.417 76.7138 414.824 71.7942 419.626L73.1911 421.057C77.7316 416.626 83.1937 414.417 89.6343 414.417L89.6343 412.417ZM71.7971 419.623C66.8364 424.426 64.3409 430.285 64.3409 437.143L66.3409 437.143C66.3409 430.832 68.6132 425.49 73.1883 421.06L71.7971 419.623ZM64.3409 437.143C64.3409 443.998 66.8157 449.838 71.7404 454.605L73.1314 453.168C68.596 448.778 66.3409 443.456 66.3409 437.143L64.3409 437.143ZM71.7404 454.605C76.6617 459.369 82.6458 461.755 89.6343 461.755L89.6343 459.755C83.1516 459.755 77.6702 457.562 73.1314 453.168L71.7404 454.605Z"
                    fill="#39373E"/>
                <path
                    d="M129.48 278.094L129.48 279.094L130.48 279.094L130.48 278.094L129.48 278.094ZM49.3912 278.094L48.3912 278.094L48.3912 279.094L49.3912 279.094L49.3912 278.094ZM49.3912 261.123L49.3912 260.123L48.3912 260.123L48.3912 261.123L49.3912 261.123ZM82.0284 261.123L82.0284 262.123L83.0284 262.123L83.0284 261.123L82.0284 261.123ZM82.0284 232.629L83.0284 232.629L83.0284 231.629L82.0284 231.629L82.0284 232.629ZM49.3912 232.629L48.3912 232.629L48.3912 233.629L49.3912 233.629L49.3912 232.629ZM49.3912 215.43L49.3912 214.43L48.3912 214.43L48.3912 215.43L49.3912 215.43ZM129.48 215.43L130.48 215.43L130.48 214.43L129.48 214.43L129.48 215.43ZM129.48 232.629L129.48 233.629L130.48 233.629L130.48 232.629L129.48 232.629ZM97.2969 232.629L97.2969 231.629L96.2969 231.629L96.2969 232.629L97.2969 232.629ZM97.2969 261.123L96.2969 261.123L96.2969 262.123L97.2969 262.123L97.2969 261.123ZM129.48 261.123L130.48 261.123L130.48 260.123L129.48 260.123L129.48 261.123ZM129.48 277.094L49.3912 277.094L49.3912 279.094L129.48 279.094L129.48 277.094ZM50.3912 278.094L50.3912 261.123L48.3912 261.123L48.3912 278.094L50.3912 278.094ZM49.3912 262.123L82.0284 262.123L82.0284 260.123L49.3912 260.123L49.3912 262.123ZM83.0284 261.123L83.0284 232.629L81.0284 232.629L81.0284 261.123L83.0284 261.123ZM82.0284 231.629L49.3912 231.629L49.3912 233.629L82.0284 233.629L82.0284 231.629ZM50.3912 232.629L50.3912 215.43L48.3912 215.43L48.3912 232.629L50.3912 232.629ZM49.3912 216.43L129.48 216.43L129.48 214.43L49.3912 214.43L49.3912 216.43ZM128.48 215.43L128.48 232.629L130.48 232.629L130.48 215.43L128.48 215.43ZM129.48 231.629L97.2969 231.629L97.2969 233.629L129.48 233.629L129.48 231.629ZM96.2969 232.629L96.2969 261.123L98.2969 261.123L98.2969 232.629L96.2969 232.629ZM97.2969 262.123L129.48 262.123L129.48 260.123L97.2969 260.123L97.2969 262.123ZM128.48 261.123L128.48 278.094L130.48 278.094L130.48 261.123L128.48 261.123ZM129.48 195.424L129.48 196.424L130.48 196.424L130.48 195.424L129.48 195.424ZM49.3912 195.424L48.3912 195.424L48.3912 196.424L49.3912 196.424L49.3912 195.424ZM49.3912 178.452L49.3912 177.452L48.3912 177.452L48.3912 178.452L49.3912 178.452ZM129.48 178.452L130.48 178.452L130.48 177.452L129.48 177.452L129.48 178.452ZM129.48 194.424L49.3912 194.424L49.3912 196.424L129.48 196.424L129.48 194.424ZM50.3912 195.424L50.3912 178.452L48.3912 178.452L48.3912 195.424L50.3912 195.424ZM49.3912 179.452L129.48 179.452L129.48 177.452L49.3912 177.452L49.3912 179.452ZM128.48 178.452L128.48 195.424L130.48 195.424L130.48 178.452L128.48 178.452ZM129.48 158.502L129.48 159.502L130.48 159.502L130.48 158.502L129.48 158.502ZM49.3912 158.502L48.3912 158.502L48.3912 159.502L49.3912 159.502L49.3912 158.502ZM49.3912 142.95L48.8937 142.082L48.3912 142.37L48.3912 142.95L49.3912 142.95ZM97.2969 115.478L97.7944 116.345L101.051 114.478L97.2969 114.478L97.2969 115.478ZM49.3912 115.478L48.3912 115.478L48.3912 116.478L49.3912 116.478L49.3912 115.478ZM49.3912 98.3929L49.3912 97.3929L48.3912 97.3929L48.3912 98.3929L49.3912 98.3929ZM129.48 98.393L130.48 98.393L130.48 97.393L129.48 97.393L129.48 98.393ZM129.48 113.661L129.978 114.528L130.48 114.24L130.48 113.661L129.48 113.661ZM81.0067 141.531L80.5083 140.664L77.2611 142.531L81.0067 142.531L81.0067 141.531ZM129.48 141.531L130.48 141.531L130.48 140.531L129.48 140.531L129.48 141.531ZM129.48 157.502L49.3912 157.502L49.3912 159.502L129.48 159.502L129.48 157.502ZM50.3912 158.502L50.3912 142.95L48.3912 142.95L48.3912 158.502L50.3912 158.502ZM49.8887 143.817L97.7944 116.345L96.7995 114.61L48.8937 142.082L49.8887 143.817ZM97.2969 114.478L49.3912 114.478L49.3912 116.478L97.2969 116.478L97.2969 114.478ZM50.3912 115.478L50.3912 98.3929L48.3912 98.3929L48.3912 115.478L50.3912 115.478ZM49.3912 99.3929L129.48 99.393L129.48 97.393L49.3912 97.3929L49.3912 99.3929ZM128.48 98.393L128.48 113.661L130.48 113.661L130.48 98.393L128.48 98.393ZM128.982 112.795L80.5083 140.664L81.5051 142.398L129.978 114.528L128.982 112.795ZM81.0067 142.531L129.48 142.531L129.48 140.531L81.0067 140.531L81.0067 142.531ZM128.48 141.531L128.48 158.502L130.48 158.502L130.48 141.531L128.48 141.531ZM68.9735 77.7049L68.4752 78.5719L68.4768 78.5729L68.9735 77.7049ZM53.9888 62.8337L53.1241 63.336L53.1254 63.3382L53.9888 62.8337ZM52.0022 25.1449L52.9144 25.5547L52.9168 25.5491L52.0022 25.1449ZM61.5947 11.9765L62.353 11.3245L61.6971 10.5616L60.9382 11.2222L61.5947 11.9765ZM72.3792 24.5205L73.0432 25.2682L73.779 24.6148L73.1375 23.8686L72.3792 24.5205ZM76.92 62.8905L76.4423 63.7691L76.4489 63.7726L76.92 62.8905ZM102.349 62.8905L102.82 63.7727L102.83 63.7671L102.349 62.8905ZM113.417 33.2616L112.481 33.6141L113.417 33.2616ZM108.535 25.826L107.847 26.5516L107.848 26.552L108.535 25.826ZM101.213 22.6474L101.227 21.6475L100.213 21.6332L100.213 22.6474L101.213 22.6474ZM101.213 44.1596L101.213 45.1596L102.213 45.1596L102.213 44.1596L101.213 44.1596ZM87.4206 44.1596L86.4206 44.1596L86.4206 45.1596L87.4206 45.1596L87.4206 44.1596ZM87.4207 3.00836L87.4207 2.00836L86.4207 2.00836L86.4207 3.00836L87.4207 3.00836ZM120.285 13.9063L119.574 14.6096L120.285 13.9063ZM128.061 26.2233L129.001 25.8822L129 25.878L128.061 26.2233ZM127.38 58.1794L128.298 58.5766L128.301 58.5684L127.38 58.1794ZM118.582 71.2343L119.285 71.945L118.582 71.2343ZM105.527 79.9186L105.915 80.8403L105.921 80.8378L105.527 79.9186ZM89.6343 82.0972C82.3098 82.0972 75.595 80.3422 69.4702 76.837L68.4768 78.5729C74.915 82.2574 81.9741 84.0972 89.6343 84.0972L89.6343 82.0972ZM69.4719 76.838C63.3035 73.2921 58.4345 68.4598 54.8522 62.3292L53.1254 63.3382C56.8841 69.7706 62.0049 74.8525 68.4752 78.5719L69.4719 76.838ZM54.8535 62.3315C51.2744 56.1695 49.4831 49.4188 49.4831 42.0594L47.4831 42.0594C47.4831 49.7605 49.3622 56.8593 53.1241 63.336L54.8535 62.3315ZM49.4831 42.0594C49.4831 36.138 50.6295 30.6404 52.9144 25.5547L51.09 24.7351C48.6827 30.0932 47.4831 35.872 47.4831 42.0594L49.4831 42.0594ZM52.9168 25.5491C55.169 20.454 58.2811 16.1863 62.2512 12.7308L60.9382 11.2222C56.7348 14.8806 53.4519 19.3918 51.0876 24.7406L52.9168 25.5491ZM60.8364 12.6284L71.6209 25.1724L73.1375 23.8686L62.353 11.3245L60.8364 12.6284ZM71.7151 23.7728C66.1026 28.7573 63.2624 34.8707 63.2624 42.0595L65.2624 42.0595C65.2624 35.4744 67.8334 29.8951 73.0432 25.2682L71.7151 23.7728ZM63.2624 42.0595C63.2624 46.6675 64.4468 50.8994 66.8176 54.7322L68.5185 53.6801C66.3485 50.1719 65.2624 46.306 65.2624 42.0595L63.2624 42.0595ZM66.8176 54.7322C69.1821 58.5549 72.3964 61.5693 76.4423 63.7691L77.3976 62.012C73.6484 59.9735 70.6948 57.1984 68.5185 53.6801L66.8176 54.7322ZM76.4489 63.7726C80.4968 65.9341 84.8975 67.0123 89.6343 67.0123L89.6343 65.0123C85.2138 65.0123 81.1383 64.0093 77.391 62.0084L76.4489 63.7726ZM89.6343 67.0123C94.3711 67.0123 98.7718 65.9341 102.82 63.7726L101.878 62.0084C98.1303 64.0093 94.0548 65.0123 89.6343 65.0123L89.6343 67.0123ZM102.83 63.7671C106.836 61.5675 110.047 58.5553 112.447 54.7385L110.754 53.6738C108.538 57.1981 105.58 59.9754 101.867 62.0139L102.83 63.7671ZM112.447 54.7385C114.858 50.9051 116.063 46.6709 116.063 42.0595L114.063 42.0595C114.063 46.3026 112.96 50.1663 110.754 53.6738L112.447 54.7385ZM116.063 42.0595C116.063 38.981 115.49 35.9293 114.353 32.9092L112.481 33.6141C113.538 36.4213 114.063 39.2348 114.063 42.0595L116.063 42.0595ZM114.353 32.9092C113.205 29.8608 111.495 27.2525 109.223 25.1001L107.848 26.552C109.889 28.4862 111.434 30.8351 112.481 33.6141L114.353 32.9092ZM109.224 25.1004C106.871 22.8698 104.197 21.6894 101.227 21.6475L101.199 23.6473C103.603 23.6812 105.81 24.6198 107.847 26.5516L109.224 25.1004ZM100.213 22.6474L100.213 44.1596L102.213 44.1596L102.213 22.6474L100.213 22.6474ZM101.213 43.1596L87.4206 43.1596L87.4206 45.1596L101.213 45.1596L101.213 43.1596ZM88.4206 44.1596L88.4207 3.00836L86.4207 3.00836L86.4206 44.1596L88.4206 44.1596ZM87.4207 4.00836C94.6783 4.00836 101.017 4.94391 106.454 6.79309L107.098 4.89963C101.41 2.96481 94.845 2.00836 87.4207 2.00836L87.4207 4.00836ZM106.454 6.79309C111.899 8.64508 116.259 11.2584 119.574 14.6096L120.996 13.2031C117.424 9.59168 112.778 6.8317 107.098 4.89963L106.454 6.79309ZM119.574 14.6096C122.914 17.9862 125.43 21.9688 127.123 26.5687L129 25.878C127.211 21.0178 124.543 16.7891 120.996 13.2031L119.574 14.6096ZM127.121 26.5645C128.778 31.13 129.615 36.2906 129.615 42.0595L131.615 42.0595C131.615 36.0978 130.75 30.701 129.001 25.8822L127.121 26.5645ZM129.615 42.0595C129.615 47.5664 128.563 52.8072 126.459 57.7904L128.301 58.5684C130.511 53.3348 131.615 47.829 131.615 42.0595L129.615 42.0595ZM126.462 57.7822C124.315 62.7438 121.452 66.9869 117.879 70.5235L119.285 71.945C123.053 68.2164 126.056 63.7562 128.298 58.5766L126.462 57.7822ZM117.879 70.5235C114.303 74.0627 110.058 76.889 105.133 78.9995L105.921 80.8378C111.062 78.6344 115.521 75.6712 119.285 71.945L117.879 70.5235ZM105.139 78.997C100.232 81.0633 95.0661 82.0972 89.6343 82.0972L89.6343 84.0972C95.3275 84.0972 100.757 83.012 105.915 80.8402L105.139 78.997Z"
                    fill="#39373E"/>
                <path
                    d="M59.6259 313.334H58.6259L58.6259 314.334H59.6259L59.6259 313.334ZM59.6259 298.009V297.009H58.6259V298.009H59.6259ZM120.076 298.009H121.076V297.009H120.076V298.009ZM120.076 313.334V314.334H121.076V313.334H120.076ZM98.45 313.334V312.334H97.45V313.334H98.45ZM98.45 378.098V379.098H99.45V378.098H98.45ZM81.2516 378.098H80.2516V379.098H81.2516V378.098ZM81.2516 313.334H82.2516V312.334H81.2516V313.334ZM60.6259 313.334L60.6259 298.009H58.6259V313.334H60.6259ZM59.6259 299.009H120.076V297.009H59.6259V299.009ZM119.076 298.009V313.334H121.076V298.009H119.076ZM120.076 312.334H98.45V314.334H120.076V312.334ZM97.45 313.334L97.45 378.098H99.45L99.45 313.334H97.45ZM98.45 377.098H81.2516V379.098H98.45V377.098ZM82.2516 378.098L82.2516 313.334H80.2516L80.2516 378.098H82.2516ZM81.2516 312.334H59.6259L59.6259 314.334H81.2516V312.334Z"
                    fill="#39373E"/>
            </svg>
        </Box>
    )

    const {Wrapper, Card} = ChessListView


    return (
        <Box position={'relative'} mt={'60px'} width={'100%'}>
            {clothingText}

            <Wrapper>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Wrapper>
        </Box>
    )
});



