import { useDispatch, useSelector } from 'react-redux';
import { rename, submit,clear } from './features/robot/robotSlice';
import './index.css';

export default function App() {
  const { name, newAr, warning } = useSelector((state) => state.robot);
  const dispatch = useDispatch();


console.log(name)
console.log(newAr)
  return (
    <div className='App'>
      <h1>ROBOTS</h1>
      <form onSubmit={(e)=> {
        e.preventDefault();
    if (name.trim()) {
      dispatch(submit(name)); 
      dispatch(rename('')); 
    }}}>
        <input 
          value={name}
          onChange={(e) => {
            dispatch(rename(e.target.value));
          }} 
          placeholder="Yeni isim girin"
        />
        <button type='submit'>Ekle</button>
      </form>
      <h3>EKLENEN ROBOTLAR:</h3>
      <h3 style={{color:"red"}}>{warning}</h3>
      <ul>
        {newAr.map((item, index) => (
          <>
          <li key={index}>
            {item.name}
            <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
          </li>
          <button onClick={()=>dispatch(clear(item.id))}>Sil</button>
          </>
        ))}
      </ul>
    </div>
  );
}
