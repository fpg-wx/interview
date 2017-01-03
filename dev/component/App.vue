<template lang="html">
    <div class="app-container">
        <canvas id="granim-canvas" class="granim-canvas"></canvas>

        <transition name="opacity" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Granim from 'granim';

export default {
    mounted() {
        // var granimInstance = new Granim({
        //     element: '#granim-canvas',
        //     name: 'granim',
        //     direction: 'radial',
        //     opacity: [1, 1],
        //     states : {
        //         "default-state": {
        //             gradients: [
        //         ['#729EA1', '#B5BD89'],
        //         ['#DFBE99', '#EC9192'],
        //         ['#DB5375', '#FF928B']
        //     ]
        //         }
        //     }
        // });
    },
}
</script>

<style lang="scss">
// @import "../style/reset";
// @import "../style/mixin";
// @include font-face("Lato-Regular");

.opacity-enter-active, .opacity-leave-active{
    transition: opacity 0.65s ease, transform 0.65s ease;
}
.opacity-enter, .opacity-leave-active{
    opacity: 0;
}
.opacity-enter{
    transform: translateY(-8%);
}
.opacity-leave-active{
    transform: translateY(8%);
}

.picker__holder{
    overflow: hidden !important;
}

.container{
    width: 90% !important;
}

html, body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body{
    background: linear-gradient(50deg, HSLA(205, 62%, 44%, 1), #F62D51);
}

#app{
    width: 100%;
    height: 100%;
}

.app-container{
    position: relative;
    height: 100%;

    .granim-canvas{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
}

.info-container{
    height: 100%;

    &.container{
        max-width: 800px;
        // overflow: auto;
    }

    .date-field{
        position: relative;
        margin-top: 1rem;

        label, input{
            cursor: pointer;
        }

        label{
            position: absolute;
            top: 0.8rem;
            left: 0.75rem;
            transform: translateY(-140%);
        }
    }

    .btn-close{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
        color: rgba(108, 116, 127, 0.5);
        transition: color .3s ease-out;

        &:hover{
            color: #6c747f;
        }
    }
    .btn-done{
        display: block;
        margin: 0 auto;
    }
}

// @media (max-width:600px){
//     html,body{
//         height: auto;
//         overflow: auto;
//     }
//     #app{
//         height: auto;
//     }
//     .app-container{
//         height: auto;
//     }
//     .info-container{
//         height: auto;
//     }
// }
</style>
