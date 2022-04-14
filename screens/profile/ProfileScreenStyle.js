const styles = {
    container: {
        flex: 1,
        padding: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    logoBox: {
        flex: 6,
        justifyContent: 'center'
    },
    headerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 6
    },
    userIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 100,
        backgroundColor: '#d90034'
    },
    userImgBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30
    },
    xCenter: { alignItems: 'center' },

    userImgBtnText: {
        fontSize: 19,
        lineHeight: 32,
        color: '#597ddf',
        fontFamily: 'BarlowCondensed-Light',
        textTransform: 'capitalize'
    },
    userImgText: {
        color: '#000',
        fontFamily: 'BarlowCondensed-ExtraLight',
        fontSize: 48,
        lineHeight: 37,
        letterSpacing: -2,
        marginTop: 10
    },
    myDashboard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    dashboardText: {
        fontFamily: 'BarlowCondensed-Light',
        color: '#000',
        fontSize: 19,
        lineHeight: 32
    },
    switchBox: {
        flexDirection: 'row',
        position: 'relative',
        marginRight: 10
    },
    switchBar: {
        width: 55,
        height: 21,
        backgroundColor: '#44a33d',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    switchCircle: {
        position: 'absolute',
        right: -15,
        bottom: -8,
    },
    userAbout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderTopColor: '#d8d8d8',
        borderBottomWidth: 2,
        borderBottomColor: '#d8d8d8',
        paddingVertical: 15
    },
    userAboutNum: {
        fontSize: 32,
        lineHeight: 38,
        fontFamily: 'BarlowCondensed-Light',
        color: '#000'
    },
    userAboutText: {
        fontFamily: 'BarlowCondensed-Light',
        fontSize: 19,
        lineHeight: 32,
        color: '#000'
    },
    likeShareBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center'
    },
    likeShareText: {
        fontFamily: 'Barlow-ExtraLight',
        color: '#000',
        fontSize: 24,
        lineHeight: 56,
        marginLeft: 8
    },
    colorBox: {
        width: '20%',
        height: 50,
    },
    colorBoxText: {
        fontFamily: 'BarlowCondensed-Medium',
        color: '#fff',
        fontSize: 19,
        lineHeight: 24
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 30
    },
    actionText: {
        fontFamily: 'Barlow-Medium',
        fontSize: 19,
        lineHeight: 32,
        textTransform: 'capitalize',
    },
    galleryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 5
    },
    galleryBox: {
        width: '49.5%',
        marginBottom: 3
    },
    galleryImg: {
        width: '100%'
    }

}

export default styles;