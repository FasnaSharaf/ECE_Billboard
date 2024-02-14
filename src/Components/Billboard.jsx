import React, { useEffect, useState } from 'react';
import '../Styles/Billboard.css';
import Airtable from 'airtable';
import Card from './Card';
function Billboard() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
      var base = new Airtable({apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'}).base('app3s7iPWjKOvxwVy');
  
      base('Events').select({
          maxRecords: 10,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          const updatedRecords = [...records, ...records.map(record => ({
            name: record.get('Name'),
            regLink: record.get('Registration link'),
            assets: record.get('Assets')[0].url,
            eventDate: record.get('Event Date'),
            tags: record.get('Tags'),
            deadline: record.get('Regdeadline'),
            contact: record.get('Contact info'),
            description: record.get('Description')
          }))];
          console.log(updatedRecords);
          setRecords(updatedRecords);
          fetchNextPage();
  
      }, function done(err) {
          if (err) { console.error(err); return; }
      });
    }, []);
    return (
        <div className="billboard-container" id='billboard'>
            <Card name="test" description="test2" url="www.google.com"></Card>
        </div>
        

        
    );
}

export default Billboard;