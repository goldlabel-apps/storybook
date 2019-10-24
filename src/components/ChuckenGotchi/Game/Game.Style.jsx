
export const styles = theme => ({
    gameContainer: {
        position: 'relative',
        height: '100vh',
    },
    barn: {
        position: 'absolute',
        maxWidth: 275,
    },
    viewportInfo: {
        position: 'absolute',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        padding: theme.spacing(),
        margin: theme.spacing(),
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7))',
        borderRadius: theme.spacing(0.5)
    },
    sky: {
        position: 'relative',
        height: '45vh',
        backgroundImage: 'linear-gradient(lightblue, skyblue)',
    },
    ground: {
        position: 'relative',
        height: '55vh',
        backgroundImage: 'linear-gradient(green, lightgreen )',
    },
    startPoint: {
        position: 'absolute',
        transform: 'scale(1)',
        left: 0,
        top: 0,
    },
    cloud1: {
    },
    cloud2: {
    },
});