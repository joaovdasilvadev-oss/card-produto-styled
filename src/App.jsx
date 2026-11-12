import { useState } from 'react';
import styled from 'styled-components';
import CardProduto from './components/CardProduto';

const Pagina = styled.main`
    min-height: 100vh;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f4f5f7;
`;

const Titulo = styled.h1`
    color: #222;
    font-size: 32px;
    text-align: center;
    margin-bottom: 35px;
`;

const Produtos = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    width: 100%;
`;

function App() {
    const [adicionado, setAdicionado] = useState(false);

    function adicionarCarrinho() {
        setAdicionado(!adicionado);
    }

    return (
        <Pagina>
            <Titulo>Minha Loja de Produtos</Titulo>

            <Produtos>
                <CardProduto
                    nome="Headset Gamer"
                    preco="R$ 299,90"
                    adicionado={adicionado}
                    onAdicionar={adicionarCarrinho}
                />
            </Produtos>
        </Pagina>
    );
}

export default App;