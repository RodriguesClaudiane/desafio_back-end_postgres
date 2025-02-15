import Model from './Model';
import "./Task";

export default async function(){
    await Model.authenticate();
    await Model.sync({force:true});
    console.log('Tudo conectado tudo conectado')
}