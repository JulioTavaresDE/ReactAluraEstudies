import Botao from '../Botao';
import Relogio  from './Relogio';
import style  from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../Types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
    selecionado:ITarefa | undefined
}

export default function Cronometro({selecionado}:Props){
    const [tempo,setTempo] = useState<number>();
    useEffect(() => {

    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado?.tempo))
    }
    },[selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card que inicia um Cronomerto</p>
           
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao>Comecar!</Botao>
        </div>
    )
}