import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Gal from "./Gal";
import Upload from "./Upload";
import ToolbarDemo from "./Toolbar/Toolbar";
import "./Gallery.css";

export default function Gallery() {

    return (
        <div className="gallery-viewport" style={{width: "100vw", height: "50vh"}}>
            <div className="filter-toolbar">
                <ToolbarDemo />
            </div>
            <div className="preview-window-content">
                
            </div>
            <div className="new-point-action">
                <button id="button-add-new">Add new point</button>
            </div>
        </div>
    );
  }