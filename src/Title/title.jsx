import React from "react";
import styles from "./title.module.scss";

function Title(props) {
    return (
        <div className={styles["title-area"]}>
            <h1> Sample Question Paper</h1>
        </div>
    );
}

export default Title;