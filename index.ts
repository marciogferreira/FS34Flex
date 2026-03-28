let texto: string = "Max"

type Veiculo = {
    modelo: string;
    marca: string
}

type PessoaData = {
    nome: string;
    cpf: string;
    endereco: string;
    filho: {
        nome: string
    },
    veiculos: Veiculo[]
}


function exibirObjeto(pessoa: PessoaData) {
    console.log(pessoa.nome)
    console.log(pessoa.cpf)
    console.log(pessoa.endereco)
    console.log(pessoa.filho.nome)
}

exibirObjeto({
    nome: 'Marcio',
    cpf: '0000000',
    endereco: 'Rua tal',
    filho: {
        nome: 'Jose'
    },
    veiculos: [
        {
            modelo: '',
            marca: ''
        }
    ]
})