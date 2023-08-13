import styled from 'styled-components';
import Card from '@/components/Card';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const items = [
    {
        id: 1,
        image: '/path/to/image1.jpg',
        name: 'Item 1',
        description: 'Description for item 1',
        price: 29.99,
    },
    {
        id: 2,
        image: '/path/to/image2.jpg',
        name: 'Item 2',
        description: 'Description for item 2',
        price: 49.99,
    },
    {
        id: 3,
        image: '/path/to/image3.jpg',
        name: 'Item 3',
        description: 'Description for item 3',
        price: 49.99,
    },
    {
        id: 4,
        image: '/path/to/image4.jpg',
        name: 'Item 4',
        description: 'Description for item 4',
        price: 49.99,
    },
    {
        id: 5,
        image: '/path/to/image5.jpg',
        name: 'Item 5',
        description: 'Description for item 5',
        price: 49.99,
    },
    {
        id: 6,
        image: '/path/to/image6.jpg',
        name: 'Item 6',
        description: 'Description for item 6',
        price: 49.99,
    },
    {
        id: 7,
        image: '/path/to/image7.jpg',
        name: 'Item 7',
        description: 'Description for item 7',
        price: 49.99,
    },
    {
        id: 8,
        image: '/path/to/image8.jpg',
        name: 'Item 8',
        description: 'Description for item 8',
        price: 49.99,
    }
];

export default function Store() {
    return (
        <GridContainer>
            {items.map((item) => (
                <Card
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </GridContainer>
    );
}
