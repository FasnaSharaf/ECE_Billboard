base('Carousal').select({view: "Grid view"})
.eachPage((records, fetchNextPage)=>{
  records.forEach(function(record){
      console.log(record.get('name'))
  });
  fetchNextPage();
}, 
function done(err) {
    if (err) { console.error(err); return; }
});