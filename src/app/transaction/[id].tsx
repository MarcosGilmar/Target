import { useState } from "react";
import { Alert, View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { TransactionType } from "@/components/TransactionType";

import { TransactionTypes } from "@/utils/TransactionTypes";
import { Button } from "@/components/Button";

export default function Transaction() {
    const [type, setType] = useState(TransactionTypes.Input)
    const [isCreating, setIsCreating] = useState(false)

    const params = useLocalSearchParams<{id: string}>()

    async function handleCreate() {
        try {
            
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar a transação")
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <PageHeader 
                title="Nova transação"
                subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
            />

            <View style={{ marginTop: 32, gap: 24, paddingHorizontal: 24 }}>
                <TransactionType selected={type} onChange={setType}/>
                <CurrencyInput label="Valor (R$)" value={0}/>
                <Input label="Motivo (opcional)" placeholder="Ex: Investir em CDB de 110% no banco XPTO"/>
            </View>
            <View style={{ padding: 24 }}>
                <Button 
                    title="Salvar" 
                    onPress={handleCreate}
                    isProcessing={isCreating}
                />
            </View>
        </View>
    )
}