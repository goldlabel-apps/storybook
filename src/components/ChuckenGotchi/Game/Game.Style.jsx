
export const styles = theme => ({
    game: {
    },
    gameContainer: {
        position: 'relative',
        height: '100vh',
        // border: '1px solid rgba(255,255,255,0.1)',
    },
    sky: {
        position: 'relative',
        height: '49vh',
        backgroundImage: 'linear-gradient(lightblue, skyblue)',
    },
    cloud1: {
        position: 'absolute',
        zIndex: 1,
        transform: 'scale(0.85)',
        top: '5%',
        left: '20%'
    },
    cloud2: {
        position: 'absolute',
        transform: 'scale(0.75)',
        zIndex: 2,
        top: '0%',
        left: '30%'
    },
    ground: {
        position: 'relative',
        height: '66vh',
        backgroundImage: 'linear-gradient(green, lightgreen )',
    }
});