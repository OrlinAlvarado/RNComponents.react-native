import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { color } from 'react-native-reanimated';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionListScreen = () => {
    const { theme:{ colors } } = useContext( ThemeContext );
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList 
                sections={ casas }
                keyExtractor={ (item, index) => item + index }
                
                ListHeaderComponent={ () => <HeaderTitle title="Section List" />}
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={ "Total de casas:" + casas.length } />   
                    </View>
                )}
                
                stickySectionHeadersEnabled
                
                renderItem={ ({ item }) => <Text style={{ color: colors.text  }}>{ item }</Text>}
                renderSectionHeader={ ({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                    <HeaderTitle title={ section.casa } />
                    </View>
                )}
                renderSectionFooter={ ({ section }) => (
                    <HeaderTitle title={ "Total:" + section.data.length } />
                )}
                SectionSeparatorComponent={ () => <ItemSeparator /> }
                ItemSeparatorComponent={ () => <ItemSeparator />}
                showsVerticalScrollIndicator={ false }
            />
        </View>
    )
}
