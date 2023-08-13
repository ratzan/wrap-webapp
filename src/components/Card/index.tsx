import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ItemName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  margin-bottom: 10px;
`;

const ItemPrice = styled.span`
  font-weight: bold;
`;

interface CardProps {
    image: string;
    name: string;
    description: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ image, name, description, price }) => {
    return (
        <CardContainer>
            <ItemImage src={image} alt={name} />
            <ItemName>{name}</ItemName>
            <ItemDescription>{description}</ItemDescription>
            <ItemPrice>${price.toFixed(2)}</ItemPrice>
        </CardContainer>
    );
};

export default Card;
