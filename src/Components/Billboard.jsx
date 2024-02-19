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
            <Card name="test" description="test2" url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-kB9LF7kd6_U%2FTmRLtKn7oHI%2FAAAAAAAAA2c%2F4f9PfPb0yJY%2Fs1600%2Frat_1.jpg&f=1&nofb=1&ipt=519bc490036b96ac84df2ac0e0c6c796aa6c993ffc14e6b42cdebce73b959c3f&ipo=images"></Card>
        </div>
        

        
    );
}

export default Billboard;