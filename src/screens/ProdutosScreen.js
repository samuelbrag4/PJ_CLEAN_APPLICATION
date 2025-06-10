import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: '1',
    name: 'Shampoo Nutritivo',
    description: 'Para cabelos secos e quebradiços.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Creme Hidratante Facial',
    description: 'Hidratação intensa por 24h.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Óleo Corporal Natural',
    description: 'Com óleos essenciais naturais.',
    image: 'https://via.placeholder.com/150',
  },
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <Text className="text-3xl font-bold mb-4 text-center">Beleza & Cuidados</Text>

        <View className="grid grid-cols-1 gap-4">
          {products.map(product => (
            <Card key={product.id} className="rounded-2xl shadow p-2">
              <Image
                source={{ uri: product.image }}
                className="w-full h-40 rounded-2xl mb-2"
                resizeMode="cover"
              />
              <CardContent>
                <Text className="text-xl font-semibold">{product.name}</Text>
                <Text className="text-gray-500 mb-2">{product.description}</Text>
                <Button className="w-full mt-2">Ver mais</Button>
              </CardContent>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
