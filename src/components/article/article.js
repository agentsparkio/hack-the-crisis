import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import "./article.css";

function Article({ image, title, description, points }) {
    return (
        <div className="Article">
            <Card interactive={true} elevation={Elevation.TWO}>
                <div className="Article__image" style={{ backgroundImage: `url("${image}")` }} />
                {/* <div className="left"><Badge points="20" /></div> */}
                <div className="Article__content">
                    <h5>
                        <a href="http://www.test.com">{title}</a>
                    </h5>
                    <p className="Article__desc">{description}</p>
                    <Badge points={points} />
                </div>
            </Card>
            <div className="clear" />
        </div>
    );
}

export default Article;
