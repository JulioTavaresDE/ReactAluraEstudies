import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../Types/tarefa';
    
function Lista({tarefas}: {tarefas:ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index)=>(
                   <Item
                        key={index}
                        tarefa ={item.tarefa}
                        tempo = {item.tempo}
                        selecionado = {item.selecionado}
                        completado = {item.completado}
                        id = {item.id}
                   />
                ))}
               
            </ul>
        </aside>
    )
}

export default Lista;