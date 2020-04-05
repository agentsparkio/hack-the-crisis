import React from 'react';
import { Card, Button } from "@blueprintjs/core";
import "./alert.css";

function Alert({ title, content, confirmText, cancelText, confirmFunc, cancelFunc, isHidden}) {
  if(isHidden) return null;

    return (
        <div className="Alert">
            {!isHidden && <Card interactive={false} className="bottomSpace"
            >
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <p><Button onClick={confirmFunc} intent="success" className="rightMargin">{confirmText}</Button> 
                    <Button intent="info" onClick={cancelFunc}>{cancelText}</Button>
                    </p>
                    
            </Card>}
        </div>
    );
}

export default Alert;
