import styled from 'styled-components';

const Card = styled.div`
    width: 300px;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;

    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ImagemProduto = styled.div`
    width: 100%;
    height: 160px;
    background-color: #f1f1f1;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 60px;
`;

const NomeProduto = styled.h2`
    color: #222;
    font-size: 22px;
    margin: 20px 0 10px;
`;

const PrecoProduto = styled.p`
    color: #198754;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Botao = styled.button`
    width: 100%;
    padding: 12px;

    border: none;
    border-radius: 8px;

    background-color: ${({ $adicionado }) =>
        $adicionado ? '#198754' : '#6c757d'};

    color: white;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        opacity: 0.9;
    }
`;

function CardProduto({ nome, preco, adicionado, onAdicionar }) {
    return (
        <Card>
            <ImagemProduto>
                🎧
            </ImagemProduto>

            <NomeProduto>{nome}</NomeProduto>

            <PrecoProduto>{preco}</PrecoProduto>

            <Botao
                $adicionado={adicionado}
                onClick={onAdicionar}
            >
                {adicionado
                    ? 'Adicionado ao carrinho!'
                    : 'Adicionar ao carrinho'}
            </Botao>
        </Card>
    );
}

export default CardProduto;