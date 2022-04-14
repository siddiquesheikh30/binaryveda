//import liraries
import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../../src/assets/components/footer/Footer';
import MoreDetail from '../../src/assets/components/more-detail/MoreDetail';
import styles from './HomeScreenStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.brandImgBox}>
                    <Image
                        resizeMode='contain'
                        style={{ width: windowWidth * 0.6 }}
                        source={require('../../src/assets/images/logo.png')}
                    />
                </View>

                <View style={{ alignItems: 'stretch' }}>
                    <Image
                        resizeMode='cover'
                        style={[styles.bannerImg, { width: '100%', height: windowHeight * 0.44 }]}
                        source={require('../../src/assets/images/group301Copy.png')}
                    />
                </View>

                <View>
                    <Text style={styles.bannerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
                </View>

                <View style={styles.registerBox}>
                    <TouchableOpacity
                        style={styles.registerBtn}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <AntDesign name='arrowright' size={20} color="#fff" />
                        <Text style={styles.regBtnText}>register</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerText}>me as a collector</Text>
                </View>

                <View style={styles.block}>
                    <AntDesign name='arrowright' size={14} color="#577bdf" />
                    <Text style={styles.trackText}>track my application</Text>
                </View>

                <MoreDetail imgPath={require('../../src/assets/images/group.png')} widthValue={0.22} />
                <MoreDetail imgPath={require('../../src/assets/images/group2.png')} widthValue={0.12} />
                <MoreDetail imgPath={require('../../src/assets/images/group3.png')} widthValue={0.19} />
                <MoreDetail imgPath={require('../../src/assets/images/group4.png')} widthValue={0.185} />
                <MoreDetail imgPath={require('../../src/assets/images/group5.png')} widthValue={0.2} />
                <MoreDetail imgPath={require('../../src/assets/images/group6.png')} widthValue={0.18} />
                <MoreDetail imgPath={require('../../src/assets/images/group7.png')} widthValue={0.08} />
                <MoreDetail imgPath={require('../../src/assets/images/group8.png')} widthValue={0.1} />

                <View style={[styles.block]}>
                    <Image style={styles.socialBox} source={require('../../src/assets/images/fb.png')} />

                    <Image style={styles.socialBox} source={require('../../src/assets/images/insta.png')} />
                </View>

                <Footer />

            </ScrollView>


        </SafeAreaView>
    );
};

//make this component available to the app
export default HomeScreen;
