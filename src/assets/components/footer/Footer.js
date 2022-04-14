//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './FooterStyle';

// create a component
const Footer = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.footerImgBox}>
                    <Image source={require('../../images/footerImg.png')} />
                </View>
                <View style={styles.footerMenu}>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>about us.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>affiliattions.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>team.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>disclaimers.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>reach us.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>privacy policy.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.copyrightBox}>
                <Image source={require('../../images/copyright.png')} />
                <Text style={styles.copyrightText}>Content Copyright reserved</Text>
            </View>
        </>

    );
};

//make this component available to the app
export default Footer;
