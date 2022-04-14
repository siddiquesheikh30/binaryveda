//import liraries
import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './MoreDetailStyle';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const MoreDetail = (props) => {

    return (
        <View style={styles.aboutContainer}>
        <View>
            <Image
                resizeMode='cover'
                source={props.imgPath}
                style={{ width: props.widthValue, height: props.heightValue, }}
            />
        </View>

            <Text style={styles.heading}>lorem ipsum is used</Text>
            <Text style={styles.detailText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque fugit maxime et. Unde repellat hic voluptas commodi laudantium deleniti excepturi voluptatem rem? Illo, sequi. Hic, tempora neque.</Text>
        </View>
    );
};


//make this component available to the app
export default MoreDetail;
