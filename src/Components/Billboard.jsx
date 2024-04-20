import "../Styles/Billboard.css";
import Airtable from "airtable";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Assuming you have imported the icons
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { FcHighPriority } from "react-icons/fc";




const Billboard = () => {
  const [billboardItems, setBillboard] = useState([]);
  const [offset, setOffset] = useState(0);
  const [note, setNote] = useState(0);
  const [length, setLength] = useState(0);
  const pageLength = 5;

  const [visibleIndex, setVisibleIndex] = useState(null); // State to track the visible div index

  useEffect(() => {
    var base = new Airtable({
      apiKey:
        "patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e",
    }).base("app3s7iPWjKOvxwVy");
    base("Billboard")
      .select({
        view: "Grid view",
        maxRecords: 100,
      })
      .eachPage(
        function page(billboardItems, fetchNextPage) {
          const updatedBillboardItems = [
            ...billboardItems,
            ...billboardItems.map((record) => ({
              id: record.get("id"),
              description: record.get("description"),
              date: record.get("date"),
              text: record.get("text"),
            })),
          ];
          setLength(updatedBillboardItems.length);
          var funcshift = 0;
          for (let i = 0; i < updatedBillboardItems.length; i++) {
            if (
              typeof updatedBillboardItems[i].id === "number" &&
              !isNaN(updatedBillboardItems[i].id)
            ) {
              funcshift = updatedBillboardItems[i].id;
            }
          }
          const filteredRecord = updatedBillboardItems.slice(
            funcshift + offset,
            funcshift + pageLength + offset
          );
          console.log(updatedBillboardItems.slice(5, 7));
          setNote(filteredRecord[0]);
          setBillboard(filteredRecord);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, [offset]);

  function fetchNextPage() {
    if (
      offset + pageLength <=
      Math.floor((length - 12) / pageLength) * pageLength
    ) {
      console.log(offset + pageLength);
      setOffset(offset + pageLength);
    }
  }
  function fetchPrevPage() {
    if (offset - pageLength >= 0) {
      setOffset(offset - pageLength);
    }
  }
  function handleClick(index, key) {
    const val = key - 1;
    setNote(billboardItems[val - offset]);
    console.log(note);
    setVisibleIndex(index === visibleIndex ? null : index); // Toggle visibility
  }
  return (
    <div className="billboard">
      <div className="billboard-title"><FcHighPriority />NOTIFICATIONS<FcHighPriority /></div>
      <div className="wrapper-billboard">
        <div className="billboard-container">
          <div className="bills">
            {Array.isArray(billboardItems) &&
              billboardItems.map(
                (record, index) =>
                  record.description && (
                    <div className="bill-wrapper" key={record.id}>
                      <div
                        className="bill"
                        onClick={() => handleClick(index, record.id)}
                      >
                        <div className="bill_desc">{record.description}</div>
                        <div className="bill_date">{record.date}</div>
                        <div style={{ cursor: "pointer", padding: "2.1vh" }}>
                          {visibleIndex === index ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                      </div>
                      {visibleIndex === index && ( // Render the div only if index matches visibleIndex
                        <div className="big-notification">
                          <Card className="current-note">
                            {/* <div className="note-desc">{record.description}</div> */}
                            {/* <div className="note-text">{record.text}</div> */}
                            {record.text}
                          </Card>
                        </div>
                      )}
                    </div>
                  )
              )}
          </div>
          <div className="pageit">
            <div className="btn btn__secondary" onClick={fetchPrevPage}>
            <GoChevronLeft />
            </div>
            <div className="btn btn__secondary" onClick={fetchNextPage}>
            <GoChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
