import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react'
import { ImageSourcePropType, SafeAreaView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any>{};

export const SlidesScreen = ({ navigation }: Props) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme:{ colors } } = useContext( ThemeContext );
    // const navigation = useNavigation();
    const renderItem = (item: Slide) => {
        return (
            <View
                style={{ 
                  flex: 2,
                  backgroundColor: colors.background,
                  borderRadius: 5,
                  padding: 10,
                  justifyContent: 'center'
                }}
            >
                <Image 
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={{ ...styles.title, color: colors.primary }}>{ item.title }</Text>
                <Text style={{ ...styles.subTitle, color: colors.text }}>{ item.desc }</Text>
            </View>
        )
    }
    return (
        <SafeAreaView
        style={{ 
            flex: 1,
            paddingTop: 10
        }}
        >
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={ items }
              renderItem={({ item }: any) => renderItem(item)}
              sliderWidth={ screenWidth }
              itemWidth={ screenWidth}
              layout="default"
              onSnapToItem={(index) => {
                  setActiveIndex(index);
              }}
            />
            <View
                style={{ 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10, 
                    alignItems: 'center'
                }}
            >
            <Pagination 
                dotsLength={ items.length } 
                activeDotIndex= { activeIndex }
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: colors.primary
                }}
            />
            { items.length === activeIndex + 1 &&
            <TouchableOpacity style={{ 
                flexDirection: 'row',
                backgroundColor: colors.primary,
                width: 120,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                activeOpacity={ 0.8 }
                onPress={ () =>  navigation.navigate( "Home" )}
            >
                <Text style={{
                    fontSize: 15,
                    color: colors.text    
                }}>
                    Entrar
                </Text>
                <Icon 
                    name="chevron-forward-outline" 
                    color="white"
                    size={ 30 }
                />
            </TouchableOpacity>
            }
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#5856D6'
    },
    subTitle: {
        fontSize: 10
    }
});