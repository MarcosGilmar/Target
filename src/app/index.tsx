import { View, Text, StatusBar } from "react-native"
import { router } from "expo-router"
import { fontFamily } from "@/theme/fontFamily"

import { HomeHeader } from "@/components/HomeHeader"
import { Target } from "@/components/Target"
import { List } from "@/components/List"
import { Button } from "@/components/Button"

const summary = {
    total: "R$ 2.680,00",
    input: { label: "Entradas", value: "R$ 6,184.90" },
    output: { label: "Saídas", value: "-R$ 883.65" }
}

const targets = [
    {
        id: "1",
        name: "Comprar uma cadeira ergonômica",
        current: "R$ 900,00",
        percentage: "75%",               
        target: "R$ 1.200,00"
    },
    {
        id: "2",
        name: "Comprar uma cadeira ergonômica",
        current: "R$ 900,00",
        percentage: "75%",               
        target: "R$ 1.200,00"
    },
]

export default function Index() {
    return (
        <View style={{ flex: 1, marginBottom: 32}}>
            <StatusBar barStyle={"light-content"}/>
            <HomeHeader data={summary}/>
            <List 
                title="Metas"
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <Target 
                        data={item} 
                        onPress={() => router.navigate(`/in-progress/${item.id}`)}
                    />
                }
                emptyMessage="Nenhuma meta. Toque em nova meta para criar"
                containerStyle={{ paddingHorizontal: 24}}
            />
            <View style= {{ paddingHorizontal: 24 }}>
                <Button 
                    title="Nova meta"
                    onPress={() => router.navigate("/target")}
                />
            </View>
        </View>
    )
}