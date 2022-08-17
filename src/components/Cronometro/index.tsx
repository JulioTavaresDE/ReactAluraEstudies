import Botao from '../Botao';
import Relogio  from './Relogio';
import style  from './Cronometro.module.scss';

export default function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card que inicia um Cronomerto</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>Comecar!</Botao>
        </div>
    )
}