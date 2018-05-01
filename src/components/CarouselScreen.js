import React, { Component } from 'react';
import { Platform, View, ScrollView, Image, 
    ImageBackground, Text, StatusBar, SafeAreaView, Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from './SlideEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import ListViewScreen from './ListViewScreen.js'
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
var { height, width } = Dimensions.get('window');
export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <ListViewScreen
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            
            <View>
                {/*<Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>*/}
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                {/*<Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />*/}




            </View>
  
        );
    }

  
   

    render () {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
       

        return (
            <View style={{flex:1,flexDirection:'column'}}>
             <ImageBackground source={require('../../img/Screen.png')}
              style={{width:undefined,height:height-height*0.15}}>
                    <ScrollView
                   
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}>
                        { example1 }
                       
                    </ScrollView>
  </ImageBackground>
   <ImageBackground source={require('../../img/Path1629.png')}
   style={{width:undefined,height:height-height*0.2,padding:20}}>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<View>
   <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>PARTICIPANTS</Text>
    <Text style={{color:'white',fontSize:13}}>Swipe up to manage participants</Text>
  </View>

 <Image source={require('../../img/Chevrondown.png')}
  />

    </View>
   </ImageBackground>


                            
                              </View>
              
        );
    }
}
