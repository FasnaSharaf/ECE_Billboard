import '../Styles/Billboard.css';
import Airtable from 'airtable';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
const Billboard = () => {
    const [billboardItems, setBillboard] = useState([]);
    const [offset,setOffset] = useState(0);
    const [note,setNote] = useState(0);
    const pageLength = 5;
    const arrayLength = 0;
    useEffect(() => {
        var base = new Airtable({apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'}).base('app3s7iPWjKOvxwVy');
        base('Billboard').select({
            view: "Grid view",
            maxRecords: 100,
          }).eachPage(function page(billboardItems, fetchNextPage) {
            const updatedBillboardItems = [...billboardItems, ...billboardItems.map(record => ({
              id: record.get('id'),
              description: record.get('description'),
              date: record.get('date'),
              text: record.get('text')
            }))];
            const filteredRecord=updatedBillboardItems.slice(12+offset,12+pageLength+offset);
            setNote(filteredRecord[0]);
            setBillboard(filteredRecord);
            fetchNextPage();
    
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [offset]);

    function fetchNextPage(){
        if((offset+pageLength)<=Math.floor(arrayLength/pageLength)*pageLength){
            setOffset(offset+pageLength);
        }
        setOffset(offset+pageLength);
        console.log(offset);
    }
    function fetchPrevPage(){
        if((offset-pageLength)>=0){
        setOffset(offset-pageLength);
        }
    }
    function handleClick(key){
        const val=key-1;
        setNote(billboardItems[val-offset]);
        console.log(note);
    }
    return (
    <div className='billboard'>
        <div className="billboard-title">Notifications</div>
        <div className="wrapper-billboard">
        <div className="big-notification">
        {note && (
            <Card className="current-note">
                <div className="note-desc">{note.description}</div>
                <div className="note-text">{note.text}</div>
            </Card>
)}
        </div>
        <div  className="billboard-container">
        <div className="bills">
        {Array.isArray(billboardItems) && billboardItems.map(record => (
            record.description && (
                <div className="bill-wrapper"  key={record.id}  onClick={() => handleClick(record.id)}>
                    <div className='bill'> 
                        <div className='bill_desc'>{record.description}</div>
                        <div className='bill_date'>{record.date}</div>
                    </div>
                </div>
            )
        ))}
        </div>
        <div className="pageit">
          <div className='btn btn__secondary' onClick={fetchPrevPage}>Prev</div>
          <div className='btn btn__secondary' onClick={fetchNextPage}>Next</div>
        </div>
        </div>
        </div>
    </div>
);

}

export default Billboard;