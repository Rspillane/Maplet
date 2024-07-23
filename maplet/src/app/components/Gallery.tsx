import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Gal from "./Gal";
import Upload from "./Upload";

export default function Gallery() {

    return (
        <div className="gallery-viewport" style={{width: "50vw", height: "100vh"}}>
            <div className="display">
            </div>
            <div className="actions">
                <Gal />
                <Upload />
                <button>Add new point</button>
            </div>
        </div>
    );
  }