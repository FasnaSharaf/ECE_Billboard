import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import "../Styles/Oppam.css";

export default function NestedList({records}) {
  const [openIndices, setOpenIndices] = React.useState([]);

  const handleClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  // Define the data structure for main list and sublists
  // const mainList = [
  //   {
  //     mainItem: "Semester 3",
  //     subItems: [
  //       { name: "LCD", link: "https://drive.google.com/file/d/1GlTDfWBATNV2H7QDCT_7vXOYz-0vXt5c/view?usp=drive_link" },
  //       { name: "Maths", link: "https://drive.google.com/file/d/19XbKj5vSj7YyA8GWRdnUBG65UCjAgvXT/view?usp=drive_link" },
  //       { name: "Professional Ethics", link: "https://drive.google.com/file/d/1hWxfrCfVkZ3Vhpvay7K4fBDcBzkOOXyl/view?usp=drive_link" },
  //       { name: "Sustainable Engineering", link: "https://drive.google.com/file/d/1hWxfrCfVkZ3Vhpvay7K4fBDcBzkOOXyl/view?usp=drive_link" },
        
  //     ],
  //   },
  //   {
  //     mainItem: "Semester 5",
  //     subItems: [
  //       { name: "ADC", link: "https://drive.google.com/file/d/1iv3OQf9k25nqUpu7Wa73rQ_62ShuRNdg/view?usp=drive_link" },
  //       { name: "Control Systems", link: "https://drive.google.com/file/d/1gIFNUWFiVtikUd2YJVGeq-aqTJVGfyhZ/view?usp=drive_link" },
  //       { name: "DSP", link: "https://drive.google.com/file/d/1B0hSI_uFV2TKi7GGvhkRpVlfxb7vuKDk/view?usp=drive_link" },
  //       { name: "LIC", link: "https://drive.google.com/file/d/1Slo8EM9n7RnE1M3rppfxq3RAXrVmSOQJ/view?usp=drive_link" },
  //     ],
  //   },
  //   {
  //     mainItem: "Semester 7",
  //     subItems: [
  //       { name: "Computer Networks", link: "https://drive.google.com/file/d/1BdJuEqP6FMajVKpXbFWDYEc9ebVmOrPq/view?usp=drive_link" },
  //       { name: "OFC", link: "https://drive.google.com/file/d/1Z_2DVtvlnJ5rxUijzyWuLCP4O80Lr2NA/view?usp=drive_link" },
  //       { name: "Microwaves and Antennas", link: "https://drive.google.com/file/d/1VRpReh2ESyZamnX4KzHwr8iAgJCQVHvs/view?usp=drive_link" },
  //     ],
  //   },
  //   // Add more main items with their respective subitems
  // ];

  return (
    <div className="oppam">
      <div className="top">
        <h1>OPPAM</h1>
        <h3>Academic Assistance</h3>
        <p>
          OPPAM: EC department's initiative at College of Engineering Trivandrum
          fosters collaborative learning. Students share notes and resources to
          enhance academic performance, promoting a culture of support and
          success.
        </p>
      </div>
      <div className="content">
        <List
          sx={{
            width: "80%",
            bgcolor: "#0f0f0f!important",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader"sx={{
                bgcolor: "#0f0f0f",
                color: "white",
                position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      margin: "0 auto",
      bottom: 0,
      left: "50%", // Center the line horizontally
      transform: "translateX(-50%)", // Move the line back by half of its width
      // width: "fit-content", // Set the width to fit the content (text)
      width: "calc(100% - 0px)",
      height: "3px",
      backgroundColor: "#008170",
      borderBottomLeftRadius: "5px", // Adjust as needed
      borderBottomRightRadius: "5px", // Adjust as needed
    },
              }}>
              Previous Year QPs
            </ListSubheader>
          }
        >
          {records.map((mainItem, index) => (
            <div key={index}>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemText primary={`Semester ${mainItem.semester}`} />
                {openIndices.includes(index) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openIndices.includes(index)} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "row", // Display items in rows
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    gap: "10px",
                    padding: "10px", // Add padding for spacing
                  }}
                >
                  {mainItem.subItems.map((subItem, subIndex) => (
                    <ListItemButton
                      key={subIndex}
                      component="a"
                      href={subItem.link}
                      target="_blank"
                      sx={{
                        width: "calc(33.33% - 10px)",
                        margin: "5px",
                        backgroundColor: "#232D3F", // Background color
                        padding: "15px", // Increase padding
                        borderRadius: "10px", // Border radius
                        "&:hover": {
                            backgroundColor: "#008170", // Change background color on hover
                          },
                    
                      }}
                    >
                      <ListItemText primary={subItem.name} sx={{
      fontStyle: "normal",
      // color: "rgb(186, 198, 221)" // Set text style to normal
    }} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </div>
    </div>
  );
}
