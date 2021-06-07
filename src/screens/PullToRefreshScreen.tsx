import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { theme:{ colors } } = useContext( ThemeContext );
    
    const onRefresh =() => {
        setRefreshing(true);
        
        setTimeout(() => {
           console.log('Terminamos'); 
           setRefreshing(false);
           setData('Hola Mundo')
        }, 3500);
    }
    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ colors.primary }
                    colors={ ['white', 'red', 'orange']} //Solo en Android
                    style={{ backgroundColor: colors.primary }} //Solo en ios
                    tintColor="white" //Solo ios
                    title="Refresshing" //Solo ios
                    titleColor="white"  //Solo ios
                />
            }
        >
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Pull to refresh" />
            
            {
                data && <HeaderTitle title={ data } />
            }
        </View>
        </ScrollView>
    )
}
