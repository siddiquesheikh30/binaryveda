//import liraries
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './ProfileScreenStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



// create a component
const ProfileScreen = ({ navigation }) => {
    const [show, setShow] = useState(1);
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.logoBox}>
                        <Image source={require('../../src/assets/images/profileLogo.png')} style={{ width: 113, height: 37 }} />
                    </View>
                    <View style={styles.headerMenu}>
                        <View style={styles.userIcon}>
                            <Image source={require('../../src/assets/images/userIcon.png')} />
                        </View>
                        <AntDesign name='plus' size={32} color="#000" />
                        <Feather name='menu' size={32} color="#000" />
                    </View>
                </View>

                <View style={styles.userImgBox}>
                    <TouchableOpacity style={styles.xCenter}>
                        <Image source={require('../../src/assets/images/upload.png')} style={{ width: 37, height: 44 }} />
                        <Text style={styles.userImgBtnText}>upload</Text>
                    </TouchableOpacity>
                    <View style={styles.xCenter}>
                        <Image source={require('../../src/assets/images/userImg.png')} style={{ width: 168, height: 168 }} />
                        <Text style={styles.userImgText}>john.doe</Text>
                    </View>
                    <TouchableOpacity style={styles.xCenter}>
                        <Image source={require('../../src/assets/images/edit.png')} style={{ width: 36, height: 37 }} />
                        <Text style={styles.userImgBtnText}>edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.myDashboard}>
                    <Text style={styles.dashboardText}>My dashboard</Text>
                    <View style={styles.switchBox}>
                        <View style={styles.switchBar} />
                        <Image source={require('../../src/assets/images/switch.png')} style={styles.switchCircle} />
                    </View>
                </View>

                <View style={styles.userAbout}>
                    <View style={styles.xCenter}>
                        <Text style={styles.userAboutNum}>2.3k</Text>
                        <Text style={styles.userAboutText}>followers</Text>
                    </View>

                    <View style={styles.xCenter}>
                        <Text style={styles.userAboutNum}>50</Text>
                        <Text style={styles.userAboutText}>artworks</Text>
                    </View>

                    <View style={styles.xCenter}>
                        <Text style={styles.userAboutNum}>21</Text>
                        <Text style={styles.userAboutText}>exhibitions</Text>
                    </View>
                </View>

                <View style={styles.likeShareBox}>
                    <View style={[{ flexDirection: 'row' }, styles.xCenter]}>
                        <Image source={require('../../src/assets/images/heart.png')} style={{ width: 25, height: 21 }} />
                        <Text style={styles.likeShareText}>120</Text>
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.xCenter]}>
                        <Image source={require('../../src/assets/images/arrowUpperRight.png')} style={{ width: 21, height: 21 }} />
                        <Text style={styles.likeShareText}>43k</Text>
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.xCenter]}>
                        <Image source={require('../../src/assets/images/share.png')} style={{ width: 19, height: 22 }} />
                        <Text style={styles.likeShareText}>2.3k</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.colorBox, { backgroundColor: '#5f0e47', justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={styles.colorBoxText}>pallette</Text>
                    </View>
                    <View style={[styles.colorBox, { backgroundColor: '#9e003d' }]} />
                    <View style={[styles.colorBox, { backgroundColor: '#d90034' }]} />
                    <View style={[styles.colorBox, { backgroundColor: '#ff4518' }]} />
                    <View style={[styles.colorBox, { backgroundColor: '#ffc200' }]} />
                </View>

                <View style={styles.action}>
                    <TouchableOpacity
                        style={{ borderBottomWidth: 3, borderBottomColor: show === 1 ? '#ffb500' : 'transparent', marginTop: -5 }}
                        onPress={() => setShow(1)}>
                        <View style={styles.xCenter}>
                            <Image source={require('../../src/assets/images/uploadBlack.png')} style={{ width: 39, height: 47, tintColor: show === 1 ? '#000' : '#aaa' }} />
                            <Text style={[styles.actionText, { color: show === 1 ? '#000' : '#aaa' }]}>uploads</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ borderBottomWidth: 3, borderBottomColor: show === 2 ? '#ffb500' : 'transparent' }}
                        onPress={() => setShow(2)}>
                        <View style={styles.xCenter}>
                            <Image source={require('../../src/assets/images/gallery.png')} style={{ width: 41, height: 41, tintColor: show === 2 ? '#000' : '#aaa' }} />
                            <Text style={[styles.actionText, { color: show === 2 ? '#000' : '#aaa' }]}>exhibitions</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ borderBottomWidth: 3, borderBottomColor: show === 3 ? '#ffb500' : 'transparent' }}
                        onPress={() => setShow(3)}>
                        <View style={styles.xCenter}>
                            <Image source={require('../../src/assets/images/revenue.png')} style={{ width: 44, height: 37, tintColor: show === 3 ? '#000' : '#aaa' }} />
                            <Text style={[styles.actionText, { color: show === 3 ? '#000' : '#aaa' }]}>revenue</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.galleryContainer}>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g1.png')} style={styles.galleryImg} />
                    </View>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g2.png')} style={styles.galleryImg} />
                    </View>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g3.png')} style={styles.galleryImg} />
                    </View>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g4.png')} style={styles.galleryImg} />
                    </View>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g5.png')} style={styles.galleryImg} />
                    </View>
                    <View style={styles.galleryBox}>
                        <Image source={require('../../src/assets/images/g6.png')} style={styles.galleryImg} />
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

//make this component available to the app
export default ProfileScreen;
