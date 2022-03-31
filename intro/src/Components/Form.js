/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import {nanoid} from 'nanoid';

function Form(props) {
    const [form, setForm] = useState({
        date: '',
        distance: ''}); 
    const [table, setTable] = useState([]); 
    const handleDateChange= evt=> {setForm(prevForm=> ({...prevForm, date: evt.target.value}))};
    const handleDistanceChange= evt=> {setForm(prevForm=> ({...prevForm, distance: evt.target.value}))};
    const addNote =  e => { 
        e.preventDefault();
        console.log("addnote");
        console.log(form);
        const existingDate = table.filter(cell => cell.date === form.date);
        console.log(existingDate);
        if(existingDate.length > 0) {
            console.log("popopo");
            console.log(table);
            let index = 0;
            table.map(cell =>{if(cell.date === form.date) {
                index = table.indexOf(cell)}}
            ) 
            console.log(index);
            setTable(prevTable=> ([...prevTable, table[index].distance = String(Number(table[index].distance) + Number(form.distance))]))
            console.log(table)} else 
        setTable(prevTable=>([...prevTable, {'date': form.date, 'distance': form.distance, 'action': <svg width="15px" height="15px" enableBackground="new 0 0 415.188 415.188" version="1.1" viewBox="0 0 415.19 415.19" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="m412.86 78.976c3.404-6.636 2.831-14.159-0.15-20.404 0.84-7.106-1.02-14.321-7.746-19.855-6.262-5.151-12.523-10.305-18.781-15.457-11.005-9.055-28.237-11.913-38.941 0-48.619 54.103-99.461 105.86-152.17 155.72-39.185-36.605-78.846-72.713-118.22-108.87-13.82-12.693-33.824-8.71-42.519 6.411-12.665 6.286-22.931 14.481-31.42 28.468-4.042 6.664-3.727 15.076 0 21.764 25.421 45.578 74.557 85.651 114.96 122.53-5.406 4.839-10.772 9.724-16.287 14.461-54.43 46.742-91.144 76.399-23.029 124.32 0.919 0.647 1.856 0.504 2.789 0.882 1.305 0.602 2.557 1.026 4.004 1.264 0.45 0.017 0.87 0.093 1.313 0.058 1.402 0.114 2.774 0.471 4.195 0.192 36.621-7.18 70.677-35.878 101.58-67.48 30.1 29.669 62.151 58.013 97.395 74.831 8.391 4.005 18.395 1.671 24.855-3.931 10.832 0.818 20.708-5.913 25.665-15.586 0.734-0.454 1.207-0.713 2.002-1.21 15.748-9.838 17.187-29.431 5.534-42.936-26.313-30.492-54.284-59.478-82.798-87.95 51.341-50.166 115.45-104.27 147.78-167.23z"/>
        </svg>}]))
        
        setForm(prevForm=> ({...prevForm = {date: '', distance: ''}}));
        console.log(form);
        console.log(table);
        setTable(prevTable=>([...prevTable.sort(function(a, b){
            console.log(a);
            console.log(b);
            const  dateA=new Date(a.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')); 
            const dateB=new Date(b.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            return dateB-dateA
            })])) }
        console.log(table)
        function deleteNote(note, e){
           console.log(note); 
           setTable(prevTable=>([...prevTable.filter(cell => cell.date !== note)]))}
        const addTable = table.map((note) =>
        <tr key={nanoid()} className='cells'>
        <td className='cell-date'>{note.date}</td><td className='cell-distance'>{note.distance}</td><td className='cell-action' onClick={(e)=>deleteNote(note.date, e)}>{note.action}</td>
        </tr>) ;
        console.log(table);
      return (
      <>
      <form className='steps-form'>
            <div className='date-input'>
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input id="date" name="date" value={form.date} onChange={handleDateChange}/> 
            </div>
            <div className='distance-input'>
            <label htmlFor="distance">Пройдено КМ</label>
            <input id="distance" name="distance" value={form.distance} onChange={handleDistanceChange}/> 
            </div>
            <button className='ok' onClick={(e)=>addNote(e)}>ОК</button>
        </form>
        <table>
    <tbody>
      <tr className='headers'>
        <th className='header-date'>Дата (ДД.ММ.ГГ)</th><th className='header-distance'>Пройдено КМ</th><th className='header-action' >Действия</th>
      </tr>
      {addTable} 
    </tbody>
        </table>
      </>
        
  );
}

export default Form;