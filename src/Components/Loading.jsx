import React from "react";
import ReactLoading from "react-loading";
 
export default function Loading() {
    return (
        <div>
            <div style={{ backgroundColor: '#0f0f0f', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <ReactLoading type="bubbles" color="#FFFFFF" height={150} width={150} />
  
</div>

            
        </div>
    );
}