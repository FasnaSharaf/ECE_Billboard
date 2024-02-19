import '../Styles/Billboard.css';
import Airtable from 'airtable';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
function Billboard() {
    const [billboardItems, setBillboard] = useState([]);
    const [offset,setOffset] = useState(0);
    const [note,setNote] = useState({});
    const pageLength = 10;
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
            setNote(updatedBillboardItems[13]);
            console.log(note)
            const filteredRecord=updatedBillboardItems.slice(12+offset,12+10+offset);
            setBillboard(filteredRecord);
            fetchNextPage();
    
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [offset]);

    function fetchNextPage(){
        setOffset(offset+10);
        console.log(offset);
    }
    function fetchPrevPage(){
        setOffset(offset-10);
        console.log(offset);
    }
    function handleClick(key){
        console.log("key"+key);
    }
    return (
    <div className='billboard'>
        <div className="billboard-title">Notifications</div>
        <div className="wrapper-billboard">
        <div className="big-notification">
            <Card className="current-note">
                {note.description}
            </Card>
        </div>
        <div  className="billboard-container">
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
        <div className="pageit">
          <button onClick={fetchPrevPage}>Prev</button>
          <button onClick={fetchNextPage}>Next</button>
        </div>
        </div>
        </div>
    </div>
);

}

export default Billboard;