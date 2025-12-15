import { View } from "react-native"
import { useLocalSearchParams, router } from "expo-router"

import { PageHeader } from "@/components/PageHeader"
import { Progress } from "@/components/Progress"
import { List } from "@/components/List"
import { Transaction, TransactionProps } from "@/components/Transaction"
import { Button } from "@/components/Button"

import { TransactionTypes } from "@/utils/TransactionTypes"

const details = {
    current: "R$ 580,00",
    target: "R$ 1.790,00",
    percentage: 50
}

const transactions: TransactionProps[] = [
    {
        id: "1",
        value: "R$ 20,00",
        date: "12/04/25",
        type: TransactionTypes.Input
    },
    {
        id: "2",
        value: "R$ 300,00",
        date: "12/04/25",
        description: "CDB de 110% no banco XPTO",
        type: TransactionTypes.Output
    }
]

export default function InProgress() {
    const params = useLocalSearchParams<{ id: string }>()

    return (
        <View style={{ flex: 1, gap: 32, marginBottom: 34 }}>
            <PageHeader 
                title="Apple Watch"
                rightButton={{
                    icon: "edit",
                    onPress: () => {}
                }}
            />

            <Progress data={details}/>

            <List 
                title="Transações"
                data={transactions}
                renderItem={({ item }) => (
                    <Transaction data={ item } onRemove={() => {}}/>
                )}
                emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui"
            />
            <View style= {{ paddingHorizontal: 24 }}>
                <Button title="Nova transação" onPress={() => router.navigate(`/transaction/${params.id}`)}/>
            </View>
        </View>
    )
}