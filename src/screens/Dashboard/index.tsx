import React from 'react';
import { HighlightCard } from '../../components/HighlightCard/index';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard/index';


import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){     
    const data : DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title:'Desenvovimento',
        amount:'R$ 14.500,00',
        category:{name: 'Vendas', icon: 'dollar-sign'},
        date: '14/01/2022'
    },
    {
        id: '2',
        type: 'negative',
        title:'Comida',
        amount:'R$ 500,00',
        category:{name: 'Alimentacao', icon: 'coffee'},
        date: '14/01/2022'
    },
    {
        id: '3',
        type: 'negative',
        title:'Aluguel',
        amount:'R$ 1.500,00',
        category:{name: 'Casa', icon: 'shopping-bag'},
        date: '14/01/2022'
    }
];

    return(
        <Container>
            <Header>
                <UserWrapper>                
                    <UserInfo>
                        <Photo 
                            source={{uri:'https://avatars.githubusercontent.com/u/46966269?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Ronan</UserName>
                        </User>                     
                    </UserInfo>
                <LogoutButton onPress={()=>{}}>
                    <Icon name ="power"/>  
                </LogoutButton>             
                </UserWrapper>            
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type='up'
                    title='Entradas'
                    amount='R$ 17.400,00'
                    lastTransaction='Ultima Transacao'
                />
                <HighlightCard 
                    type='down'
                    title='Saidas'
                    amount='R$ 1.000,00'
                    lastTransaction='Ultima Transacao'
                />
                <HighlightCard 
                    type='total'
                    title='Total'
                    amount='R$ 16.400,00'
                    lastTransaction='01 a 06 abril'
                />
                
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}                 
                />
            </Transactions>
          
        
        </Container>
    )
}
