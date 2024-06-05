import { useState } from 'react';
import { Container, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MenuItem } from './MenuItem';

const categories = [
  {
    id: 'onigiri',
    title: 'Onigiri',
    description: 'Rice balls with a choice of fish, beef, or vegetable fillings, cooked and seasoned to perfection.',
    items: [
      { id: 'salmon', name: 'Salmon', description: 'Savory house-made grilled salmon filling' },
      { id: 'tuna-mayo', name: 'Tuna-Mayo', description: 'Creamy tuna mixed with mayo' },
      { id: 'beef', name: 'Beef', description: 'Marinated ground beef' },
      { id: 'kelp', name: 'Kelp', description: 'Umami-packed simmered kelp with rich, sweet, and savory flavor' },
    ]
  },
  {
    id: 'hot-food',
    title: 'Hot Food',
    description: 'Street-style hot food perfect for a quick meal or a snack.',
    items: [
      {id: 'tori-dango', name: 'Tori Dango', japanese: '', description: 'House-made chicken meatballs with sweet and savory sauce', serving: '3 meatballs'},
      {id: 'gyoza', name: 'Vegetable Goyza', description: 'Fried dumplings with a crispy outside and vegetable fillings', serving: '4 pieces'},
      {id: 'takoyaki', name: 'Takoyaki', description: 'Fluffy and savory octopus balls', servings: '3 pieces'},
      {id: 'croquette', name: 'Croquette', japanese: 'コロッケ', description: 'Deep-fried potato croquettes filled with creamed corn and a crispy outside', serving: '2 pieces'},
      {id: 'ebi-fry', name: 'Ebi Fry', japanese: '海老フライ', description: 'Succulent shrimp coated with Panko breadcrumbs and fried until golden brown', serving: '3 pieces'},
      {id: 'yakitori', name: 'Yakitori', japanese: '焼き鳥', description: 'Grilled chicken skewers made from bite sized meat pieces and leek', serving: '2 skewers'},
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    description: 'Sweets to satisfy your cravings or curiosity.',
    items: [],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    description: 'Refreshing drinks to quench your thirst.',
    items: [
      {id: 'ramune', name: 'Ramune', japanese: 'ラムネ', description: 'Carbonated soft drink with a unique bottle design', serving: '200ml'},
      {id: 'green-tea', name: 'Green Tea', japanese: '無糖緑茶飲料', description: 'Unsweetened iced green tea in a can', serving: '315ml'},
      {id: 'water', name: 'Bottled Water', description: 'Cold water in a bottle', serving: '500ml'},
    ],
  },
];

export function Menu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(null);

  return (
    <Container size="md">
    {
      categories.map((category) => {
        return (
          <div key={category.id}>
            <Title order={4}>{category.title}</Title>
            <Text>{category.description}</Text>
            {category.items.map((item) => (<MenuItem key={item.id} name={item.name} description={item.description} />))}
          </div>
        );
      })
    }
    </Container>
  )
}